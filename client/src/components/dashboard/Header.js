import React from 'react';

function Header() {
  
  const handleClick = () => {
    if (document.body.classList.contains('toggle-sidebar')){
      document.body.classList.remove('toggle-sidebar');
    }else{
      document.body.classList.add('toggle-sidebar');
    }
  };
  return (
        <header id="header" className="header fixed-top d-flex align-items-center">

    <div className="d-flex align-items-center justify-content-between">
      <a href="index.html" className="logo d-flex align-items-center">
        <span className="d-none d-lg-block">Jiffy (PVT) LTD</span>
      </a>
      <i className="bi bi-list toggle-sidebar-btn" onClick={handleClick}></i>
    </div>
    

    <nav className="header-nav ms-auto">
      <ul className="d-flex align-items-center">    
        <li className="nav-item dropdown pe-3">

          
          
        </li>

      </ul>
    </nav>

  </header>
    );
}

export default Header;