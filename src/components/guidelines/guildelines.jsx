import React, { useEffect } from "react";
import "./guidelines.css";

const guildelines = () => {
  useEffect(() => {
    document.title = "Guidelines";
  });
  return (
    <React.Fragment>
      <div className="parent-guidelines">
        <div className="guidelines-title">Guidelines</div>
        <div className="guidelines-container">
          <div className="guidelines-content">
            <div className="guidelines-1">
              <strong>1. Participation Eligibility</strong>
              <br />
              - Participation is strictly limited to students of Bankura Unnayani Institute of Engineering.
              <br />
              - Due to certain constraints, students from other colleges will not be permitted to participate.
              <br /><br />
              <strong>2. Project Preparation</strong>
              <br />
              - Students are encouraged to explore different AI-powered applications and identify potential real-world problems before Hack Day.
              <br />
              - Start thinking about your project ideas in advance.
              <br />
              - Teams are encouraged to plan how they will integrate the Google Gemini API into their projects.
              <br />
              - Your project must strictly use the Gemini API.
              <br /><br />
              <strong>3. GitHub Preparation</strong>
              <br />
              - Every team leader is advised to create a GitHub account before the event.
              <br />
              - Team leaders should understand the basics of Git and GitHub, including:
              <br />
              &nbsp;&nbsp;&nbsp;- Creating a repository.
              <br />
              &nbsp;&nbsp;&nbsp;- Uploading and managing code.
              <br />
              &nbsp;&nbsp;&nbsp;- Pushing code to GitHub.
            </div>
            <div className="guidelines-2">
              <strong>4. Team Registration</strong>
              <br />
              - Every team leader must fill out the designated form with all the necessary team details.
              <br />
              - It is mandatory for every participant to register for the event and collect their event tickets through the Zynvo Social platform (App or Website).
              <br />
              - Make sure your registration is completed before the event.
              <br /><br />
              <strong>5. AI Usage</strong>
              <br />
              - The use of AI tools for project development, coding, debugging, and assistance is allowed.
              <br />
              - Participants are encouraged to explore AI tools to improve their productivity.
              <br />
              - However, the project must strictly integrate the Gemini API.
              <br /><br />
              <strong>6. Help & Support</strong>
              <br />
              - For any queries, technical guidance, or registration-related support, feel free to contact the event admins.
              <br />
              - Stay connected with the organizing team for further updates and announcements.
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default guildelines;
