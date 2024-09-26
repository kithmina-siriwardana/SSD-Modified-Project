import React from 'react';

import Header from '../components/Header';
import CartMenu from '../components/CartMenu';
import MobileMenu from '../components/MobileMenu';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';
import CustomerAccount from '../components/CustomerAccount';

function Account() {
  return (
    <div>
      <Header />
      <CartMenu />
      <MobileMenu />
      <div class="ltn__utilize-overlay"></div>
      <Breadcrumb />
      <CustomerAccount />
      <Footer />
    </div>
  );
}

export default Account;