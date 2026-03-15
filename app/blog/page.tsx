"use client";
import { BlogList } from "@/data/BlogList"; // Ensure your BlogList is imported here

export default function BlogPage() {
  return (
    <main className="px-8 py-20 max-w-5xl mx-auto">
      
      {/* HEADER: Blog Context */}
      <header className="mb-20">
        <h1 className="text-5xl font-extrabold tracking-tight text-foreground mb-6">
          Technical Insights
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
          Deep dives into embedded systems, FPGA verification patterns, and metrology challenges.
        </p>
      </header>

      {/* BLOG GRID: Nested Surface Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
        {BlogList.map((post) => (
          <a 
            key={post.id} 
            href={post.link}
            className="group flex flex-col p-8 bg-surface border border-gray-100 dark:border-gray-800 rounded-3xl shadow-sm hover:border-blue-500/50 hover:shadow-xl transition-all duration-300"
          >
            {/* Metadata: Date & Tags */}
            <div className="mb-6 flex justify-between items-start">
              <span className="text-blue-600 dark:text-blue-400 font-mono text-xs">
                {post.date}
              </span>
            </div>

            {/* Title & Excerpt */}
            <h2 className="text-2xl font-bold text-foreground mb-4 group-hover:text-blue-600 transition-colors">
              {post.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 flex-grow">
              {post.excerpt}
            </p>

            {/* Tags: Technical Categorization */}
            <div className="flex gap-2 flex-wrap mt-auto">
              {post.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="px-3 py-1 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-700 text-gray-600 dark:text-gray-400 rounded-lg text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>

      {/* FOOTER: Next Steps */}
      <footer className="pt-12 border-t border-gray-100 dark:border-gray-800 text-center">
        <a href="/" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
          ← Home
        </a>
      </footer>

    </main>
    
  );
}