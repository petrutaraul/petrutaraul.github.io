export interface Project {
    image: string;
    link: string;
    name: string;
    techs: [];
    description: string;
};

export interface Social {
    icon: string;
    label: string;
    link: string;
    newTab: boolean;
};

export interface Skills {
    img: string;
    skill: string;
}

export interface About {
    description: string;
    image: string;
}

export interface Header {
    contact: string;
    job: string;
    name: string;
    resume: string;
}

// components
export interface IProjects {
    projects: Project[],
};

export interface IRDekstop {
    projects: Project[];
    socials: Social[];
    header: Header;
}

export interface IModal {
    name: string;
    open: boolean;
}

export interface IApiData {
    about: About[];
    header: Header,
    metas: {
        title: string;
        description: string;
    },
    projects: Project[];
    skils: Skills[];
    socials: Social[];
}