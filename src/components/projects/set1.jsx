import React, { useEffect } from "react";
import "./projects.css";
import ReactGA from "react-ga";

const set1 = () => {
  useEffect(() => {
    document.title = "Projects - Set 1";
  });
  const handleSoftwareView = (Element) => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: "Projects - set 1",
    });
    const ElementVisibility = Element.currentTarget.querySelector(
      ".software-content-description"
    );
    ElementVisibility.classList.toggle("projects-close");
    ElementVisibility.classList.toggle("projects-view");
  };
  return (
    <React.Fragment>
      <div className="parent-software">
        <h1 className="parent-software-title">Projects - Set 1</h1>
        <p className="projects-disclaimer">
          OWN/UNIQUE PROBLEM STATEMENTS ARE ALSO WELCOMED - Kindly intimate when
          speaking with registration team
        </p>
        <div className="software-container">
          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">Elderly Care</h1>
            <p className="software-content-description projects-close">
              Develop a user-friendly device or system that helps elderly
              individuals with medication reminders, fall detection, activity
              tracking, and social interaction
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default set1;
