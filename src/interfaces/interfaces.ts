export interface Project {
  image: string;
  link: string;
  name: string;
  techs: [];
  description: string;
  first: boolean;
}

export interface Social {
  icon: string;
  label: string;
  link: string;
  newTab: boolean;
}

export interface Skill {
  img: string;
  skill: string;
}

export interface About {
  description: string;
}

// components
export interface Header {
  contact: string;
  job: string;
  name: string;
  resume: string;
  emailIcon: string;
  socials: Social[];
}

export interface IProjects {
  projects: Project[];
}

export interface ISkills {
  skills: Skill[];
}

export interface IApiData {
  about: About;
  header: Header;
  metas: {
    title: string;
    description: string;
  };
  projects: Project[];
  skills: Skill[];
  socials: Social[];
}
