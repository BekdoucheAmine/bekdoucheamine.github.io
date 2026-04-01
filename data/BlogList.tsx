export type Blog = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  link: string;
  tags: string[];
};

export const BlogList: Blog[] = [
  {
    id: "b1",
    title: "Direct Memory Access via High-Performance AXI Ports (Simple Polling Example)",
    date: "2026-03-15",
    excerpt: "Implementing high-speed data transfers on the Zynq-7000 SoC. A practical guide to architecting DMA engines, managing cache coherency, and optimizing data flow.",
    link: "/blog/DmaHPSimplePoll",
    tags: ["Embedded Systems", "DMA", "Zynq-7000"]
  },
  {
    id: "b2",
    title: "Direct Memory Access via High-Performance AXI Ports (Interrupt Example)",
    date: "2026-04-01",
    excerpt: "Transitioning from \"wait-and-watch\" polling to high-performance asynchronous data movement. A deep dive into GIC configuration, ISR latency, and hardware logic inspection.",
    link: "/blog/DmaHPInterrupt",
    tags: ["Embedded Systems", "DMA", "Zynq-7000"]
  }
];