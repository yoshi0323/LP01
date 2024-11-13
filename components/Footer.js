"use client";

import React, { useState } from 'react';
import './Footer.css';
import Image from 'next/image';

const Footer = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const reviews = [
        { name: "Name 1", number: "0001", text: "ユーザーボイスが入ります。" },
        { name: "Name 2", number: "0002", text: "ユーザーボイスが入ります。" },
        { name: "Name 3", number: "0003", text: "ユーザーボイスが入ります。" },
    ];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
    };

    return (
        <div className="footer-container">
            <div id="review-section" className="review-text">Review</div>
            
            {/* 左側のレビューカード */}
            <div className="review-card left-card" style={{ opacity: 0.2 }}>
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
                <div className="reviewer-name">{reviews[(currentIndex - 1 + reviews.length) % reviews.length].name}</div>
                <div className="reviewer-number">{reviews[(currentIndex - 1 + reviews.length) % reviews.length].number}</div>
                <div className="reviewer-text">
                    {reviews[(currentIndex - 1 + reviews.length) % reviews.length].text}
                </div>
            </div>

            {/* 中央のレビューカード */}
            <div className="review-card center-card" style={{ opacity: 1 }}>
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
                <div className="reviewer-name">{reviews[currentIndex].name}</div>
                <div className="reviewer-number">{reviews[currentIndex].number}</div>
                <div className="reviewer-text">
                    {reviews[currentIndex].text}
                </div>
            </div>

            {/* 右側のレビューカード */}
            <div className="review-card right-card" style={{ opacity: 0.2 }}>
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
                <div className="reviewer-name">{reviews[(currentIndex + 1) % reviews.length].name}</div>
                <div className="reviewer-number">{reviews[(currentIndex + 1) % reviews.length].number}</div>
                <div className="reviewer-text">
                    {reviews[(currentIndex + 1) % reviews.length].text}
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
            }} onClick={handlePrev}>
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
            }} onClick={handleNext}>
                <Image
                    src="/images/Group 323.svg" // 右側のアイコンのパス
                    alt="Scroll Right"
                    width={60}
                    height={60}
                />
            </div>

            {/* 最下部コンテナ */}
            <div className="bottom-container">
                <Image
                    src="/images/a (2).svg" // SVGアイコンのパス
                    alt="アイコン"
                    width={35} // アイコンの幅
                    height={46} // アイコンの高さ
                    style={{
                        position: 'absolute',
                        top: '42px', // 上から42pxの位置
                        left: '53px' // 左から53pxの位置
                    }}
                />
                <div style={{
                    position: 'absolute',
                    top: '44px', // 上から44pxの位置
                    left: '105.42px', // 左から105.42pxの位置
                    color: '#FFF',
                    fontFamily: 'Abel',
                    fontSize: '35.613px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: 'normal'
                }}>
                    AIbility
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none" style={{
                    position: 'absolute',
                    top: '168px', // 上から168pxの位置
                    left: '53px', // 左から53pxの位置
                    flexShrink: 0
                }}>
                    <circle cx="3.5" cy="3.5" r="3.5" fill="#FFF"/> {/* fillを白に設定 */}
                </svg>
                <div style={{
                    position: 'absolute',
                    top: '162px', // 上から162pxの位置
                    left: '73px', // 左から73pxの位置
                    color: '#FFF',
                    fontFamily: 'Damion', // フォントファミリーをDamionに設定
                    fontSize: '14px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: 'normal'
                }}>
                    プライバシーポリシー
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none" style={{
                    position: 'absolute',
                    top: '168px', // 上から168pxの位置
                    left: '253px', // 左から253pxの位置
                    flexShrink: 0
                }}>
                    <circle cx="3.5" cy="3.5" r="3.5" fill="#FFF"/> {/* fillを白に設定 */}
                </svg>
                <div style={{
                    position: 'absolute',
                    top: '162px', // 上から162pxの位置
                    left: '273px', // 左から273pxの位置
                    color: '#FFF',
                    fontFamily: 'Damion', // フォントファミリーをDamionに設定
                    fontSize: '14px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: 'normal'
                }}>
                    利用規約
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none" style={{
                    position: 'absolute',
                    top: '168px', // 上から168pxの位置
                    left: '369px', // 左から369pxの位置
                    flexShrink: 0
                }}>
                    <circle cx="3.5" cy="3.5" r="3.5" fill="#FFF"/> {/* fillを白に設定 */}
                </svg>
                <div style={{
                    position: 'absolute',
                    top: '162px', // 上から162pxの位置
                    left: '389px', // 左から389pxの位置
                    color: '#FFF',
                    fontFamily: 'Damion', // フォントファミリーをDamionに設定
                    fontSize: '14px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: 'normal'
                }}>
                    運用会社
                </div>
            </div>
        </div>
    );
};

export default Footer;
