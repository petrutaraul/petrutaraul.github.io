import { Header, Social } from "../../interfaces/interfaces";

export default function RHeader(props: Header) {
  return (
    <div className="h-60 flex center justify-center flex-col mb-10 m-auto rounded-lg px-6 shadow-xl bg-opacity-5 bg-white">
      <div>
        <h1 className="text-xl font-bold sm:text-3xl ">{props.name}</h1>
        <p className="font-medium mt-2 mb-4 text-white">{props.job}</p>
        <a
          href={props.resume}
          className="border-2 rounded-xl border-white p-1 text-sm font-bold hover:border-gray-500 hover:text-gray-500"
        >
          RESUME
        </a>
      </div>
      <div className="absolute">
        {props.socials?.map((item: Social, key: any) => {
          return (
            <li key={key} className="mb-4">
              <a
                href={item.link}
                target={item.newTab ? "_blank" : ""}
                rel="noreferrer"
              >
                <img
                  className="w-5"
                  src={item.icon}
                  alt={`${item.label} link`}
                />
              </a>
            </li>
          );
        })}
        <a href={`mailto:${props.contact}?subject=I want to hire you`}>
          <img src={props.emailIcon} alt="email" className="w-5" />
        </a>
      </div>
    </div>
  );
}
