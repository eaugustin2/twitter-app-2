import React from 'react';
import NavbarItem from '../NavbarItem/NavbarItem';
import './navbar.scss'

const Navbar = () => {
    
    return (
        <section className='navbar'>
            <div className='navbar__container'>
                <div className='navbar__container__left'>
                    <NavbarItem anchor='#' title='Home' icon={{imageUrl: 'https://cdn-icons-png.flaticon.com/512/263/263115.png', altText: 'home'}} />
                    <NavbarItem anchor='#' title='Moments' icon={{imageUrl: 'https://cdn-icons-png.flaticon.com/512/248/248053.png', altText: 'moments'}} />
                    <NavbarItem anchor='#' title='Notifications' icon={{imageUrl: 'https://cdn-icons-png.flaticon.com/512/2529/2529521.png', altText: 'bell'}} />
                    <NavbarItem anchor='#' title='Messages' icon={{imageUrl: 'https://cdn-icons-png.flaticon.com/512/2089/2089181.png', altText: 'messages'}} />
                </div>

                <div className='navbar__container__center'>
                    <NavbarItem anchor='#' icon={{imageUrl: 'https://cdn-icons-png.flaticon.com/512/733/733579.png', altText: 'twitter'}} />
                </div>

                <div className='navbar__container__right'>

                    <input className='navbar__container__right__input' type='text' placeholder='Search Twitter' />

                    <button className='navbar__container__right__button'>
                        Tweet
                    </button>

                </div>

            </div>
        </section>
    )
}

export default Navbar;