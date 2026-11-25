import "./schedule.css";
import React, { useEffect } from "react";

const schedule = () => {
  useEffect(() => {
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("timelineAnimation");
          document
            .querySelectorAll(".container, .container-mobile")
            .forEach((container) =>
              container.classList.add("timelineAnimationContainer")
            );
        }
      });
    };

    const options = {
      threshold: 0.2,
    };
    const observer = new IntersectionObserver(callback, options);
    const divs = document.querySelectorAll("#timeline");
    divs.forEach((div) => observer.observe(div));
  });
  return (
    <React.Fragment>
      <div className="mainSchedule" id="schedule">
        <div className="parent-schedule">
          <div className="schedule-title">
            <img src="/images/rrr.webp" alt="arrow-logo" />
            Schedule
          </div>
          <div className="timeline" id="timeline">
            <div className="container" id="timeline-container">
              <h2 className="date">
                <div>
                  1:00
                  <div>
                    <div>–</div> <div>1:15 PM</div>
                  </div>
                </div>
              </h2>
              <h2 className="container-title">Registration & Check-in</h2>
              <p className="container-description">
                Participant verification and team confirmation.
              </p>
              <span className="circle"></span>
            </div>
            <div className="container ">
              <h2 className="date">
                <div>
                  1:15
                  <div>
                    <div>–</div> <div>1:30 PM</div>
                  </div>
                </div>
              </h2>
              <h2 className="container-title">Rules & Guidelines</h2>
              <p className="container-description">
                Explanation of competition rules, theme, and Gemini API requirements.
              </p>
              <span className="circle"></span>
            </div>
            <div className="container ">
              <h2 className="date">
                <div>
                  1:30
                  <div>
                    <div>–</div> <div>1:40 PM</div>
                  </div>
                </div>
              </h2>
              <h2 className="container-title">Problem Statement Briefing</h2>
              <p className="container-description">
                Introduction to the challenge and project expectations.
              </p>
              <span className="circle"></span>
            </div>
            <div className="container ">
              <h2 className="date">
                <div>
                  1:40
                  <div>
                    <div>–</div> <div>4:10 PM</div>
                  </div>
                </div>
              </h2>
              <h2 className="container-title">Hackathon Begins</h2>
              <p className="container-description">
                2.5 hours of brainstorming, coding, teamwork, and project development.
              </p>
              <span className="circle"></span>
            </div>
            <div className="container ">
              <h2 className="date">
                <div>
                  4:10
                  <div>
                    <div>–</div> <div>4:25 PM</div>
                  </div>
                </div>
              </h2>
              <h2 className="container-title">Project Submission</h2>
              <p className="container-description">
                Final source code and project details submission.
              </p>
              <span className="circle"></span>
            </div>
            <div className="container ">
              <h2 className="date">
                <div>
                  4:25
                  <div>
                    <div>–</div> <div>5:05 PM</div>
                  </div>
                </div>
              </h2>
              <h2 className="container-title">Project Presentation</h2>
              <p className="container-description">
                Teams demonstrate their projects and explain their solutions to the judges.
              </p>
              <span className="circle"></span>
            </div>
            <div className="container ">
              <h2 className="date">
                <div>
                  5:05
                  <div>
                    <div>–</div> <div>5:20 PM</div>
                  </div>
                </div>
              </h2>
              <h2 className="container-title">Evaluation & Results</h2>
              <p className="container-description">
                Project evaluation and winner selection.
              </p>
              <span className="circle"></span>
            </div>
            <div className="container ">
              <h2 className="date">
                <div>
                  5:20
                  <div>
                    <div>–</div> <div>5:30 PM</div>
                  </div>
                </div>
              </h2>
              <h2 className="container-title">Closing Ceremony</h2>
              <p className="container-description">
                Winner announcements, prize distribution, and vote of thanks.
              </p>
              <span className="circle"></span>
            </div>
          </div>
        </div>
      </div>
      <div className="mainSchedule" id="schedule">
        <div className="parent-schedule-mobile">
          <div className="schedule-title-mobile">
            <img src="/images/rrr.webp" alt="arrow-logo" />
            Schedule
          </div>
          <div className="timeline-mobile" id="timeline">
            <div className="container-mobile" id="timeline-container">
              <h2 className="container-title-mobile">Registration & Check-in</h2>
              <h2 className="date-mobile">
                <div>
                  1:00
                  <div>
                    <div>–</div> <div>1:15 PM</div>
                  </div>
                </div>
              </h2>
              <p className="container-description-mobile">
                Participant verification and team confirmation.
              </p>
              <span className="circle-mobile"></span>
            </div>
            <div className="container-mobile" id="timeline-container">
              <h2 className="container-title-mobile">Rules & Guidelines</h2>
              <h2 className="date-mobile">
                <div>
                  1:15
                  <div>
                    <div>–</div> <div>1:30 PM</div>
                  </div>
                </div>
              </h2>
              <p className="container-description-mobile">
                Explanation of competition rules, theme, and Gemini API requirements.
              </p>
              <span className="circle-mobile"></span>
            </div>
            <div className="container-mobile" id="timeline-container">
              <h2 className="container-title-mobile">Problem Statement Briefing</h2>
              <h2 className="date-mobile">
                <div>
                  1:30
                  <div>
                    <div>–</div> <div>1:40 PM</div>
                  </div>
                </div>
              </h2>
              <p className="container-description-mobile">
                Introduction to the challenge and project expectations.
              </p>
              <span className="circle-mobile"></span>
            </div>
            <div className="container-mobile" id="timeline-container">
              <h2 className="container-title-mobile">Hackathon Begins</h2>
              <h2 className="date-mobile">
                <div>
                  1:40
                  <div>
                    <div>–</div> <div>4:10 PM</div>
                  </div>
                </div>
              </h2>
              <p className="container-description-mobile">
                2.5 hours of brainstorming, coding, teamwork, and project development.
              </p>
              <span className="circle-mobile"></span>
            </div>
            <div className="container-mobile" id="timeline-container">
              <h2 className="container-title-mobile">Project Submission</h2>
              <h2 className="date-mobile">
                <div>
                  4:10
                  <div>
                    <div>–</div> <div>4:25 PM</div>
                  </div>
                </div>
              </h2>
              <p className="container-description-mobile">
                Final source code and project details submission.
              </p>
              <span className="circle-mobile"></span>
            </div>
            <div className="container-mobile" id="timeline-container">
              <h2 className="container-title-mobile">Project Presentation</h2>
              <h2 className="date-mobile">
                <div>
                  4:25
                  <div>
                    <div>–</div> <div>5:05 PM</div>
                  </div>
                </div>
              </h2>
              <p className="container-description-mobile">
                Teams demonstrate their projects and explain their solutions to the judges.
              </p>
              <span className="circle-mobile"></span>
            </div>
            <div className="container-mobile" id="timeline-container">
              <h2 className="container-title-mobile">Evaluation & Results</h2>
              <h2 className="date-mobile">
                <div>
                  5:05
                  <div>
                    <div>–</div> <div>5:20 PM</div>
                  </div>
                </div>
              </h2>
              <p className="container-description-mobile">
                Project evaluation and winner selection.
              </p>
              <span className="circle-mobile"></span>
            </div>
            <div className="container-mobile" id="timeline-container">
              <h2 className="container-title-mobile">Closing Ceremony</h2>
              <h2 className="date-mobile">
                <div>
                  5:20
                  <div>
                    <div>–</div> <div>5:30 PM</div>
                  </div>
                </div>
              </h2>
              <p className="container-description-mobile">
                Winner announcements, prize distribution, and vote of thanks.
              </p>
              <span className="circle-mobile"></span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default schedule;