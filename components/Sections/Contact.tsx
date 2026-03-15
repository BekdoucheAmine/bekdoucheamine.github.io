export default function Contact() {
  return (
    // Replaced borders and background with semantic variables
    <section className="mt-24 border-t border-gray-100 dark:border-gray-800 pt-12 transition-colors duration-300">
      <div className="bg-surface border border-gray-100 dark:border-gray-800 p-8 rounded-3xl shadow-sm">
        <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">
          Get in Touch
        </h2>

        <p className="text-lg mb-8 text-foreground leading-relaxed">
          Open to FPGA, embedded systems, and R&D engineering opportunities.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <ContactLink label="Email" href="mailto:amineadelbekdouche@gmail.com" value="amineadelbekdouche@gmail.com" />
          <ContactLink label="GitHub" href="https://github.com/BekdoucheAmine" value="@BekdoucheAmine" />
          <ContactLink label="LinkedIn" href="https://www.linkedin.com/in/amine-bekdouche/" value="@BekdoucheAmine" />
        </div>
      </div>
    </section>
  );
}

// Helper component to keep the contact area clean and organized
const ContactLink = ({ label, href, value }) => (
  <a 
    href={href} 
    className="block p-4 bg-background dark:bg-gray-950 border border-gray-100 dark:border-gray-800 rounded-2xl hover:border-blue-500 transition-all group"
  >
    <span className="block text-xs font-bold text-gray-400 uppercase mb-1">{label}</span>
    <span className="text-sm font-medium text-foreground group-hover:text-blue-600 transition-colors">
      {value}
    </span>
  </a>
);