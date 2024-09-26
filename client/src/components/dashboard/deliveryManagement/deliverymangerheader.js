import React from 'react';

function Header() {
  
  const handleClick = () => {
    // 👇️ add class to the body element
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
        <img src={process.env.PUBLIC_URL+"/dashboard-assets/img/logo.png"} alt="" />
        <span className="d-none d-lg-block">Jiffy</span>
      </a>
      <i className="bi bi-list toggle-sidebar-btn" onClick={handleClick}></i>
    </div>

    
  </header>
    );
}

export default Header;