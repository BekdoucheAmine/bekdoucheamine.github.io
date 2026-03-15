import { SkillCategory, CORE_SKILLS, TOOL_SKILLS } from "@/data/SkillList";
import { SkillsGrid } from "@/components/SubSections/Skills/SkillsGrid";

export default function Skills() {
  return (
    <section className="mb-24">
      {/* Dashboard Grid using semantic surface colors */}
      <div className="border border-gray-100 dark:border-gray-800 bg-surface p-8 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300">
        
        <h2 className="text-2xl font-bold text-foreground flex items-center gap-3 mb-6">
            <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span>
            Engineering Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <SkillCategoryCard title="Core Engineering" items={CORE_SKILLS} />
          <SkillCategoryCard title="Tools & Methodologies" items={TOOL_SKILLS} />
        </div>
      </div>
    </section>
  );
}

// Consistent Theme-Aware Card Component
const SkillCategoryCard = ({ title, items }: { title: string; items: SkillCategory[] }) => (
  <div className="border border-gray-200 dark:border-gray-700/50 bg-background dark:bg-gray-950 p-8 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300">
    <h3 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">
      {title}
    </h3>
    
    <div className="space-y-8">
      {items.map((category) => (
        <div key={category.title}>
          <h4 className="text-lg font-semibold text-foreground mb-4">
            {category.title}
          </h4>
          <SkillsGrid skills={category.skills} />
        </div>
      ))}
    </div>
  </div>
);