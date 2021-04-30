import React, { Component } from "react";

import "./index.scss";

export class RSkills extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const props = this.props;

    return (
      <div className="skills totalCenter">
        <div className="wrapper totalCenter">
          <h1 className="projects__title">SKILLS</h1>
          <ul className="skills__list">
            {props.skills.map((skill, key) => {
              return (
                <li key={key} className="skills__skill totalCenter">
                  <img
                    src={skill.img}
                    alt={skill.skill}
                    className="skills__image"
                  />
                  <div className="skills__overlay totalCenter">
                    {skill.skill}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
