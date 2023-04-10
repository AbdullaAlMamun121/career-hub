import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
const Header = () => {
     return (
    <header className="header">
      <div className="header-section logo-section">
        <h1>CareerMap</h1>
      </div>
      <div className="header-section menu-section">
        <nav>
          <ul>
            <li><Link to="/statistics">Statistics</Link></li>
            <li><Link to="/appliedJob">Applied Job</Link></li>
            <li><Link to="/blog">Blog</Link></li>
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