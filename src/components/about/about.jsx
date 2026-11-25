import React, { useEffect } from "react";
import ReactGA from "react-ga";
import "./about.css";

const about = () => {
  const handleWebClicks = (webLink) => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: webLink,
    });
    window.open(webLink);
  };
  useEffect(() => {
    document.title = "About Us";
    const observer = new IntersectionObserver(
      (entryies) => {
        entryies.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id == "about-left")
              entry.target.classList.add("aboutScrollAnimateLeft");
            if (entry.target.id == "about-right")
              entry.target.classList.add("aboutScrollAnimateRight");
          }
        });
      },
      {
        threshold: 1,
      }
    );
    const divs = document.querySelectorAll(
      ".foundation-title,.foundation-description,.about-srmvec-title,.about-srmvec-description,.about-csi-title,.about-csi-description,.about-whitehatians-title,.about-whitehatians-description"
    );
    divs.forEach((div) => observer.observe(div));
  });

  return (
    <React.Fragment>
      <div id="about" className="parent-about">
        <h1 className="about-title">About Us</h1>
        <div className="foundation">
          <div className="foundation-title " id="about-right">
            <img
              src="/images/srm.webp"
              alt="srm logo"
              className="about-srm-logo"
            />
            About Bankura Unnayani Institute of engineering
            <img
              src="/images/srmvec.webp"
              alt="srmvec logo"
              className="about-srmvec-logo"
            />
          </div>
          <div className="foundation-description" id="about-left">
            Bankura Unnayani Institute of Engineering (BUIE) is a centre of technical education established in 1998, dedicated to nurturing future engineers, innovators, and technology enthusiasts. With a focus on academic excellence, practical learning, and technological advancement, BUIE encourages students to explore ideas, develop skills, and create solutions that make a difference.
          </div>
        </div>

        <div className="srmvec">
          <div
            className="about-srmvec-title "
            id="about-left"
            onClick={() => handleWebClicks("https://www.srmvalliammai.ac.in")}
          >
            <img
              className="about-srmvec-logo"
              src="/images/srmvec.webp"
              alt="srmvec logo"
            />
            About BUIE Coding Club
          </div>
          <div className="about-srmvec-description" id="about-right">
            BUIE Coding Club, founded in 2025, is a student-driven technical community at Bankura Unnayani Institute of Engineering. It aims to promote coding culture, technical learning, innovation, and collaboration among students. The club provides a platform for aspiring developers to explore emerging technologies, work on real-world projects, participate in hackathons, and enhance their problem-solving skills.
            <br /><br />
            Code Together. Learn Together. Innovate Together
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default about;
