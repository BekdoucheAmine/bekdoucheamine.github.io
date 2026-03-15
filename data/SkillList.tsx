type SkillCategory = {
  title: string;
  skills: string[];
};

export const CORE_SKILLS: SkillCategory[] = [
  {
    title: "FPGA & Digital Design",
    skills: ["VHDL", "OSVVM", "AXI", "Avalon", "Cyclone SX", "Artix-7", "Zynq"]
  },
  {
    title: "Embedded Systems",
    skills: ["STM32", "C/C++", "Assembly", "Baremetal/Linux Drivers"]
  }
];

export const TOOL_SKILLS: SkillCategory[] = [
  {
    title: "CAD Tools",
    skills: ["Vivado", "ModelSim", "Quartus", "MATLAB", "LabVIEW"]
  },
  {
    title: "Instrumentation",
    skills: ["OMICRON C256plus", "Multimeter", "Oscilloscope", "Logic Analyzer"]
  },
  {
    title: "Software Tools",
    skills: ["GIT", "SVN", "Office Suite", "Confluence", "JIRA"]
  }
];