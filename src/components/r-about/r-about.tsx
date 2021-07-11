import { About } from "../../interfaces/interfaces";

export default function RAbout(props: About) {
  return (
    <div className="w-full h-auto rounded-lg flex shadow-2xl flex-col justify-center px-10 pb-4 pt-4 mb-10 bg-opacity-5 bg-white">
      <h2 className="mb-4 text-2xl font-bold">About Me</h2>
      <p className="text-lg font-md select-all">{props.description}</p>
    </div>
  );
}
