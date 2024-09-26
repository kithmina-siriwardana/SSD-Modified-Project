import React from 'react';
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import { useNavigate, Link } from 'react-router-dom'

function Header() {
    const navigate = useNavigate()
    const { logout } = useLogout()
    const { user } = useAuthContext()
    const handleClick = () => {
        logout()
        navigate("/login")
    }

    return (
        <header class="ltn__header-area ltn__header-5 ltn__header-transparent gradient-color-2">
            <div class="ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-black plr--9---">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div class="site-logo-wrap">
                                <div class="site-logo">
                                    </div>
                            </div>
                        </div>
                        <div class="col header-menu-column menu-color-white">
                            <div class="header-menu d-none d-xl-block">
                                <nav>
                                <div className="ltn__main-menu">
                                        <ul>
                                            <li><a href="/">Home</a>

                                            </li>
                                            <li ><a href="/products">Shop</a>

                                            </li>
                                            <li><a href="/">Contact</a></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                        <div class="ltn__header-options ltn__header-options-2">
                            <div class="ltn__drop-menu user-menu">
                                <ul>
                                    <li>
                                        <a href=""><i class="icon-user"></i></a>
                                        <ul>
                                            {!user && (
                                                <>
                                                    <li><Link reloadDocument to ={{pathname:`/login`}}>Sign in</Link></li>
                                                    <li><Link reloadDocument to ={{pathname:`/signup`}}>Register</Link></li>
                                                </>
                                            )}
                                            {user && (
                                                <>
                                                    <li><Link reloadDocument to ={{pathname:`/account`}}>My Account</Link></li>
                                                    <li onClick={handleClick}><a>Log out</a></li>
                                                </>
                                            )}
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div class="mini-cart-icon">
                                <a href="" class="">
                                    <i class="icon-shopping-cart"></i>
                                    <sup></sup>
                                </a>
                            </div>
                            <div class="mobile-menu-toggle d-xl-none">
                                <a href="#ltn__utilize-mobile-menu" class="ltn__utilize-toggle">
                                    <svg viewBox="0 0 800 600">
                                        <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" id="top"></path>
                                        <path d="M300,320 L540,320" id="middle"></path>
                                        <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" id="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) "></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;