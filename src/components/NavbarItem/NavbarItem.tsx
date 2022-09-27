import React from 'react';
import './navbarItem.scss';

interface ImageBlockInterface {
    imageUrl: string;
    altText: string;
}

interface NavbarItemInterface {
    anchor: string;
    icon?: ImageBlockInterface;
    title?: string
}

const NavbarItem = ({
    anchor,
    icon,
    title
}: NavbarItemInterface) => {

    return (
        <section className='navbar-item'>
            <div className='navbar-item__container'>

                <a href={anchor} className='navbar-item__container__link'>
                    
                    { icon?.imageUrl && (
                        <div className='navbar-item__container__link__icon-container'>
                            <img className='navbar-item__container__link__icon-container__icon' src={icon?.imageUrl} alt={icon?.altText} />
                        </div>
                    )}

                    {title && (
                        <div className='navbar-item__container__link__title'>
                            {title}
                        </div>
                    )}
                </a>

            </div>
        </section>
    )
}

export default NavbarItem;