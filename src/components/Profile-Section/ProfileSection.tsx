import React from 'react';
import { ImageBlockInterface } from '../NavbarItem/NavbarItem';

export interface ProfileSectionInterface {
    background: ImageBlockInterface;
    profilePicture: ImageBlockInterface;
    name: string;
    handle?: string;
    tweets: number;
    following: number;
    followers: number;
}

const ProfileSection = ({
    background,
    profilePicture,
    name,
    handle,
    tweets,
    following,
    followers
}: ProfileSectionInterface) => {

    return (
        <section className='profile-section'>
            <div className='profile-section__container'>

                <div className='profile-section__container__background__container'>
                    <img className='profile-section__container__background__container__image' src={background.imageUrl} alt={background.altText} />
                </div>

                <div className='profile-section__container__pfp__container'>
                    <img className='profile-section__container__pfp__container__image' src={profilePicture.imageUrl} alt={profilePicture.altText} />
                </div>

            </div>
        </section>
    )
}

export default ProfileSection;