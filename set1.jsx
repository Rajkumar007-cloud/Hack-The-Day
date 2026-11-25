import React, { useEffect, useState } from "react";
import "./projects.css";
import ReactGA from "react-ga";

const domains = [
  {
    id: 1,
    name: "HEALTHCARE & WELLNESS",
    color: "#e91e63",
    statements: [
      {
        id: 1,
        title: "Smart Medicine Reminder",
        difficulty: "Easy",
        time: "4–5 Hours",
        problem: "Patients often forget to take their medicines on time or struggle to follow complex medication schedules. Develop a smart medicine reminder application that helps users manage their medication schedules and track their daily medicine intake.",
        solve: [
          "Allow users to add medicine names and schedules.",
          "Send reminders for scheduled medicines.",
          "Track taken and missed doses.",
          "Generate medication history reports."
        ],
        target: "Patients, elderly people, and caregivers.",
        outcome: "A working medicine schedule, reminder notification, dose tracking, and medication history system."
      },
      {
        id: 2,
        title: "AI Health Assistant",
        difficulty: "Easy to Moderate",
        time: "5–7 Hours",
        problem: "Many people struggle to find understandable and reliable basic health information. Develop an AI-powered chatbot that provides general health information, explains common health terms, and guides users towards appropriate healthcare resources.",
        solve: [
          "Build an AI-powered chatbot.",
          "Provide basic health-related information.",
          "Explain common health terms in simple language.",
          "Guide users towards professional medical assistance when necessary."
        ],
        target: "General public, students, and rural communities.",
        outcome: "A functional health chatbot with a simple interface, reliable information sources, and appropriate safety guidance."
      },
      {
        id: 3,
        title: "Blood Donor Finder",
        difficulty: "Easy to Moderate",
        time: "5–7 Hours",
        problem: "During medical emergencies, patients and their families often struggle to find compatible blood donors quickly. Develop a platform that connects blood donors with patients based on blood group and location.",
        solve: [
          "Allow donors to register.",
          "Search donors by blood group.",
          "Filter donors by location.",
          "Allow users to submit emergency blood requests.",
          "Connect requesters with potential donors."
        ],
        target: "Patients, families, hospitals, blood banks, and voluntary donors.",
        outcome: "A blood donor registration and search platform with location-based filtering and emergency request functionality."
      },
      {
        id: 4,
        title: "Smart Patient Monitoring",
        difficulty: "Moderate",
        time: "3–4 Hours",
        problem: "Healthcare providers and caregivers may not identify abnormal patient readings quickly enough. Develop a monitoring dashboard that displays patient vital signs and generates alerts when readings cross predefined thresholds.",
        solve: [
          "Display patient vital information.",
          "Monitor heart rate, temperature, and oxygen saturation using sample or sensor data.",
          "Generate alerts when readings exceed configured thresholds.",
          "Maintain patient monitoring history."
        ],
        target: "Hospitals, doctors, nurses, and caregivers.",
        outcome: "A patient monitoring dashboard with sample or live readings, alerts, and basic historical charts."
      },
      {
        id: 5,
        title: "Hospital Queue Management",
        difficulty: "Easy to Moderate",
        time: "5–7 Hours",
        problem: "Hospitals often experience overcrowded registration areas and long patient waiting times. Develop a digital queue management system that allows patients to book appointments, receive queue tokens, and monitor their waiting status.",
        solve: [
          "Allow patients to book appointments.",
          "Generate digital queue tokens.",
          "Display current queue status.",
          "Estimate patient waiting time.",
          "Allow hospital staff to manage the queue."
        ],
        target: "Patients, hospital administrators, and reception staff.",
        outcome: "A digital appointment and queue management system with a patient interface and staff dashboard."
      }
    ]
  },
  {
    id: 2,
    name: "DISASTER MANAGEMENT",
    color: "#ff5722",
    statements: [
      {
        id: 1,
        title: "Emergency Alert System",
        difficulty: "Easy to Moderate",
        time: "5–7 Hours",
        problem: "During emergencies, people may not receive timely warnings or clear safety instructions. Develop an emergency alert platform that publishes location-based alerts and provides safety instructions during natural or human-made disasters.",
        solve: [
          "Display emergency alerts.",
          "Categorize alerts based on disaster type.",
          "Provide location-based information.",
          "Display emergency contact details.",
          "Provide safety instructions."
        ],
        target: "Citizens, local communities, and emergency authorities.",
        outcome: "An emergency notification platform with an alert dashboard and safety information."
      },
      {
        id: 2,
        title: "Disaster Resource Finder",
        difficulty: "Easy to Moderate",
        time: "5–7 Hours",
        problem: "During disasters, affected people may struggle to locate nearby shelters, hospitals, food distribution centres, and rescue services. Develop a platform that helps users find available emergency resources.",
        solve: [
          "Display nearby emergency shelters.",
          "Locate hospitals and medical facilities.",
          "Find food and water distribution centres.",
          "Provide location and contact information.",
          "Allow resource information to be updated."
        ],
        target: "Disaster victims, volunteers, and rescue teams.",
        outcome: "An interactive disaster resource directory or map with search and location filters."
      },
      {
        id: 3,
        title: "Missing Person Finder",
        difficulty: "Moderate",
        time: "3–4 Hours",
        problem: "During natural disasters and emergencies, families often struggle to locate missing individuals. Develop a centralized platform where users can report missing persons and search for registered cases.",
        solve: [
          "Allow users to submit missing-person reports.",
          "Upload photographs with appropriate consent.",
          "Search using names and other available details.",
          "Update case status.",
          "Allow authorized administrators to verify reports."
        ],
        target: "Families, police, authorized volunteers, and rescue organizations.",
        outcome: "A missing-person reporting and searching platform with case management functionality."
      },
      {
        id: 4,
        title: "Flood Risk Monitoring",
        difficulty: "Moderate",
        time: "3–4 Hours",
        problem: "Communities in flood-prone areas often lack sufficient awareness of rising water levels and potential flood risks. Develop a monitoring system that analyses rainfall and water-level information to identify potential flood threats.",
        solve: [
          "Display rainfall information.",
          "Monitor water-level data.",
          "Identify potential flood-risk areas.",
          "Generate threshold-based alerts.",
          "Display historical data and trends."
        ],
        target: "Flood-prone communities, disaster management teams, and local authorities.",
        outcome: "A flood monitoring dashboard with water-level information, risk indicators, and alerts."
      },
      {
        id: 5,
        title: "AI Emergency Report Analyzer",
        difficulty: "Moderate",
        time: "3–4 Hours",
        problem: "During disasters, emergency authorities may receive hundreds of reports from affected people. Manually analysing these reports can delay emergency response. Develop an AI-powered system that categorizes emergency reports and suggests priority levels.",
        solve: [
          "Accept emergency reports from users.",
          "Categorize reports using AI.",
          "Identify emergency types.",
          "Assign suggested priority levels.",
          "Display reports in a management dashboard."
        ],
        target: "Emergency response teams, government authorities, and disaster coordinators.",
        outcome: "An AI-based emergency report classification and prioritization platform with human review."
      }
    ]
  },
  {
    id: 3,
    name: "SMART CITIES & URBAN DEVELOPMENT",
    color: "#2196f3",
    statements: [
      {
        id: 1,
        title: "Smart Civic Complaint System",
        difficulty: "Easy to Moderate",
        time: "5–7 Hours",
        problem: "Citizens frequently experience problems such as damaged roads, potholes, broken streetlights, drainage issues, and improper waste disposal. However, reporting these problems and tracking their resolution can be difficult. Develop a digital civic complaint management platform that connects citizens with municipal authorities.",
        solve: [
          "Allow citizens to submit complaints.",
          "Upload photographs of civic problems.",
          "Record complaint locations.",
          "Generate complaint tracking IDs.",
          "Allow authorities to update complaint status."
        ],
        target: "Citizens, municipalities, and civic authorities.",
        outcome: "A civic complaint platform with citizen registration, complaint tracking, and an authority dashboard."
      },
      {
        id: 2,
        title: "Smart Parking Finder",
        difficulty: "Easy to Moderate",
        time: "5–7 Hours",
        problem: "Drivers often waste time searching for available parking spaces, contributing to unnecessary traffic congestion. Develop a smart parking application that displays available parking locations and helps drivers identify suitable parking spaces.",
        solve: [
          "Display nearby parking locations.",
          "Show available parking spaces.",
          "Allow users to search by location.",
          "Provide parking information.",
          "Update parking availability."
        ],
        target: "Drivers, commuters, parking operators, and shopping centres.",
        outcome: "A parking finder application with availability indicators and location-based search."
      },
      {
        id: 3,
        title: "Public Transport Tracker",
        difficulty: "Moderate",
        time: "3–4 Hours",
        problem: "Passengers often face uncertainty about public transport arrival times and vehicle locations. Develop a tracking platform that provides route information, vehicle locations, and estimated arrival times.",
        solve: [
          "Display available bus routes.",
          "Show bus locations.",
          "Display upcoming stops.",
          "Estimate arrival times.",
          "Provide route information."
        ],
        target: "Daily commuters, students, and transport authorities.",
        outcome: "A public transport tracking dashboard with route selection and estimated arrival information."
      },
      {
        id: 4,
        title: "AI Waste Classification",
        difficulty: "Moderate",
        time: "3–4 Hours",
        problem: "Improper waste segregation creates difficulties for recycling and waste management. Develop an AI-powered application that identifies waste categories using images and provides appropriate disposal instructions.",
        solve: [
          "Allow users to upload waste images.",
          "Identify waste categories using image recognition.",
          "Classify waste as organic, recyclable, or general waste.",
          "Provide disposal instructions.",
          "Display classification results."
        ],
        target: "Households, sanitation workers, schools, and waste management organizations.",
        outcome: "An image-based waste classification application with disposal recommendations."
      },
      {
        id: 5,
        title: "Intelligent Traffic Monitoring",
        difficulty: "Moderate",
        time: "3–4 Hours",
        problem: "Increasing vehicle numbers create traffic congestion and longer travel times in urban areas. Develop an intelligent traffic monitoring system that analyses traffic density and identifies congested roads.",
        solve: [
          "Analyse traffic density using images, video, or sample data.",
          "Identify congested roads.",
          "Display traffic conditions.",
          "Suggest alternative routes.",
          "Generate traffic reports."
        ],
        target: "Commuters, traffic police, and urban transport authorities.",
        outcome: "A traffic monitoring dashboard with traffic density analysis and alternative route suggestions."
      }
    ]
  },
  {
    id: 4,
    name: "EDUCATION & LEARNING",
    color: "#9c27b0",
    statements: [
      {
        id: 1,
        title: "AI Study Assistant",
        difficulty: "Easy to Moderate",
        time: "5–7 Hours",
        problem: "Students often struggle to understand difficult academic topics and find appropriate learning resources. Develop an AI-powered study assistant that explains concepts in simple language and helps students improve their understanding.",
        solve: [
          "Build an AI-powered chatbot.",
          "Answer academic questions.",
          "Explain difficult topics in simple language.",
          "Generate examples and summaries.",
          "Create short practice quizzes."
        ],
        target: "School students, college students, and independent learners.",
        outcome: "An AI study assistant with subject-wise assistance and question-answering functionality."
      },
      {
        id: 2,
        title: "Smart Attendance System",
        difficulty: "Easy",
        time: "4–5 Hours",
        problem: "Traditional attendance systems require manual record-keeping and can result in errors. Develop a digital attendance management platform that allows teachers to record attendance and generate automated reports.",
        solve: [
          "Maintain student records.",
          "Record daily attendance.",
          "Calculate attendance percentages.",
          "Generate attendance reports.",
          "Display student attendance history."
        ],
        target: "Teachers, students, and educational institutions.",
        outcome: "A digital attendance system with student records, attendance tracking, and automated reports."
      },
      {
        id: 3,
        title: "Student Performance Analyzer",
        difficulty: "Easy",
        time: "4–5 Hours",
        problem: "Students and teachers may struggle to identify academic weaknesses through traditional mark sheets. Develop an analytical platform that evaluates student performance and highlights subjects requiring improvement.",
        solve: [
          "Enter or upload student marks.",
          "Analyse subject-wise performance.",
          "Track attendance.",
          "Generate performance charts.",
          "Suggest areas for improvement."
        ],
        target: "Students, teachers, parents, and academic coordinators.",
        outcome: "A student performance dashboard with academic analysis and improvement suggestions."
      },
      {
        id: 4,
        title: "Personalized Learning Platform",
        difficulty: "Moderate",
        time: "3–4 Hours",
        problem: "Every student has a different learning speed and level of understanding. Traditional learning platforms often provide the same content to every student. Develop a personalized learning platform that recommends study materials based on individual performance.",
        solve: [
          "Assess students through short quizzes.",
          "Track learning progress.",
          "Identify weak topics.",
          "Recommend relevant learning materials.",
          "Provide personalized practice questions."
        ],
        target: "Students, online learners, and educational institutions.",
        outcome: "A personalized learning platform with progress tracking and content recommendations."
      },
      {
        id: 5,
        title: "AI Resume & Career Guidance",
        difficulty: "Easy to Moderate",
        time: "5–7 Hours",
        problem: "College students and fresh graduates often struggle to identify suitable career opportunities and understand which skills they need to develop. Develop an AI-powered career guidance platform that analyses resumes and recommends suitable career paths.",
        solve: [
          "Allow users to upload resumes.",
          "Extract skills and qualifications.",
          "Analyse skill gaps.",
          "Recommend suitable career paths.",
          "Suggest relevant courses and learning resources."
        ],
        target: "College students, fresh graduates, and job seekers.",
        outcome: "An AI resume analyser with career recommendations and skill-gap reports."
      }
    ]
  },
  {
    id: 5,
    name: "AGRICULTURE & RURAL DEVELOPMENT",
    color: "#4caf50",
    statements: [
      {
        id: 1,
        title: "Smart Crop Advisory",
        difficulty: "Easy to Moderate",
        time: "5–7 Hours",
        problem: "Farmers may struggle to select suitable crops based on soil conditions, seasonal changes, and weather information. Develop a smart crop advisory system that recommends suitable crops using available agricultural information.",
        solve: [
          "Collect soil information.",
          "Analyse seasonal conditions.",
          "Consider weather information.",
          "Recommend suitable crops.",
          "Provide basic crop-growing guidance."
        ],
        target: "Small-scale farmers and agricultural communities.",
        outcome: "A crop recommendation application with soil-based and seasonal suggestions."
      },
      {
        id: 2,
        title: "Farmer Market Connect",
        difficulty: "Easy to Moderate",
        time: "5–7 Hours",
        problem: "Farmers may depend on multiple intermediaries to sell their agricultural products, reducing their earnings. Develop a digital marketplace that connects farmers directly with buyers and provides transparent market information.",
        solve: [
          "Allow farmers to register.",
          "Upload agricultural product listings.",
          "Display product quantities and prices.",
          "Allow buyers to search for products.",
          "Provide a buyer-farmer communication system."
        ],
        target: "Farmers, wholesalers, retailers, and consumers.",
        outcome: "An agricultural marketplace with product listings, search functionality, and buyer enquiries."
      },
      {
        id: 3,
        title: "Crop Disease Detection",
        difficulty: "Moderate",
        time: "3–4 Hours",
        problem: "Crop diseases can reduce agricultural productivity when they are not identified early. Develop an AI-powered application that analyses photographs of plant leaves and identifies possible diseases.",
        solve: [
          "Upload plant leaf photographs.",
          "Analyse images using AI or machine learning.",
          "Identify selected crop diseases.",
          "Display prediction results.",
          "Provide general guidance on possible next steps."
        ],
        target: "Farmers, agricultural students, and agricultural experts.",
        outcome: "An image-based crop disease detection application with prediction results and basic guidance."
      },
      {
        id: 4,
        title: "Smart Irrigation Advisor",
        difficulty: "Moderate",
        time: "3–4 Hours",
        problem: "Traditional irrigation practices may lead to unnecessary water consumption and inefficient crop watering. Develop a smart irrigation advisory system that recommends watering schedules using soil moisture and weather information.",
        solve: [
          "Monitor soil moisture.",
          "Collect weather information.",
          "Recommend irrigation schedules.",
          "Identify when watering may be necessary.",
          "Display irrigation status."
        ],
        target: "Farmers, agricultural businesses, and irrigation managers.",
        outcome: "An irrigation recommendation dashboard using sample data or sensor readings."
      },
      {
        id: 5,
        title: "Agricultural Price Predictor",
        difficulty: "Moderate",
        time: "3–4 Hours",
        problem: "Farmers often face uncertainty regarding the market prices of agricultural products. Develop an analytical platform that studies historical market prices and estimates possible future price trends.",
        solve: [
          "Collect historical agricultural price data.",
          "Display market price trends.",
          "Compare prices across markets.",
          "Predict possible future price movements.",
          "Generate price analysis reports."
        ],
        target: "Farmers, agricultural traders, and cooperatives.",
        outcome: "An agricultural price analysis dashboard with historical charts and basic price predictions."
      }
    ]
  },
  {
    id: 6,
    name: "ENVIRONMENT & SUSTAINABILITY",
    color: "#009688",
    statements: [
      {
        id: 1,
        title: "Air Quality Monitoring",
        difficulty: "Easy",
        time: "4–5 Hours",
        problem: "People often lack awareness of the air quality in their surroundings and its potential impact on health. Develop an air quality monitoring dashboard that displays pollution levels and provides appropriate health recommendations.",
        solve: [
          "Display AQI information.",
          "Show available pollutant readings.",
          "Allow location selection.",
          "Display pollution trends.",
          "Provide basic health precautions."
        ],
        target: "Citizens, students, schools, and environmental authorities.",
        outcome: "An AQI monitoring dashboard with pollution information and health guidance."
      },
      {
        id: 2,
        title: "Water Conservation Tracker",
        difficulty: "Easy",
        time: "4–5 Hours",
        problem: "Excessive water consumption and wastage create environmental challenges. Develop an application that tracks household water usage and helps users identify opportunities to reduce water consumption.",
        solve: [
          "Record daily water consumption.",
          "Display usage history.",
          "Compare usage with a target.",
          "Identify excessive consumption.",
          "Provide water conservation suggestions."
        ],
        target: "Households, hostels, educational institutions, and housing societies.",
        outcome: "A water consumption tracking application with charts and conservation recommendations."
      },
      {
        id: 3,
        title: "Green Habit Tracker",
        difficulty: "Easy",
        time: "4–5 Hours",
        problem: "People may want to adopt environmentally friendly habits but lack motivation and a simple way to track their progress. Develop a platform that encourages sustainable activities and estimates their environmental impact.",
        solve: [
          "Record eco-friendly activities.",
          "Track daily green habits.",
          "Calculate estimated environmental savings.",
          "Provide achievement points or badges.",
          "Display progress reports."
        ],
        target: "Students, individuals, schools, and organizations.",
        outcome: "An eco-friendly habit tracking platform with progress reports and estimated carbon savings."
      },
      {
        id: 4,
        title: "Smart Pollution Reporter",
        difficulty: "Easy to Moderate",
        time: "5–7 Hours",
        problem: "Citizens often notice environmental problems such as illegal waste dumping, water pollution, and air pollution but may not know how to report them. Develop a digital platform that allows users to report environmental issues and track their resolution.",
        solve: [
          "Allow citizens to submit pollution reports.",
          "Upload photographs.",
          "Record incident locations.",
          "Categorize pollution types.",
          "Track complaint status."
        ],
        target: "Citizens, environmental authorities, and NGOs.",
        outcome: "A location-based pollution reporting platform with an administrative dashboard."
      },
      {
        id: 5,
        title: "AI Waste Management Optimizer",
        difficulty: "Moderate",
        time: "3–4 Hours",
        problem: "Inefficient waste collection schedules and routes can increase operational costs and environmental pollution. Develop an intelligent waste management system that analyses waste collection information and recommends efficient collection routes.",
        solve: [
          "Collect waste generation information.",
          "Identify waste collection points.",
          "Analyse collection patterns.",
          "Recommend optimized collection routes.",
          "Display collection schedules."
        ],
        target: "Municipalities, waste collection agencies, and sanitation departments.",
        outcome: "A waste management dashboard with collection-point analysis and optimized route recommendations."
      }
    ]
  }
];

