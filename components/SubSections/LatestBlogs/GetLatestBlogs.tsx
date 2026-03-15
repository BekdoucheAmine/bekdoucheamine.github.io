import { Blog } from "@/data/BlogList";

export const GetLatestBlogs = ({ allBlogs }: { allBlogs: Blog[] }) => {
  const recentBlogs = [...allBlogs]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <div className="border border-gray-100 dark:border-gray-800 bg-surface p-8 rounded-3xl shadow-sm transition-colors duration-300">
      <h2 className="text-2xl font-bold text-foreground flex items-center gap-3 mb-6">
          <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span>
          Technical Articles
      </h2>
      <div className="space-y-6">
        {recentBlogs.map((blog) => (
          <a 
            key={blog.id} 
            href={blog.link} 
            className="block p-5 border border-gray-100 dark:border-gray-800 rounded-2xl hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50/10 transition-all duration-300 group"
          >
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-blue-600 transition">
                {blog.title}
              </h3>
              <span className="text-xs text-gray-400 font-mono">{blog.date}</span>
            </div>
            
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 mb-2 line-clamp-2">
              {blog.excerpt}
            </p>
            
            <div className="flex gap-2">
              <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                Read more →
              </span>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800">
        <a 
          href="/blog" 
          className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-blue-600 transition"
        >
          View all articles →
        </a>
      </div>
    </div>
  );
};