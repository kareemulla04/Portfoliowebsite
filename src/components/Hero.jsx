const Hero = () => {
  return (
    <section id="home" className="hero d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center">
            <h1>Hi, I'm Kareem Mohammd</h1>
            <h2>I'm a web developer</h2>
            <div className="mt-4">
              <a href="#about" className="btn btn-primary btn-lg me-3">
                About Me
              </a>
              <a href="#resume" className="btn btn-primary btn-lg me-3">
                View Resume
              </a> 
              <a href="#portfolio" className="btn btn-primary btn- me-3">
                My Portfolio
              </a>
              
            </div>
          </div>
          <div className="col-md-6 hero-img">
            <img 
              src="image1.jpg" 
              className="img-fluid" 
              alt="Developer Illustration" 
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero