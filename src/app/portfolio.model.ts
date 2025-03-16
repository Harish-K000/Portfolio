// portfolio.model.ts

export interface Education {
    degree: string;
    institution: string;
    duration: string;
  }
  
  export interface Experience {
    position: string;
    company: string;
    duration: string;
    responsibilities: string[];
  }
  
  export interface Project {
    title: string;
    description: string;
    technologies: string[];
  }
  
  export interface Portfolio {
    name: string;
    email: string;
    phone: string;
    linkedin: string;
    skills: string[];
    education: Education[];
    experience: Experience[];
    projects: Project[];
  }
  