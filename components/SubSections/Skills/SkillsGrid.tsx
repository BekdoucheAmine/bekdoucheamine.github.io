export const SkillsGrid = ({ skills }: { skills: string[] }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span 
          key={skill}
          className="px-3 py-1.5 
                     bg-background dark:bg-gray-950 
                     border border-gray-200 dark:border-gray-700 
                     rounded-lg text-xs font-medium 
                     text-gray-600 dark:text-gray-300 
                     hover:border-blue-500 dark:hover:border-blue-400 
                     hover:text-blue-600 dark:hover:text-blue-400 
                     transition-all duration-300"
        >
          {skill}
        </span>
      ))}
    </div>
  );
};