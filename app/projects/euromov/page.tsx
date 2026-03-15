import DemoViewer from "@/components/Project/DemoViewer";
import ProjectSlideshow from "@/components/Project/ProjectSlideshow";

export default function Project() {
  const slides = [
    { src: "/images/euromov/slides/Slide1.PNG", caption: "" },
    { src: "/images/euromov/slides/Slide2.PNG", caption: "" },
    { src: "/images/euromov/slides/Slide3.PNG", caption: "" },
    { src: "/images/euromov/slides/Slide4.PNG", caption: "" },
    { src: "/images/euromov/slides/Slide5.PNG", caption: "" },
    { src: "/images/euromov/slides/Slide6.PNG", caption: "" },
    { src: "/images/euromov/slides/Slide7.PNG", caption: "" },
    { src: "/images/euromov/slides/Slide8.PNG", caption: "" },
    { src: "/images/euromov/slides/Slide9.PNG", caption: "" },
    { src: "/images/euromov/slides/Slide10.PNG", caption: "" },
    { src: "/images/euromov/slides/Slide11.PNG", caption: "" },
    { src: "/images/euromov/slides/Slide12.PNG", caption: "" },
    { src: "/images/euromov/slides/Slide13.PNG", caption: "" },
    { src: "/images/euromov/slides/Slide14.PNG", caption: "" },
    { src: "/images/euromov/slides/Slide15.PNG", caption: "" },
    { src: "/images/euromov/slides/Slide16.PNG", caption: "" },
    { src: "/images/euromov/slides/Slide17.PNG", caption: "" },
    { src: "/images/euromov/slides/Slide18.PNG", caption: "" },
    { src: "/images/euromov/slides/Slide19.PNG", caption: "" },
    { src: "/images/euromov/slides/Slide20.PNG", caption: "" },
    { src: "/images/euromov/slides/Slide21.PNG", caption: "" },
    { src: "/images/euromov/slides/Slide22.PNG", caption: "" },
    { src: "/images/euromov/slides/Slide23.PNG", caption: "" },
    { src: "/images/euromov/slides/Slide24.PNG", caption: "" },
  ];

  return (
    <main className="px-8 py-20 max-w-5xl mx-auto space-y-24">
      {/* HERO SECTION */}
      <section className="flex flex-col items-start">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-6">
          Flexible Pressure Sensor Research
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mb-10 leading-relaxed">
          A research project aimed at identifying, characterizing, and comparing various 
          flexible sensor technologies (including Qvar, FlexiForce, Velostat, and 
          conductive paint) to measure spinal stiffness in clinical settings.
        </p>
        <a
          href="/reports/euromov/report.pdf"
          download
          className="inline-flex items-center bg-foreground text-background px-8 py-4 rounded-2xl font-semibold hover:opacity-90 transition-all shadow-md"
        >
          Download Full Technical Report - FR
        </a>
      </section>

      {/* SLIDESHOW */}
      <section className="p-8 bg-surface border border-gray-100 dark:border-gray-800 rounded-3xl shadow-sm">
        <h3 className="text-2xl font-bold text-foreground flex items-center gap-3 mb-8">
          <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span>
          Project Presentation
        </h3>
        <ProjectSlideshow slides={slides} />
      </section>

      {/* DETAILS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="p-8 bg-surface border border-gray-100 dark:border-gray-800 rounded-3xl shadow-sm">
          <h3 className="text-2xl font-bold text-foreground flex items-center gap-3 mb-6">
            <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span>
            Scientific Context
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Low back pain is a major public health concern. Current clinical diagnosis 
            relies heavily on manual palpation, a subjective method dependent on the 
            practitioner. This project aims to develop a reliable, flexible sensor 
            to objectively measure spinal stiffness.
          </p>
        </section>

        <section className="p-8 bg-surface border border-gray-100 dark:border-gray-800 rounded-3xl shadow-sm">
          <h3 className="text-2xl font-bold text-foreground flex items-center gap-3 mb-6">
            <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span>
            Technologies Studied
          </h3>
          <ul className="space-y-3 text-gray-600 dark:text-gray-400">
            {[
              "FlexiForce: Printed piezoresistive sensor",
              "Velostat: Conductive polymer film",
              "BareConductive: Water-based conductive paint",
              "Qvar: STMicroelectronics high-sensitivity electrostatic sensor"
            ].map((tech, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="text-blue-600">•</span> {tech}
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* EXPERIMENTAL SETUP */}
      <section className="p-8 bg-surface border border-gray-100 dark:border-gray-800 rounded-3xl shadow-sm">
        <h3 className="text-2xl font-bold text-foreground flex items-center gap-3 mb-6">
          <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span>
          Experimental Setup
        </h3>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          The measurement system utilizes the STEVAL-MKI109V3 board paired with the Qvar module, 
          a dielectric foam-based sensor structure, and a precision scale to correlate 
          applied pressure with electrical output.
        </p>
      </section>

      {/* RESULTS */}
      <section className="p-8 bg-surface border border-gray-100 dark:border-gray-800 rounded-3xl shadow-sm">
        <h3 className="text-2xl font-bold text-foreground flex items-center gap-3 mb-6">
          <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span>
          Key Findings
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "Reliable detection of finger-to-electrode distance via dielectric constant variation",
            "Signal saturation during direct contact, requiring electrode isolation",
            "Oscillation amplitude proportional to applied pressure",
            "High sensitivity but significant environmental interference (50Hz, metallic masses)"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
              <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* FOOTER: Next Steps */}
      <footer className="pt-12 mt-12 border-t border-gray-100 dark:border-gray-800 flex justify-center gap-8">
        <a 
          href="/projects" 
          className="text-blue-600 dark:text-blue-400 font-semibold hover:underline transition-colors"
        >
          ← Project Archive
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