import CVDownload from "@/components/SubSections/Profile/CVDownload";

export default function Profile() {
  return (
    // Replaced hardcoded bg/border with semantic 'surface' and adaptive border
    <section className="mb-24 flex flex-col md:flex-row items-center gap-12 p-8 bg-surface border border-gray-100 dark:border-gray-800 rounded-3xl shadow-sm transition-colors duration-300">
      
      {/* PROFILE PHOTO with adaptive border */}
      <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-background shadow-lg ring-2 ring-gray-100 dark:ring-gray-800 flex-shrink-0">
        <img
          src="/images/profile/amine.png"
          alt="Profile photo of Amine Bekdouche"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* TEXT CONTENT */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground mb-2">
          BEKDOUCHE Amine
        </h1>

        {/* Using a theme-aware blue for contrast in both modes */}
        <p className="text-2xl font-medium text-blue-600 dark:text-blue-400 mb-6">
          Electronic & Embedded Systems Engineer
        </p>

        <p className="text-lg max-w-2xl mb-8 text-gray-600 dark:text-gray-400 leading-relaxed">
          Specializing in digital design, VHDL development, FPGA validation, 
          and embedded architectures for R&D environments. Passionate about 
          critical systems, metrology, and hardware optimization.
        </p>

        <CVDownload />
      </div>
    </section>
  );
}