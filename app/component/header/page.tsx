
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
            <li><Link href="/stock">Stock News</Link></li>
            <li><Link href="/forex">Forex News</Link></li>
            <li><Link href="/crypto">Crypto News</Link></li>
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
        <Link target='_blank' href='https://subhankaladiportfolio.vercel.app/'>My-Portfolio</Link>
        </li>
      </ul>

      <div className="card">
       <Main/>
      </div>
    </div>
  );
}

export default Header;
