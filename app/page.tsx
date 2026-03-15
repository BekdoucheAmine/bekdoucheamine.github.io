import Profile from "@/components/Sections/Profile";
import LatestProjects from "@/components/Sections/LatestProjects";
import LatestBlogs from "@/components/Sections/LatestBlogs";
import Skills from "@/components/Sections/Skills";
import Contact from "@/components/Sections/Contact";

export default function Home() {
  return (
    <main className="px-8 py-16 max-w-6xl mx-auto">

      {/* 1. Hero / Profile */}
      <Profile />

      {/* 2. Engineering Work */}
      <LatestProjects />

      {/* 3. Technical Articles */}
      <LatestBlogs />

      {/* 3. Technical Skills */}
      <Skills />

      {/* 4. Contact / Footer */}
      <Contact />

    </main>
  );
}