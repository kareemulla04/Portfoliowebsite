const Resume = () => {
  // Replace with your actual resume link
  const resumeLink = "https://drive.google.com/file/d/163i6jJQDUJFrTWp4cuIW3q-jC5PC5DM0/view?usp=sharing";
  
  return (
    <section id="resume" className="resume section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Resume</h2>
          <p>Check My Resume</p>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>Kareem</h4>
              <p><em>As a web developer, I specialize in creating dynamic and responsive websites that provide exceptional user experiences.</em></p>
              <ul>
                <li>Rajahmundry , Andhra pradesh</li>
                <li>+91-7997668368</li>
                <li>kareemullamohammad91@gmail.com.com</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Pragati Engineering College</h4>
              <h5>2021-2025</h5>
              <p>B.Tech, Electronics and Communication Engineering</p>
              
              <p> CGPA:- 8.0</p>
            </div>
          </div>

          <div className="col-lg-6">
            <h3 className="resume-title">Projects & Internships</h3>
            <div className="resume-item">
              <h4>My Portfolio</h4>
              <p><em>Developed a personal portfolio website to showcase my skills and projects using React.js and CSS.</em></p>
              <h4>Yatchs</h4>
              <p><em>Designed a realtime project based on yatch booking website that helps for the tourism using react.js and CSS. </em></p>
              <h4>Internships</h4>
              <ul>
                <li>Google Android developer virtual internship using google android studios.</li>
                <li>Salesforce developer virtual internship-Salesforce</li>
                <li>AWS Academy Data Engineering certification-Amazon</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <a 
            href={resumeLink} 
            className="btn btn-primary btn-lg"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default Resume