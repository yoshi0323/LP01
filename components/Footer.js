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

            {/* 左側のスクロールボタン */}
            <div style={{
                width: '60px',
                height: '60px',
                flexShrink: 0,
                position: 'absolute',
                left: '457px', // 左から457pxの位置
                top: '4361px', // 上から4361pxの位置
                cursor: 'pointer'
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <circle cx="30" cy="30" r="30" transform="rotate(-180 30 30)" fill="url(#paint0_linear_1236_5154)"/>
                    <path d="M35 43L22 30L35 17" stroke="white" strokeWidth="2"/>
                    <defs>
                        <linearGradient id="paint0_linear_1236_5154" x1="1.90735e-06" y1="30" x2="60" y2="30" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FF4747"/>
                            <stop offset="1" stopColor="#FFE27B"/>
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* 右側のスクロールボタン */}
            <div style={{
                width: '60px',
                height: '60px',
                flexShrink: 0,
                position: 'absolute',
                right: '459px', // 右から459pxの位置
                top: '4361px', // 上から4361pxの位置
                cursor: 'pointer'
            }}>
                <Image
                    src="/images/Group 323.svg" // 右側のアイコンのパス
                    alt="Scroll Right"
                    width={60}
                    height={60}
                />
            </div>

            {/* 最下部コンテナ */}
            <div className="bottom-container"></div>
        </div>
    );
};

export default Footer;
