import DemoViewer from "@/components/DemoViewer";
import ProjectSlideshow from "@/components/ProjectSlideshow";

export default function Project() {
  return (
    <main className="px-8 py-20 max-w-5xl mx-auto">

      {/* HERO */}
      <section className="mb-16">
        <h1 className="text-5xl font-bold mb-6">
          Système de monitoring et de validation FPGA
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          Solution embarquée de supervision des communications IEC-61850 GOOSE,
          conçue pour la détection d’anomalies en temps réel dans des systèmes
          de protection du réseau électrique basés sur FPGA.
        </p>

        <a
          href="/reports/ge/fpga-spy-report.pdf"
          download
          className="inline-block bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition"
        >
          Télécharger le rapport technique complet
        </a>
      </section>

      {/* SLIDESHOW */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-6">Présentation</h2>

        <ProjectSlideshow
          slides={[
            {src:"/images/ge/slides/Slide1.PNG", caption: ""},
            {src:"/images/ge/slides/Slide2.PNG", caption: ""},
            {src:"/images/ge/slides/Slide3.PNG", caption: ""},
            {src:"/images/ge/slides/Slide4.PNG", caption: ""},
            {src:"/images/ge/slides/Slide5.PNG", caption: ""},
            {src:"/images/ge/slides/Slide6.PNG", caption: ""},
            {src:"/images/ge/slides/Slide7.PNG", caption: ""},
            {src:"/images/ge/slides/Slide8.PNG", caption: ""},
            {src:"/images/ge/slides/Slide9.PNG", caption: ""},
            {src:"/images/ge/slides/Slide10.PNG", caption: ""},
            {src:"/images/ge/slides/Slide11.PNG", caption: ""},
            {src:"/images/ge/slides/Slide12.PNG", caption: ""},
            {src:"/images/ge/slides/Slide13.PNG", caption: ""},
            {src:"/images/ge/slides/Slide14.PNG", caption: ""},
            {src:"/images/ge/slides/Slide15.PNG", caption: ""},
            {src:"/images/ge/slides/Slide16.PNG", caption: ""},
            {src:"/images/ge/slides/Slide17.PNG", caption: ""},
            {src:"/images/ge/slides/Slide18.PNG", caption: ""},
            {src:"/images/ge/slides/Slide19.PNG", caption: ""},
            {src:"/images/ge/slides/Slide20.PNG", caption: ""},
            {src:"/images/ge/slides/Slide21.PNG", caption: ""},
            {src:"/images/ge/slides/Slide22.PNG", caption: ""},
            {src:"/images/ge/slides/Slide23.PNG", caption: ""},
            {src:"/images/ge/slides/Slide24.PNG", caption: ""},
            {src:"/images/ge/slides/Slide25.PNG", caption: ""},
            {src:"/images/ge/slides/Slide26.PNG", caption: ""},
            {src:"/images/ge/slides/Slide27.PNG", caption: ""},
            {src:"/images/ge/slides/Slide28.PNG", caption: ""},
            {src:"/images/ge/slides/Slide29.PNG", caption: ""},
            {src:"/images/ge/slides/Slide30.PNG", caption: ""},
            {src:"/images/ge/slides/Slide32.PNG", caption: ""},
            {src:"/images/ge/slides/Slide33.PNG", caption: ""},
            {src:"/images/ge/slides/Slide34.PNG", caption: ""},
            {src:"/images/ge/slides/Slide35.PNG", caption: ""},
            {src:"/images/ge/slides/Slide36.PNG", caption: ""},
            {src:"/images/ge/slides/Slide37.PNG", caption: ""},
          ]}
        />
      </section>

      {/* CONTEXTE */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Contexte industriel</h2>
        <p className="text-gray-700">
          Projet R&D portant sur des systèmes de protection du réseau électrique
          basés sur FPGA. L’objectif était de concevoir un module de monitoring
          léger capable d’analyser en temps réel des trames IEC-61850 GOOSE au
          sein d’une architecture embarquée.
        </p>
      </section>

      {/* ARCHITECTURE */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Architecture du système</h2>
        <p className="text-gray-700">
          La solution repose sur des modules VHDL déployés sur FPGA combinés à
          un framework de validation et de simulation en Python permettant
          l’automatisation de la génération de tests, de la vérification et de
          la production de rapports.
        </p>
      </section>

      {/* DEMO */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-6">Démonstration (Python Simulation Framework)</h2>

        <DemoViewer video="/videos/ge/demo.mp4" />
      </section>

      {/* IMPACT */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Impact et résultats</h2>
        <ul className="space-y-3 text-gray-700">
          <li>• Accélération des cycles de debug des stacks de communication FPGA</li>
          <li>• Détection fiable d’anomalies sur les trames GOOSE</li>
          <li>• Pipeline de validation automatisé via Python</li>
          <li>• Empreinte matérielle minimale sur FPGA (&lt;1%)</li>
        </ul>
      </section>

    </main>
  );
}
