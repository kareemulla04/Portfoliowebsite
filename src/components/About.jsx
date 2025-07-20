const About = () => {
  const skills = [
    'HTML/CSS',
    'Python',
    'React',
    'Bootstrap',
    'JavaScript',
    'Git',
    'Node.js',
    'communication',
  ]

  return (
    <section id="about" className="about section-bg">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
          <p>Learn more about me</p>
        </div>
        
        <div className="row">
          <div className="col-lg-4">
            <img 
              src="image.jpg" 
              className="img-fluid" 
              alt="About Me" 
            />
          </div>
          
          <div className="col-lg-8 pt-4 pt-lg-0 content">
            <h3>Web Developer </h3>
            <p className="fst-italic">
             As a web developer, I specialize in creating dynamic and responsive websites that provide exceptional user experiences.
            </p>
            
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><strong>Birthday:</strong> <span>18 April 2004</span></li>
                  <li><strong>Website:</strong> <span><em>www.linkedin.com/in/mohammad-kareemulla-081059348</em></span></li>
                  <li><strong>Phone:</strong> <span>+91 7997668368</span></li>
                  <li><strong>City:</strong> <span>Hyderabad Telangana</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><strong>Age:</strong> <span>21</span></li>
                  <li><strong>Degree:</strong> <span>B.Tech [E.C.E] </span></li>
                  <li><strong>Email:</strong> <span>kareemullamohammad91@gmail.com</span></li>
                </ul>
              </div>
            </div>
            
            <p>
              I utilize HTML, CSS, JavaScript, and various frameworks to build visually appealing and functional web applications.My focus is on delivering high-quality code, optimizing performance, and ensuring cross-browser compatibility. With a keen eye for design and a commitment to best practices, I strive to bring innovative ideas to life while meeting the unique needs of users alike.
            </p>
          </div>
        </div>
        
        <div className="skills mt-5">
          <h3>My Skills</h3>
          
          <div className="row">
            {skills.map((skill, index) => (
              <div className="col-lg-3 col-md-4 col-sm-6 mb-3" key={index}>
                <div className="skill-box p-3 text-center" 
                     style={{
                       backgroundColor: '#007bff',
                       color: 'white',
                       borderRadius: '35px',
                       boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                       transition: 'all 0.3s ease'
                     }}>
                  {skill}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About