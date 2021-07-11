import { IProjects, Project } from "../../interfaces/interfaces";

export default function RProjects(props: IProjects) {
  return (
    <div className="w-full h-auto rounded-lg flex shadow-2xl flex-col px-10 pb-4 pt-4 bg-opacity-5 bg-white">
      <h2 className="mb-4 text-2xl font-bold">PROJECTS</h2>
      <div className="grid grid-cols-1 gap-0 md:grid-cols-3 md:gap-4">
        {props.projects?.map((project: Project, key) => {
          return (
            <li
              key={key}
              className={`${
                project.first && "order-first col-auto md:col-span-3"
              } flex-col mb-8 md:mb-0 hover:bg-white hover:bg-opacity-5 p-4 rounded-xl`}
            >
              <a href={project.link} target="_blank" rel="noreferrer">
                <div>
                  <img
                    src={project.image}
                    alt={project.name}
                    className="ml-0"
                  />
                </div>
              </a>
              <span>{project.name}</span>
              <div className="flex flex-wrap justify-center">
                {project.techs.map((tech, key) => {
                  return (
                    <span
                      className="bg-white bg-opacity-5 w-20 mr-2 mb-2 select-all"
                      key={key}
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>
            </li>
          );
        })}
      </div>
    </div>
  );
}
