import { IRDekstop, Social } from '../../interfaces/interfaces'
import RProjects from "../r-projects/r-projects";
import "./index.scss";

import Icon from '../../pictures/cv.svg';

export default function RDesktop(props: IRDekstop) {

  return (
    <div className="desktop totalCenter">
      <div className="desktop--container">
        <RProjects projects={props.projects} />
      </div>
      <div className="desktop__dock" id="desktop__dock">
        {props.socials && props.socials.map((item: Social, key: any) => {
          return (
            <li key={key} className="desktop__dock--icon">
              <a href={item.link} target={item.newTab ? "_blank" : ''} rel="noreferrer">
                <img src={item.icon} alt={`${item.label} link`} />
              </a>
            </li>
          );
        })}
        <span className="desktop__separator" />
        <li className="desktop__dock--icon desktop__dock--icon--resume hover">
          <a href={props.header && props.header.resume} target="_blank" rel="noreferrer">
            <img src={Icon} alt="resume" />
          </a>
        </li>
      </div>
      <span className="desktop__tradeMark">#photoByMe</span>
    </div>
  );
}