const set1 = () => {
  useEffect(() => {
    document.title = "Projects - Set 1";
  }, []);

  const [activeDomain, setActiveDomain] = useState(0);
  const [expandedStatement, setExpandedStatement] = useState(null);

  // Calculate global unique number for each statement (1-30)
  const getGlobalNumber = (domainIndex, statementIndex) => {
    let count = 0;
    for (let i = 0; i < domainIndex; i++) {
      count += domains[i].statements.length;
    }
    return count + statementIndex + 1;
  };

  const handleDomainClick = (domainIndex) => {
    ReactGA.event({
      category: "Navigation",
      action: "click",
      label: `Domain: ${domains[domainIndex].name}`,
    });
    setActiveDomain(domainIndex);
    setExpandedStatement(null);
  };

  const handleStatementClick = (domainIndex, statementId) => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: `Problem: ${domains[domainIndex].statements.find(s => s.id === statementId).title}`,
    });
    setExpandedStatement(prev => prev === `${domainIndex}-${statementId}` ? null : `${domainIndex}-${statementId}`);
  };

  return (
    <React.Fragment>
      <div className="parent-software">
        <h1 className="parent-software-title">Projects - Set 1</h1>
        <p className="projects-disclaimer">
          OWN/UNIQUE PROBLEM STATEMENTS ARE ALSO WELCOMED - Kindly intimate when
          speaking with registration team
        </p>

        {/* Domain Tabs */}
        <div className="domain-tabs">
          {domains.map((domain, index) => (
            <button
              key={domain.id}
              className={`domain-tab ${activeDomain === index ? 'active' : ''}`}
              onClick={() => handleDomainClick(index)}
              style={{
                borderColor: domain.color,
                backgroundColor: activeDomain === index ? domain.color : 'transparent',
                color: activeDomain === index ? '#fff' : domain.color
              }}
            >
              {domain.name}
            </button>
          ))}
        </div>

        {/* Problem Statements Grid */}
        <div className="software-container">
          {domains[activeDomain].statements.map((stmt, stmtIndex) => (
            <div
              key={stmt.id}
              className="software-content"
              onClick={() => handleStatementClick(activeDomain, stmt.id)}
            >
              <div className="statement-header">
                <span className="problem-number">#{getGlobalNumber(activeDomain, stmtIndex)}</span>
                <h1 className="software-content-title">{stmt.title}</h1>
              </div>

              <div className={`software-content-description ${expandedStatement === `${activeDomain}-${stmt.id}` ? 'projects-view' : 'projects-close'}`}>
                <div className="detail-section">
                  <h3>Problem Statement</h3>
                  <p>{stmt.problem}</p>
                </div>
                <div className="detail-section">
                  <h3>What to Solve</h3>
                  <ul>
                    {stmt.solve.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="detail-section">
                  <h3>Primary Target</h3>
                  <p>{stmt.target}</p>
                </div>
                <div className="detail-section">
                  <h3>Expected Outcome</h3>
                  <p>{stmt.outcome}</p>
                </div>
              </div>

              {expandedStatement !== `${activeDomain}-${stmt.id}` && (
                <div className="click-hint">Click to view details</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default set1;