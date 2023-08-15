import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faBars } from '@fortawesome/free-solid-svg-icons';
import Logo from '../assets/logo.png';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav>
        <a href="/">
          <img src={Logo} alt="Logo" className='logo' />
        </a>
        <div className={`Nav-Link ${isMenuOpen ? 'active' : ''}`}>
          <FontAwesomeIcon className='Icon' icon={faCircleXmark} /> 
          <ul>
            <li><Link className='links' to="/">HOME</Link></li>
            <li><Link className='links' to="/about">ABOUT</Link></li>
            <li><Link className='links' to="/courses">COURSES</Link></li>
            <li><Link className='links' to="/blog">BLOG</Link></li>
            <li><Link className='links' to="/contact">CONTACT</Link></li>
            <li><Link className='links' to="/campus">CAMPUS</Link></li>
          </ul>
        </div>
        <FontAwesomeIcon className={`Icon ${isMenuOpen ? 'close' : ''}`} icon={faBars} onClick={toggleMenu} /> 
      </nav>
    </div>
  );
}

export default Navbar;

// import React from 'react'
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
// import Home from '../Home/Home'
// import About from '../About/About'
// import Contact from '../Contact/Contact'
// import './Navbar.css'
// function Navbar() {
//   return (
//     <div>
//       <Router>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About Us</Link>
//             </li>
//             <li>
//               <Link to="/contact">Contact</Link>
//             </li>
//           </ul>
//         </nav>
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/about' element={<About />} />
//           <Route path='/contact' element={<Contact />} />
//         </Routes>
//       </Router>
//     </div>
//   )
// }

// export default Navbar