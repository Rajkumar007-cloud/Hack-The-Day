import React from "react";
import { ReactComponent as LaunchLink } from "../../assets/link-launch.svg";
import "./sponsors.css";
import Contact from "./contact";
import Faqs from "./faqs";
import Convener from "./convener";
import Coordinators from "./coordinators";

const sponsors = () => {
  const sponsorList = [
    { name: "MLH", logo: "/images/mlh.svg", url: "https://mlh.io/", type: "Official Hackathon Partner" },
    { name: "Google Gemini", logo: "/images/gemini.svg", url: "https://ai.google.dev/", type: "AI Partner" },
    { name: ".xyz", logo: "/images/xyz.webp", url: "https://gen.xyz/", type: "Web Partner" },
    { name: "ZynvoSocial", logo: "/images/zynvo.png", url: "https://www.zynvosocial.com/", type: "Community Partner" },
  ];

  const half = Math.ceil(sponsorList.length / 2);
  const leftColumn = sponsorList.slice(0, half);
  const rightColumn = sponsorList.slice(half);

  return (
    <React.Fragment>
      <div className="parent-sponsors">
        <h1 className="sponsors-title">
          Sponsors
          <img src="/images/rrr.webp" alt="arrow-logo" />
        </h1>
        <div className="sponsors-container">
          <div className="sponsors-column">
            {leftColumn.map((sponsor, index) => (
              <div key={index} className="sponsors-border">
                <div>
                  <img src={sponsor.logo} alt={sponsor.name} />
                </div>
                <div className="sponsors-container-sub">
                  <h1 className="sponsor-title">
                    <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
                      {sponsor.name}
                    </a>
                  </h1>
                  <p className="sponsor-type"><strong>{sponsor.type}</strong></p>
                </div>
                <LaunchLink className="link-launch-icon" />
              </div>
            ))}
          </div>
          <div className="sponsors-column">
            {rightColumn.map((sponsor, index) => (
              <div key={index} className="sponsors-border">
                <div>
                  <img src={sponsor.logo} alt={sponsor.name} />
                </div>
                <div className="sponsors-container-sub">
                  <h1 className="sponsor-title">
                    <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
                      {sponsor.name}
                    </a>
                  </h1>
                  <p className="sponsor-type"><strong>{sponsor.type}</strong></p>
                </div>
                <LaunchLink className="link-launch-icon" />
              </div>
            ))}
          </div>
        </div>
        <Faqs />
        <Contact />
        <Convener />
        <Coordinators />
      </div>
    </React.Fragment>
  );
};

export default sponsors;
