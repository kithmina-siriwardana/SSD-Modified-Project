import { React, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import RegisterComponent from '../../components/auth/SignupComponent';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/Breadcrumb';
import CartMenu from '../../components/CartMenu';
import MobileMenu from '../../components/MobileMenu';

function RegisterPage() {
    return (
        <div>
            <Header />
            <CartMenu />
            <MobileMenu />
            <div class="ltn__utilize-overlay"></div>
            <Breadcrumb />
            <RegisterComponent />
            <Footer />
        </div> 
    );
}

export default RegisterPage;