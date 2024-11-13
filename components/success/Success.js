import React from 'react';
import './success.css';
import Image from 'next/image';
import { useRouter } from 'next/router';

function Success({ isVisible, onClose }) {
    const router = useRouter();

    if (!isVisible) return null;

    const handleGoToTop = () => {
        router.push('http://localhost:3000/');
    };

    return (
        <div className="success-popup">
            <div className="success-content">
                <div className="icon-container">
                    <Image 
                        src="/images/Ellipse 17.svg" 
                        alt="Success Icon" 
                        width={153} 
                        height={153} 
                    />
                    <div className="checkmark-container">
                        <Image 
                            src="/images/Vector 18.svg" 
                            alt="Checkmark Icon" 
                            width={64} 
                            height={44} 
                        />
                    </div>
                </div>
                <h2 className="success-title">Success</h2>
                <p className="waiting-message">返信が来るまでお待ちください</p>
                <button className="top-button" onClick={handleGoToTop}>
                    <span>TOPへもどる</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                        <rect width="38" height="38" rx="8" fill="url(#paint0_linear_1236_5129)"/>
                        <path d="M9 19H29" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M23 13L29 19L23 25" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <defs>
                            <linearGradient id="paint0_linear_1236_5129" x1="3" y1="2" x2="35" y2="35.5" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FF4747"/>
                                <stop offset="1" stop-color="#FFE27B"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default Success;
