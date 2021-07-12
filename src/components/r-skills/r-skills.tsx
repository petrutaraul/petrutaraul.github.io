import { ISkills } from "../../interfaces/interfaces";

export default function RSkills(props: ISkills) {
  return (
    <div className="w-full h-auto rounded-lg bg-opacity-5 bg-white px-10 pb-4 pt-4 shadow-2xl">
      <h2 className="mb-4 text-2xl font-bold">SKILLS</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {props.skills?.map((skill, key) => {
          return (
            <li className="flex flex-col items-center" key={key}>
              <img src={skill.img} alt={skill.skill} className="w-20 h-20" />
              <p>{skill.skill}</p>
            </li>
          );
        })}
      </div>
    </div>
  );
}
