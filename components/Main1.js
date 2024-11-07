/* C:\Users\user\LPws\lpws\components\Main1.js */
import React from 'react';
import './Main1.css';
import Image from 'next/image';

const Main1 = () => {
    return (
        <div className="main1-container">
            <div className="menu-text">Menu</div>
            <div className="menu-description">適切なメニューをお選びいただけます。</div>
            <div className="plan-container">
                <div className="plan-title">Plan</div>
                <div className="plan-letter">A</div>
                <div className="price-yen">¥</div>
                <div className="price-amount">300,000</div>
                <div className="vector-6"></div>
                <div className="check-icon">
                    <Image 
                        src="/images/check.svg"
                        alt="check"
                        width={16}
                        height={16}
                        priority
                        className="check-image"
                    />
                </div>
                <div className="atext1">7日間動画2本まで</div>
            </div>
        </div>
    );
};

export default Main1;
