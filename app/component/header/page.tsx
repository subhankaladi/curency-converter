import React from 'react';
import './header.css'; // Importing the CSS file for styling
import Link from 'next/link';
import Main from '../main/page';

const Header = () => {
  return (
    <div className="header">
      <div className="curve"></div>

      {/* Navbar */}
      <ul className="nav">
        <li className="dropdown">News
          <ul className="dropdown-menu">
            <li><Link href="#need1">Stock News</Link></li>
            <li><Link href="#need2">Forex News</Link></li>
            <li><Link href="#need3">Crypto News</Link></li>
          </ul>
        </li>
        <li className="dropdown">Markets
          <ul className="dropdown-menu">
            <li><Link href="#need1">S&P</Link></li>
            <li><Link href="#need2">EURO</Link></li>
            <li><Link href="#need3">JPY</Link></li>
          </ul>
        </li>
        <li className="dropdown">
            <Link href='/'>My-Portfolio</Link>
        </li>
      </ul>

      <div className="card">
       <Main/>
      </div>
    </div>
  );
}

export default Header;
