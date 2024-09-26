import React from 'react';

import Header from '../components/Header';
import CartMenu from '../components/CartMenu';
import MobileMenu from '../components/MobileMenu';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';

function Shop() {
    return (
        <div>
            <Header />
            <CartMenu />
            <MobileMenu />
            <div class="ltn__utilize-overlay"></div>
            <Breadcrumb />
            <Footer />
        </div>
    );   
}

export default Shop;