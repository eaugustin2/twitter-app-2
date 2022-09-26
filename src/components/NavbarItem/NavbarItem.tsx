import React from 'react';

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
}) => {

    return (
        <section className='navbar-item'>
            <div className='navbar-item__container'>

                <div>
                    <img src={icon?.imageUrl} alt={icon?.altText} />
                </div>

            </div>
        </section>
    )
}