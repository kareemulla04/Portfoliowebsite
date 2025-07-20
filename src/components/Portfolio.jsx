import { useState } from 'react';

const Portfolio = () => {
  // Internship data
  const internships = [
    {
      id: 1,
      title: 'Salesforce Developer Intern',
      company: 'Salesforce',
      duration: 'Oct - Nov 2023',
      description: ' Focused on building applications and custom solutions on the Salesforce platform',
      skills: ['Apex programming', 'data integration', 'Lightning Web Components (LWC)']
    },
    {
      id: 2,
      title: 'AWS Academy Data Engineering',
      company: 'Amazon ',
      duration: 'Aug-2024',
      description: ' Focused on design, build, secure, and maintain data solutions on AWS',
      skills: ['Designing Data Solutions', 'Building Data Pipelines', 'Data Security']
    }
  ];

  // Projects data
  const projects = [
    {
      id: 1,
      title: 'Yacht Booking Portal',
      description: 'Designed a realtime project based on yatch booking website that helps for the tourism ',
      skills: ['React.js', 'Node.js', 'bootstrap+vite'],
      link: '#'
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'Developed a personal portfolio website to showcase my skills and projects',
      skills: ['React', 'CSS', 'JavaScript','bootstrap+vite'],
      link: '#'
    }
  ];

  

  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>My Internships and Projects</p>
        </div>

        {/* Internships Section */}
        <div className="internships mb-5">
          <h3 className="text-center mb-4">Internships</h3>
          <div className="row">
            {internships.map((internship) => (
              <div className="col-md-6 mb-4" key={internship.id}>
                <div className="card h-100">
                  <div className="card-body">
                    <h4 className="card-title">{internship.title}</h4>
                    <h5 className="card-subtitle mb-2 text-primary">
                      {internship.company} | {internship.duration}
                    </h5>
                    <p className="card-text">{internship.description}</p>
                    <div className="skills">
                      {internship.skills.map((skill, index) => (
                        <span key={index} className="badge bg-primary me-1 mb-1">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className="projects mb-5">
          <h3 className="text-center mb-4">Projects</h3>
          <div className="row">
            {projects.map((project) => (
              <div className="col-md-6 col-lg-4 mb-4" key={project.id}>
                <div className="card h-100">
                  <div className="card-body">
                    <h4 className="card-title">{project.title}</h4>
                    <p className="card-text">{project.description}</p>
                    <div className="skills mb-3">
                      {project.skills.map((skill, index) => (
                        <span key={index} className="badge bg-primary me-1 mb-1">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <a href={project.link} className="btn btn-outline-primary">
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;