import React from 'react';

const Header = () => {
  return (
    <div className="navbar-fixed" role="navigation" aria-label="Hacker News Logo">
      <nav className="red">
        <div className="container">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo" style={{ whiteSpace: 'nowrap' }}>
              Hacker News
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
