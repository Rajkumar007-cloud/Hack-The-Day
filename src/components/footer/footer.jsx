import React from "react";
import "./footer.css";
const footer = () => {
  const developedBy = () => {
    window.open("https://shadowctrl.me", "_self");
    window.open("https://upwork.com/freelancers/shadowctrl", "_blank");
  };
  return (
    <React.Fragment>
      <div className="parent-footer">
        <p className="copyright">
          Developed & Maintained by <p onClick={developedBy}>shadowctrl</p>
        </p>
      </div>
    </React.Fragment>
  );
};

export default footer;
