export const GetLatestProjects = ({ allProjects }) => {
  const recentProjects = [...allProjects]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <section className="mb-24">
      {/* Semantic surface background with dark mode support */}
      <div className="border border-gray-100 dark:border-gray-800 bg-surface p-8 rounded-3xl shadow-sm hover:shadow-md transition-colors duration-300">
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-3 mb-6">
            <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span>
            Engineering Projects
        </h2>
        <div className="space-y-6">

          {recentProjects.map((project) => (
            <a 
              key={project.id} 
              href={project.link} 
              className="block p-5 border border-gray-100 dark:border-gray-800 rounded-2xl hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50/10 transition-all duration-300 group"
            >
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-blue-600 transition">
                  {project.title}
                </h3>
                <span className="text-xs text-gray-400 font-mono">{project.date}</span>
              </div>
              
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 mb-4">
                {project.description}
              </p>
              
              <div className="flex gap-2 flex-wrap">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="bg-background dark:bg-gray-950 border border-gray-100 dark:border-gray-800 text-gray-600 dark:text-gray-400 px-3 py-1 rounded-lg text-[10px] font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800">
          <a 
            href="/projects" 
            className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-blue-600 transition"
          >
            View all projects →
          </a>
        </div>
      </div>
    </section>
  );
};