import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
const Header = () => {
     return (
    <header className="header mt-4">
      <div className="header-section logo-section">
        <Link className='text-decoration-none' to='/'><h1>CareerMap</h1></Link>
      </div>
      <div className="header-section menu-section">
        <nav>
          <ul>
            <li><Link className='text-decoration-none' to="/">Home</Link></li>
            <li><Link className='text-decoration-none' to="/statistics">Statistics</Link></li>
            <li><Link className='text-decoration-none' to="/appliedJob">Applied Job</Link></li>
            <li><Link className='text-decoration-none' to="/blog">Blog</Link></li>
          </ul>
        </nav>
      </div>
      <div className="header-section button-section">
        <a href="#" className="button">Star Applying</a>
      </div>
      
    </header>
    )
};

export default Header;

