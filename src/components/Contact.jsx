import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
          <p>Get In Touch</p>
        </div>

        <div className="row">
          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              {/* Location */}
              <div className="address">
                <FaMapMarkerAlt className="icon" />
                <h4>Location:</h4>
                <p>51-10-28,Gajjalamma temple street,Rahahmundry 533101</p>
              </div>

              {/* Email */}
              <div className="email">
                <FaEnvelope className="icon" />
                <h4>Email:</h4>
                <p>kareemullamohammad91@gmail.com</p>
              </div>

              {/* Phone */}
              <div className="phone">
                <FaPhoneAlt className="icon" />
                <h4>Call:</h4>
                <p>+91-7997668368</p>
              </div>

              {/* Map iframe */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425872426637!3d40.74076987932881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzI2LjgiTiA3NMKwMDAnMTUuMyJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
                frameBorder="0" 
                style={{ border: 0, width: '100%', height: '290px' }}
                allowFullScreen
              ></iframe>
            </div>
          </div>

                    {/* Contact form remains the same */}
                    
                        <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                        <form className="php-email-form">
                        <div className="row">
                            <div className="form-group col-md-6">
                            <label htmlFor="name">Your Name</label>
                            <input type="text" name="name" className="form-control" id="name" required />
                            </div>
                            <div className="form-group col-md-6 mt-3 mt-md-0">
                            <label htmlFor="email">Your Email</label>
                            <input type="email" className="form-control" name="email" id="email" required />
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="subject">Subject</label>
                            <input type="text" className="form-control" name="subject" id="subject" required />
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="message">Message</label>
                            <textarea className="form-control" name="message" rows="10" required></textarea>
                        </div>
                        <div className="text-center">
                            <button type="submit">Send Message</button>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
        
            {/* ... your contact form code ... */}

    </section>
  );
};

export default Contact;