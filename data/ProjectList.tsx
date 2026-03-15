export type Project = {
  id: string;
  title: string;
  description: string;
  link: string;
  date: string;
  technologies: string[];
};

export const ProjectList: Project[] = [
  {
    id: "1",
    title: "Monitoring & Validation FPGA",
    description: "VHDL development and Python automation for grid protection systems.",
    link: "/projects/ge-vernova",
    date: "2025-09-01",
    technologies: ["VHDL", "Python", "FPGA"]
  },
  {
    id: "2",
    title: "Biomedical Sensor Prototyping",
    description: "Research, prototyping, and characterization of flexible pressure sensors.",
    link: "/projects/euromov",
    date: "2024-09-01",
    technologies: ["Sensors", "Metrology", "Prototyping"]
  }
];