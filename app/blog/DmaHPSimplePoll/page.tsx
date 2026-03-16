"use client";

// Zynq-7000 DMA Article Page
// A technical showcase page for your portfolio

export default function DmaHPSimplePoll() {
  return (
    <main className="px-8 py-20 max-w-4xl mx-auto space-y-12">
      
      {/* HEADER: Technical Metadata */}
      <header className="border-b border-gray-100 dark:border-gray-800 pb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase rounded-md tracking-wider">
            Embedded Systems
          </span>
          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase rounded-md tracking-wider">
            DMA
          </span>
          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase rounded-md tracking-wider">
            Zynq-7000
          </span>
          <span className="text-gray-400 text-xs font-mono">March 15, 2026</span>
        </div>
        <h1 className="text-5xl font-extrabold text-foreground tracking-tight mb-6">
          Direct Memory Access via High-Performance AXI Ports (Simple Polling Example)
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Implementing high-speed data transfers on the Zynq-7000 SoC. A practical guide to 
          architecting DMA engines, managing cache coherency, and optimizing data flow.
        </p>
      </header>

      {/* BODY: Structured technical content */}
      <article className="space-y-12 text-gray-700 dark:text-gray-300 leading-relaxed">
        
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">The Challenge of High-Speed Data</h2>
          <p>
            In high-performance embedded systems, the bottleneck is rarely the processing power itself, 
            but the movement of data. Using the Zynq-7000's AXI High-Performance (HP) Slave ports provides 
            a dedicated, low-latency pathway between Programmable Logic (PL) and DDR memory. However, 
            this efficiency comes at a cost: the need for manual cache management.
          </p>
        </section>

        {/* MATERIALS SECTION */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Required Materials</h2>
          <ul className="list-decimal pl-6 space-y-2">
            <li><strong>Hardware:</strong> Cora Z7-07S (Zynq-7000)</li>
            <li><strong>Toolchain:</strong> Xilinx Design Pack 2018.3 (Vivado + SDK)</li>
            <li><strong>Monitoring:</strong> Tera Term (Serial) & HxD (Binary analysis)</li>
          </ul>
        </section>

        {/* ILLUSTRATION: DMA Polling Architecture */}
        <section className="p-8 bg-surface border border-gray-100 dark:border-gray-800 rounded-3xl shadow-sm">
          <h3 className="text-lg font-bold text-foreground mb-6">DMA Polling Architecture</h3>
          <a href="/images/blog/DmaHPSimplePoll/dma_hp_simple_poll_arch.png" target="_blank" rel="noopener noreferrer">
            <img src="/images/blog/DmaHPSimplePoll/dma_hp_simple_poll_arch.png" alt="Full view" />
          </a>
          <p className="text-sm mt-4 text-gray-500 italic text-center">
            Figure 1: The AXI DMA acts as the "mover," bridging the gap between DDR memory and custom logic streams.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Mastering Cache Coherency</h2>
          <p className="mb-4">
            Because the HP ports operate in a non-coherent domain, the DMA controller is oblivious to the 
            CPU's L1/L2 caches. Failing to synchronize leads to "stale data" bugs where the CPU reads 
            what it *thinks* is in memory, while the actual data sits in the cache. 
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Xil_DCacheFlushRange:</strong> Essential before a DMA Read (moving RAM to Peripheral) to push cache updates to DDR.</li>
            <li><strong>Xil_DCacheInvalidateRange:</strong> Vital after a DMA Write (Peripheral to RAM) to discard stale CPU cache lines.</li>
          </ul>
        </section>

        {/* TECHNICAL SNIPPET: DMA Setup */}
        <section className="p-8 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl shadow-inner">
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Configure the hardware</h3>
          <pre className="bg-black text-blue-400 p-6 rounded-xl font-mono text-sm overflow-x-auto">
          {`XAxiDma_Config *CfgPtr;
CfgPtr = XAxiDma_LookupConfig(DeviceId);
if (!CfgPtr) {
    xil_printf("No config found for %d\r\n", DeviceId);
    return XST_FAILURE;
}
Status = XAxiDma_CfgInitialize(&AxiDma, CfgPtr);
if (Status != XST_SUCCESS) {
    xil_printf("Initialization failed %d\r\n", Status);
    return XST_FAILURE;
}`}
            </pre>

          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Disable interrupts for polling mode</h3>
          <pre className="bg-black text-blue-400 p-6 rounded-xl font-mono text-sm overflow-x-auto">
          {`// s2mm_intr: Device to DMA (Memory) Interrupt
XAxiDma_IntrDisable(&AxiDma, XAXIDMA_IRQ_ALL_MASK,
                    XAXIDMA_DEVICE_TO_DMA);

// mm2s_intr: DMA (Memory) to Device Interrupt
XAxiDma_IntrDisable(&AxiDma, XAXIDMA_IRQ_ALL_MASK,
                    XAXIDMA_DMA_TO_DEVICE);`}
            </pre>

          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Initiate the transfer</h3>
          <pre className="bg-black text-blue-400 p-6 rounded-xl font-mono text-sm overflow-x-auto">
          {`// S2MM: Device to DMA (Memory)
Status = XAxiDma_SimpleTransfer(&AxiDma,(UINTPTR) RxBufferPtr,
                                MAX_PKT_LEN, XAXIDMA_DEVICE_TO_DMA);

// MM2S: DMA (Memory) to Device
Status = XAxiDma_SimpleTransfer(&AxiDma,(UINTPTR) TxBufferPtr,
                                MAX_PKT_LEN, XAXIDMA_DMA_TO_DEVICE);`}
          </pre>
        </section>
    
        {/* RESULTS SECTION */}
        <section className="p-8 bg-surface border border-gray-100 dark:border-gray-800 rounded-3xl shadow-sm">
          <h3 className="text-lg font-bold text-foreground mb-6">DMA Transfer DataCheck() Results</h3>
          <a href="/images/blog/DmaHPSimplePoll/dma_hp_results.png" target="_blank" rel="noopener noreferrer">
            <img src="/images/blog/DmaHPSimplePoll/dma_hp_results.png" alt="Full view" />
          </a>
          <p className="text-sm mt-4 text-gray-500 italic text-center">
            Figure 2: Successful DMA transfer to DDR on UART console.
          </p>
        </section>
      
      </article>

      {/* FOOTER: Next Steps */}
      <footer className="pt-12 mt-12 border-t flex items-center justify-between">
        <a href="https://github.com/BekdoucheAmine/axi-dma-sp-cora-z7-07s/" 
           target="_blank" 
           className="px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-full font-bold hover:opacity-80 transition-opacity">
          View Source on GitHub
        </a>

        <a 
          href="/blog" 
          className="text-blue-600 dark:text-blue-400 font-semibold hover:underline transition-colors"
        >
          ← Technical Insights
        </a>
        
        <a 
          href="/" 
          className="text-blue-600 dark:text-blue-400 font-semibold hover:underline transition-colors"
        >
          ← Home
        </a>
      </footer>
    </main>
  );
}