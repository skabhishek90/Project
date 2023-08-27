import React from 'react';
import './Navbar.css';
import i1 from './asset/facebook.png';
import i2 from './asset/instagram.png';
import i3 from './asset/line.png';
import i4 from './asset/twitter.png';
import i5 from './asset/vehicle.png';
import i6 from './asset/Vector.png';
import i7 from './asset/boy.png';
import i8 from './asset/star.png';
import i9 from './asset/rec.png';

const navbar = [
        { name: 'Home', id: 'home'},
        { name: 'About', id: 'about' },
        { name: 'Our Products', id: 'product', child: [
        { name: 'Product 1', id: 'p1'},
        { name: 'Product 2', id: 'p2' },
        { name: 'Product 3', id: 'p3'},
        { name: 'Product 4', id: 'p4' },
        ] },
        { name: 'Contact Us', id: 'contact'},
];

function Navbar() {
  return (
    <div className="navbar">
      <div className="top-bar">
        <div className="top-text">
            <img src={i5} alt="Free Delivery" />
            Free Delivery
        </div>
        <div className="top-text">
          Login
        </div>

        <div className="top-text">
            Follow US
        </div>
        <div className="top-icons">
          {/* Icons */}
            <span className="top-icon">
                <img src={i1} alt="Icon 1" />
            </span>
            <span className="top-icon">
                <img src={i6} alt="Icon 2" />
            </span>
            <span className="top-icon">
                <img src={i4} alt="Icon 3" />
            </span>
            <span className="top-icon">
                <img src={i2} alt="Icon 3" />
            </span>
          {/* Add more icons as needed */}
        </div>
      </div>
      <div className="logo">SHOPKART</div>
      <span className="line">
        <img src={i3} alt="Icon 3" />
      </span>
      <div className="white-line" />

      <ul className="menu">
        {/* Top menubar */}
        {navbar.map((item) => (
          <li key={item.id} className="menu-item">
            {item.name}
            {item.child && (
              <ul className="submenu">
                {item.child.map((childItem) => (
                  <li key={childItem.id} className="submenu-item">
                    {childItem.name}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <div className="branding">
        <div className="fresh">Fresh</div>
        <div className="year">2022</div>
        <div className="sales">Sales</div>
      </div>
      <div className="image-container">

        <img className="hidden-image" src={i8} alt="Hidden" />
        <img className="visible-image" src={i7} alt="Visible" />
      </div>
    </div>
    
  );
}

export default Navbar;
