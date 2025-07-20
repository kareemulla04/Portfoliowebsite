import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Header = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'resume', label: 'Resume' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' }
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed-top">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand" href="#home">
            <span className="text-primary">Kareem</span> Mohammad
          </a>
          
          <button 
            className="navbar-toggler" 
            type="button" 
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
          
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
            <ul className="navbar-nav ms-auto">
              {navItems.map((item) => (
                <li className="nav-item" key={item.id}>
                  <a 
                    className={`nav-link ${activeSection === item.id ? 'active' : ''}`} 
                    href={`#${item.id}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header