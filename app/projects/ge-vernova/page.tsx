import DemoViewer from "@/components/Project/DemoViewer";
import ProjectSlideshow from "@/components/Project/ProjectSlideshow";

export default function Project() {
  const slides = [
    { src: "/images/ge/slides/Slide1.PNG", caption: "" },
    { src: "/images/ge/slides/Slide2.PNG", caption: "" },
    { src: "/images/ge/slides/Slide3.PNG", caption: "" },
    { src: "/images/ge/slides/Slide4.PNG", caption: "" },
    { src: "/images/ge/slides/Slide5.PNG", caption: "" },
    { src: "/images/ge/slides/Slide6.PNG", caption: "" },
    { src: "/images/ge/slides/Slide7.PNG", caption: "" },
    { src: "/images/ge/slides/Slide8.PNG", caption: "" },
    { src: "/images/ge/slides/Slide9.PNG", caption: "" },
    { src: "/images/ge/slides/Slide10.PNG", caption: "" },
    { src: "/images/ge/slides/Slide11.PNG", caption: "" },
    { src: "/images/ge/slides/Slide12.PNG", caption: "" },
    { src: "/images/ge/slides/Slide13.PNG", caption: "" },
    { src: "/images/ge/slides/Slide14.PNG", caption: "" },
    { src: "/images/ge/slides/Slide15.PNG", caption: "" },
    { src: "/images/ge/slides/Slide16.PNG", caption: "" },
    { src: "/images/ge/slides/Slide17.PNG", caption: "" },
    { src: "/images/ge/slides/Slide18.PNG", caption: "" },
    { src: "/images/ge/slides/Slide19.PNG", caption: "" },
    { src: "/images/ge/slides/Slide20.PNG", caption: "" },
    { src: "/images/ge/slides/Slide21.PNG", caption: "" },
    { src: "/images/ge/slides/Slide22.PNG", caption: "" },
    { src: "/images/ge/slides/Slide23.PNG", caption: "" },
    { src: "/images/ge/slides/Slide24.PNG", caption: "" },
    { src: "/images/ge/slides/Slide25.PNG", caption: "" },
    { src: "/images/ge/slides/Slide26.PNG", caption: "" },
    { src: "/images/ge/slides/Slide27.PNG", caption: "" },
    { src: "/images/ge/slides/Slide28.PNG", caption: "" },
    { src: "/images/ge/slides/Slide29.PNG", caption: "" },
    { src: "/images/ge/slides/Slide30.PNG", caption: "" },
    { src: "/images/ge/slides/Slide32.PNG", caption: "" },
    { src: "/images/ge/slides/Slide33.PNG", caption: "" },
    { src: "/images/ge/slides/Slide34.PNG", caption: "" },
    { src: "/images/ge/slides/Slide35.PNG", caption: "" },
    { src: "/images/ge/slides/Slide36.PNG", caption: "" },
    { src: "/images/ge/slides/Slide37.PNG", caption: "" },
  ];

  return (
    <main className="px-8 py-20 max-w-5xl mx-auto space-y-24">
      {/* HERO SECTION */}
      <section className="flex flex-col items-start">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-6">
          FPGA Monitoring & Validation System
        </h1>

        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mb-10 leading-relaxed">
          An embedded solution for IEC-61850 GOOSE communication supervision, 
          designed for real-time anomaly detection in FPGA-based power grid 
          protection systems.
        </p>

        <a
          href="/reports/ge/report.pdf"
          download
          className="inline-flex items-center bg-foreground text-background px-8 py-4 rounded-2xl font-semibold hover:opacity-90 transition-all shadow-md"
        >
          Download Full Technical Report - FR
        </a>
      </section>

      {/* SLIDESHOW SECTION - Wrapped in 'surface' card */}
      <section className="p-8 bg-surface border border-gray-100 dark:border-gray-800 rounded-3xl shadow-sm">
        <h3 className="text-2xl font-bold mb-8 text-foreground flex items-center gap-3 mb-6">
          <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span>
          Project Presentation
        </h3>
        <ProjectSlideshow slides={slides} />
      </section>

      {/* DETAILS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* INDUSTRIAL CONTEXT */}
        <section className="p-8 bg-surface border border-gray-100 dark:border-gray-800 rounded-3xl shadow-sm">
          <h3 className="text-2xl font-bold text-foreground flex items-center gap-3 mb-6">
            <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span>
            Industrial Context
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            R&D project focused on FPGA-driven electrical grid protection. The objective 
            was to design a lightweight monitoring module capable of analyzing IEC-61850 
            GOOSE frames in real-time within an embedded architecture.
          </p>
        </section>

        {/* SYSTEM ARCHITECTURE */}
        <section className="p-8 bg-surface border border-gray-100 dark:border-gray-800 rounded-3xl shadow-sm">
          <h3 className="text-2xl font-bold text-foreground flex items-center gap-3 mb-6">
            <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span>
            System Architecture
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            The solution utilizes modular VHDL modules deployed on FPGA integrated with a 
            Python-based validation framework. This setup enables automated test 
            generation, verification, and technical report production.
          </p>
        </section>
      </div>

      {/* DEMO SECTION */}
      <section className="space-y-6">
        <DemoViewer video="/videos/ge/demo.mp4"
                    title="Demonstration (Simulation Framework)"
                    subtitle="Python - Automated testbench generation and simulation framework"
                    footer="Hardware Validation Preview"/>
      </section>

      {/* IMPACT SECTION */}
      <section className="p-8 bg-surface border border-gray-100 dark:border-gray-800 rounded-3xl shadow-sm">
        <h3 className="text-2xl font-bold text-foreground flex items-center gap-3 mb-6">
          <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span>
          System Architecture
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Accelerated debug cycles for FPGA communication stacks",
            "Reliable anomaly detection on GOOSE frames",
            "Automated validation pipeline via Python",
            "Minimal hardware footprint (<1% FPGA resources)"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">•</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* FOOTER: Next Steps */}
      <footer className="pt-12 mt-12 border-t border-gray-100 dark:border-gray-800 flex justify-center gap-8">
        <a 
          href="/projects" 
          className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline transition-colors"
        >
          ← Project Archive
        </a>
        
        <a 
          href="/" 
          className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline transition-colors"
        >
          ← Home
        </a>
      </footer>
      
    </main>
  );
}