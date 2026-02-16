import DemoViewer from "@/components/DemoViewer";
import ProjectSlideshow from "@/components/ProjectSlideshow";

export default function Project() {
  return (
    <main className="px-8 py-20 max-w-5xl mx-auto">

      {/* HERO */}
      <section className="mb-16">
        <h1 className="text-5xl font-bold mb-6">
          Développement et évaluation de capteurs de pression flexibles
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          Projet de recherche visant à identifier, caractériser et comparer plusieurs
          technologies de capteurs flexibles — dont Qvar, FlexiForce, Vélostat et la
          peinture conductrice — pour la mesure de la raideur vertébrale en contexte clinique.
        </p>

        <a
          href="/reports/capteurs/capteurs-flexibles-rapport.pdf"
          download
          className="inline-block bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition"
        >
          Télécharger le rapport complet
        </a>
      </section>

      {/* SLIDESHOW */}
      <section className="mb-20">
        <h2 className="text-2xl font-semibold mb-6">Présentation</h2>

        <ProjectSlideshow
          slides={[
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
          ]}
        />
      </section>

      {/* CONTEXTE */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Contexte scientifique</h2>
        <p className="text-gray-700">
          La lombalgie est un problème majeur de santé publique. Le diagnostic clinique
          repose encore largement sur la palpation manuelle, une méthode subjective et
          dépendante de l’opérateur. L’objectif du projet est de développer un capteur
          flexible, fiable et reproductible permettant d’objectiver la mesure de la raideur
          vertébrale, en s’appuyant sur des technologies capacitives, piézorésistives et
          électrostatiques.
        </p>
      </section>

      {/* TECHNOLOGIES */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Technologies étudiées</h2>
        <p className="text-gray-700 mb-4">
          Quatre technologies industrielles ont été sélectionnées pour comparaison :
        </p>

        <ul className="space-y-3 text-gray-700">
          <li>• <strong>FlexiForce</strong> — capteur piézorésistif imprimé, fin et flexible</li>
          <li>• <strong>Vélostat</strong> — film polymère conducteur à comportement piézorésistif</li>
          <li>• <strong>Peinture BareConductive</strong> — matériau conducteur à base d’eau</li>
          <li>• <strong>Qvar</strong> — capteur électrostatique haute sensibilité de STMicroelectronics</li>
        </ul>
      </section>

      {/* ARCHITECTURE / MONTAGE */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Montage expérimental</h2>
        <p className="text-gray-700">
          Le système de mesure repose sur une carte STEVAL-MKI109V3 associée au module
          Qvar, une structure de capteur à base de mousse diélectrique, et une balance de
          précision permettant de corréler la pression appliquée avec la réponse électrique.
        </p>
      </section>

      {/* RESULTATS */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Résultats et conclusions</h2>
        <ul className="space-y-3 text-gray-700">
          <li>• Détection fiable de la distance doigt–électrodes via variation de constante diélectrique</li>
          <li>• Saturation du signal lors du contact direct, nécessitant une isolation des électrodes</li>
          <li>• Amplitude des oscillations proportionnelle à la pression appliquée</li>
          <li>• Sensibilité élevée mais forte dépendance aux perturbations environnementales (50 Hz, masses métalliques, etc.)</li>
        </ul>
      </section>

    </main>
  );
}