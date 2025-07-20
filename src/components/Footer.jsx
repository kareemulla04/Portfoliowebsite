import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="copyright">
          &copy; Copyright <strong><span>kareem</span></strong>. All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a href="https://example.com/">Kareem mohamamd</a>
        </div>
      </div>
      
      <div className="social-links">
        <a href="#" className="facebook"><FaFacebook /></a>
        <a href="#" className="twitter"><FaTwitter /></a>
        <a href="#" className="instagram"><FaInstagram /></a>
        <a href="#" className="linkedin"><FaLinkedin /></a>
        <a href="#" className="github"><FaGithub /></a>
      </div>
    </footer>
  )
}

export default Footer