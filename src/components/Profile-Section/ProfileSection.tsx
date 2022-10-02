import React from 'react';
import { ImageBlockInterface } from '../NavbarItem/NavbarItem';
import './profileSection.scss';

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

                <div className='profile-section__container__background-container'>
                    <img className='profile-section__container__background-container__image' src={background.imageUrl} alt={background.altText} />
                </div>

                <div className='profile-section__container__pfp-container'>
                    <img className='profile-section__container__pfp-container__image' src={profilePicture.imageUrl} alt={profilePicture.altText} />
                </div>

                <div className='profile-section__container__statistics'>

                    <div className='profile-section__container__statistics__tweets'>
                        <div className='profile-section__container__statistics__tweets__subheader'>
                            Tweets:
                        </div>

                        <div className='profile-section__container__statistics__tweets__value'>
                            {tweets}
                        </div>
                    </div>

                    <div className='profile-section__container__statistics__following'>
                        
                        <div className='profile-section__container__statistics__following__subheader'>
                            Following:
                        </div>

                        <div className='profile-section__container__statistics__following__value'>
                            {following}
                        </div>
                    </div>

                    <div className='profile-section__container__statistics__followers'>
                        
                        <div className='profile-section__container__statistics__followers__subheader'>
                            Followers:
                        </div>

                        <div className='profile-section__container__statistics__followers__value'>
                            {followers}
                        </div>
                    </div>

                </div> 

            </div>
        </section>
    )
}

export default ProfileSection;