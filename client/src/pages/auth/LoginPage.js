import React from 'react';

import LoginComponent from '../../components/auth/LoginComponent';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';
import MobileMenu from '../../components/MobileMenu';
import CartMenu from '../../components/CartMenu';

function LoginPage() {
    return (
        <div>
            <Header />
            <CartMenu />
            <MobileMenu />
            <div class="ltn__utilize-overlay"></div>
            <Breadcrumb />
            <LoginComponent />
            <Footer />
        </div> 
    );
}

export default LoginPage;