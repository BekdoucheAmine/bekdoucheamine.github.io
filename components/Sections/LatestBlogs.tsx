import { BlogList } from "@/data/BlogList";
import { GetLatestBlogs } from "@/components/SubSections/LatestBlogs/GetLatestBlogs";

export default function LatestArticles() {
  return (
    <section className="mb-24">
      <GetLatestBlogs allBlogs={BlogList} />
    </section>
  );
}