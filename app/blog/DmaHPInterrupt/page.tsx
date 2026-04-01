"use client";

export default function DmaHPInterrupt() {
    return (
        <main className="px-8 py-20 max-w-4xl mx-auto space-y-12">
            {/* HEADER: Technical Metadata */}
            <header className="border-b border-gray-100 dark:border-gray-800 pb-12">
                <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase rounded-md tracking-wider">
                    Embedded Systems
                </span>
                <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase rounded-md tracking-wider">
                    Interrupts
                </span>
                <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase rounded-md tracking-wider">
                    FPGA
                </span>
                <span className="text-gray-400 text-xs font-mono">April 1, 2026</span>
                </div>
                <h1 className="text-5xl font-extrabold text-foreground tracking-tight mb-6">
                Event-Driven DMA: Implementing Interrupts via AXI HP Ports
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400">
                Transitioning from "wait-and-watch" polling to high-performance asynchronous 
                data movement. A deep dive into GIC configuration, ISR latency, and hardware logic inspection.
                </p>
            </header>

        {/* BODY: Structured technical content */}
        <article className="space-y-12 text-gray-700 dark:text-gray-300 leading-relaxed">
            
            <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Beyond Polling</h2>
            <p>
                While simple polling is effective for validation, it wastes valuable CPU cycles. 
                By integrating interrupts into the Zynq-7000 architecture, we transform the system into 
                an event-driven powerhouse. This allows the ARM Cortex-A9 to execute complex algorithms 
                while the AXI DMA handles the heavy lifting of moving data between the PL and DDR memory.
            </p>
            </section>

            {/* MATERIALS SECTION */}
            <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Required Materials</h2>
            <ul className="list-decimal pl-6 space-y-2">
                <li><strong>Hardware:</strong> Cora Z7-07S (Zynq-7000)</li>
                <li><strong>Toolchain:</strong> Xilinx Vivado + SDK 2018.3</li>
                <li><strong>Debug:</strong> Integrated Logic Analyzer (ILA) & Tera Term</li>
            </ul>
            </section>

            {/* ILLUSTRATION: DMA Interrupt Architecture */}
            <section className="p-8 bg-surface border border-gray-100 dark:border-gray-800 rounded-3xl shadow-sm text-center">
            <h3 className="text-lg font-bold text-foreground mb-6">DMA Interrupt & Debug Architecture</h3>
            <div className="space-y-6">
                <a href="/images/blog/DmaHPInterrupt/dma_hp_intr_arch.jpg" target="_blank" rel="noopener noreferrer">
                <img src="/images/blog/DmaHPInterrupt/dma_hp_intr_arch.jpg" alt="DMA Interrupt Hardware Architecture" className="rounded-lg mx-auto" />
                </a>
                <p className="text-sm text-gray-500 italic">
                Figure 1: Signal routing using the Concat IP to bridge DMA IRQ lines to the Zynq Processing System.
                </p>
            </div>
            </section>

            <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Hardware Implementation</h2>
            <p className="mb-4">
                The hardware transition requires exposing the <strong>IRQ_F2P</strong> (Fabric to Processor) 
                port on the Zynq IP. Since the AXI DMA provides independent signals for <strong>MM2S</strong> (Memory to Stream) 
                and <strong>S2MM</strong> (Stream to Memory), we utilize a <strong>Concat</strong> IP block to aggregate 
                these signals into a single vector for the Generic Interrupt Controller (GIC).
            </p>
            </section>

            {/* TECHNICAL SNIPPET: Interrupt Setup */}
            <section className="p-8 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl shadow-inner">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">1. Connect Handlers & Start GIC</h3>
            <pre className="bg-black text-emerald-400 p-6 rounded-xl font-mono text-sm overflow-x-auto mb-4">
            {`static int SetupIntrSystem(INTC * IntcInstancePtr, XAxiDma * AxiDmaPtr, u16 TxIntrId, u16 RxIntrId)
{
    // 1. Initialize Interrupt Controller
    XIntc_Initialize(IntcInstancePtr, INTC_DEVICE_ID);

    // 2. Connect Handlers (Callback functions)
    XIntc_Connect(IntcInstancePtr, TxIntrId, (XInterruptHandler) TxIntrHandler, AxiDmaPtr);
    XIntc_Connect(IntcInstancePtr, RxIntrId, (XInterruptHandler) RxIntrHandler, AxiDmaPtr);

    // 3. Start GIC and enable specific hardware lines
    XIntc_Start(IntcInstancePtr, XIN_REAL_MODE);
    XIntc_Enable(IntcInstancePtr, TxIntrId);
    XIntc_Enable(IntcInstancePtr, RxIntrId);

    // 4. Initialize Hardware Exceptions
    Xil_ExceptionInit();
    Xil_ExceptionRegisterHandler(XIL_EXCEPTION_ID_INT, (Xil_ExceptionHandler)INTC_HANDLER, IntcInstancePtr);
    Xil_ExceptionEnable();

    return XST_SUCCESS;
}`}
            </pre>

            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">2. The Interrupt Service Routine (ISR)</h3>
            <pre className="bg-black text-emerald-400 p-6 rounded-xl font-mono text-sm overflow-x-auto mb-4">
            {`static void TxIntrHandler(void *Callback)
{
	u32 IrqStatus;
	int TimeOut;
	XAxiDma *AxiDmaInst = (XAxiDma *)Callback;

	/* 1. Identify the Interrupt Source */
	IrqStatus = XAxiDma_IntrGetIrq(AxiDmaInst, XAXIDMA_DMA_TO_DEVICE);

	/* 2. Acknowledge and Clear */
	// It is vital to acknowledge the interrupt immediately to clear 
	// the hardware latch and prepare for the next event.
	XAxiDma_IntrAckIrq(AxiDmaInst, IrqStatus, XAXIDMA_DMA_TO_DEVICE);

	/* 3. Filter Spurious Interrupts */
	if (!(IrqStatus & XAXIDMA_IRQ_ALL_MASK)) {
		return;
	}

	/* 4. Error Recovery Logic */
	// If the Error mask is set, the DMA engine has halted. 
	// We set a global error flag and initiate a hardware reset.
	if ((IrqStatus & XAXIDMA_IRQ_ERROR_MASK)) {
		Error = 1;
		XAxiDma_Reset(AxiDmaInst);
		TimeOut = RESET_TIMEOUT_COUNTER;

		while (TimeOut) {
			if (XAxiDma_ResetIsDone(AxiDmaInst)) {
				break;
			}
			TimeOut -= 1;
		}
		return;
	}

	/* 5. Completion Assertion */
	// XAXIDMA_IRQ_IOC_MASK indicates "Interrupt on Complete."
	// We set the volatile TxDone flag to notify the main-line code.
	if ((IrqStatus & XAXIDMA_IRQ_IOC_MASK)) {
		xil_printf("---- MM2S Interrupt is Active  ---- \r\n");
		TxDone = 1;
	}
}`}
                </pre>
                <p className="mb-4">
                Pro-Tip: Always use the volatile keyword for completion flags. Without it, the compiler optimizer may assume the variable never changes, causing your main loop to hang indefinitely.
                </p>
            </section>
            <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">Logic Inspection: The "Why" behind Latency</h2>
            <p className="mb-6">
                Using an <strong>Integrated Logic Analyzer (ILA)</strong>, we can observe the micro-timing 
                of these interrupts. A key observation in this project was the duration of the IRQ assertion.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                <img src="/images/blog/DmaHPInterrupt/dma_hp_intr_interrupts.jpg" alt="ILA Interrupt Timing" className="rounded-xl border border-gray-200 dark:border-gray-700" />
                <p className="text-xs text-gray-500 italic">ILA Capture: Note the gap between IRQ rise and de-assertion.</p>
                </div>
                <div className="flex flex-col justify-center">
                <h4 className="font-bold mb-2">Software Latency Explained</h4>
                <p className="text-sm">
                    The hardware clears the interrupt almost instantly, but the CPU takes time to finish 
                    the first ISR before it can jump to the next. In a baremetal environment, this 
                    latency is the cost of context switching and serial logging (<code>xil_printf</code>).
                </p>
                </div>
            </div>
            </section>

            <section className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-3xl border border-blue-100 dark:border-blue-800">
            <h2 className="text-2xl font-bold text-emerald-900 dark:text-emerald-100 mb-4">Results & Validation</h2>
            <pre className="text-sm font-mono text-emerald-800 dark:text-emerald-300">

        {`---- Entering main() ---
---- MM2S Interrupt is Active ----
---- S2MM Interrupt is Active ----
Data valid 0: sent C = received C PASS
... 
Successfully ran AXI DMA interrupt Example
---- Exiting main() ---`}
            </pre>
            </section>
        </article>

        {/* FOOTER: Next Steps */}
        <footer className="pt-12 mt-12 border-t flex flex-wrap gap-6 items-center justify-between">
            <a href="https://github.com/BekdoucheAmine/axi-dma-intr-cora-z7-07s/" 
            target="_blank" 
            className="px-8 py-3 bg-foreground text-background rounded-full font-bold hover:opacity-90 transition-all transform hover:scale-105">
            View Repository
            </a>

            <div className="flex gap-8">
            <a href="/blog" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                ← Back to Blog
            </a>
            <a href="/" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                Home
            </a>
            </div>
        </footer>
    </main>
 );
}