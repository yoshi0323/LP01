import React from 'react';
import './Footer.css';
import Image from 'next/image';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="review-text">Review</div>
            
            {/* 左側のレビューカード */}
            <div className="review-card left-card">
                <div className="profile-image-container">
                    <Image
                        src="/images/Ellipse 15.svg"
                        width={64}
                        height={64}
                        alt="Profile background"
                        className="profile-background"
                    />
                    <Image
                        src="/images/person_24dp_E8EAED_FILL0_wght100_GRAD0_opsz24 1.svg"
                        width={36}
                        height={36}
                        alt="Profile icon"
                        className="profile-icon"
                    />
                </div>
                <div className="reviewer-name">Name Name</div>
                <div className="reviewer-number">0000</div>
                <div className="reviewer-text">
                    ユーザーボイスが入ります。ユーザーボイスが入ります。ユーザーボイスが入ります。ユーザーボイスが入ります。ユーザーボイスが入ります。ユーザーボイスが入ります。
                </div>
            </div>
            
            {/* 中央のレビューカード */}
            <div className="review-card center-card">
                <div className="profile-image-container">
                    <Image
                        src="/images/Ellipse 15.svg"
                        width={64}
                        height={64}
                        alt="Profile background"
                        className="profile-background"
                    />
                    <Image
                        src="/images/person_24dp_E8EAED_FILL0_wght100_GRAD0_opsz24 1.svg"
                        width={36}
                        height={36}
                        alt="Profile icon"
                        className="profile-icon"
                    />
                </div>
                <div className="reviewer-name">Name Name</div>
                <div className="reviewer-number">0000</div>
                <div className="reviewer-text">
                    ユーザーボイスが入ります。ユーザーボイスが入ります。ユーザーボイスが入ります。ユーザーボイスが入ります。ユーザーボイスが入ります。ユーザーボイスが入ります。
                </div>
            </div>

            {/* 右側のレビューカード */}
            <div className="review-card right-card">
                <div className="profile-image-container">
                    <Image
                        src="/images/Ellipse 15.svg"
                        width={64}
                        height={64}
                        alt="Profile background"
                        className="profile-background"
                    />
                    <Image
                        src="/images/person_24dp_E8EAED_FILL0_wght100_GRAD0_opsz24 1.svg"
                        width={36}
                        height={36}
                        alt="Profile icon"
                        className="profile-icon"
                    />
                </div>
                <div className="reviewer-name">Name Name</div>
                <div className="reviewer-number">0000</div>
                <div className="reviewer-text">
                    ユーザーボイスが入ります。ユーザーボイスが入ります。ユーザーボイスが入ります。ユーザーボイスが入ります。ユーザーボイスが入ります。ユーザーボイスが入ります。
                </div>
            </div>

            {/* 最下部コンテナ */}
            <div className="bottom-container"></div>
        </div>
    );
};

export default Footer;
