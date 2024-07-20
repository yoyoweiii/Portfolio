import React from "react";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "Ai powered smart form and estimation",
    description:
      "Led a $250,000 AI project to predict material prices using machine learning, reducing workflow and human errors by integrating market trends and expertise. Migrated the current tracking management system to a web-based platform.",
    link: "#",
  },
  {
    id: 2,
    title: "Budget/Equipment Trackling SYstem",
    description: "Developed a comprehensive tracking system using React.js for managing construction-related budgets, projects, and equipment. Designed a dynamic and responsive interface that ensures real-time data updates, providing users with the most current information. Implemented intuitive navigation and interactive elements to enhance user experience and productivity. Leveraged React's component-based architecture to create a scalable and maintainable platform, streamlining project management and resource allocation.",
    link: "#",
  },
  {
    id: 3,
    title: "Tiktok-Data Scraper",
    description: "As a Research Assistant for a malnutrition research project in America, my main responsibilities will involve gathering and analyzing data related to the hunger condition in the country. I am responsible to use specific tools such as IBM Watson AI and Python data mining to collect and process the data, while also utilizing Zotero and ATLAS.ti 22 for qualitative research. A key aspect of my role is analyzing videos by hashtag and user on TikTok to gain insights into the reports from users across the United States. Through my work, my team will be able to contribute to the understanding of malnutrition in America and provide valuable insights to help combat this important issue.",
    link: "#",
  },
  {
    id: 4,
    title: "Implementation-of-LINE-Bot-by-Integrating-Immediate-Transportation-Open-Data",
    description: "This is a significant project that enhanced my skills even more was when I worked on an interactive bot project on 2018. Which consisted of being put into a leadership role amongst my four team members. Our goal was to develop an innovative solution that would show users real-time traffic conditions in a chatbot format. To achieve this, we utilized open data from governmental websites and integrated the information into text and map format on a chatting app. As a team, we built a suitable environment for the project, operating Ubuntu through the LAMP model. We utilized a range of tools and technologies, including Python, Beautiful Soup, JavaScript, OpenStreetMap, Google Maps, SSH protocol, Flask, JSON parser, MySQL, crontab, Apache server, and Ubuntu 14.04 server. Through this project, I gained valuable experience in leadership, project management, and technical skills.",
    link: "#",
  },
];

function Projects() {
  return (
    <section id="projects">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link}>Learn More</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
