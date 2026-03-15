import { ProjectList } from "@/data/ProjectList";
import { GetLatestProjects } from "@/components/SubSections/LatestProjects/GetLatestProjects";

export default function LatestProjects() {
  return (
    <section className="mb-24">
      <GetLatestProjects allProjects={ProjectList} />
    </section>
  );
}