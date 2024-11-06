import React from 'react';
import Image from 'next/image';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            {/* AIテキストを最初に配置 */}
            <div className="large-ai-text">AI</div>
            <div className="essential-text">is one of the essential<br />human abilities</div>
            <div className="japanese-text">を、使いこなす人になる。</div>
            <div className="description-text">
                AIbilityは、学生や社会人、先生向けに、わかりやすくて便利な学びの場を提供します。<br />
                一人ひとりに合った学習内容を見つけ出し、効率よく学べるようにサポート。<br />
                新しいスキル取得を狙うみなさまの成長を応援します。
            </div>

            {/* メニューバーのグラデーション */}
            <div className="menu-gradient"></div>

            {/* 左上背景のSVG */}
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="left-background"
                viewBox="0 0 1439 854" 
                fill="none"
            >
                <path 
                    opacity="0.3" 
                    d="M0.00012207 -6.29007e-05C453.894 760.414 1063.14 808.089 1439 744.681L1439 853.5L-3.73077e-05 853.5L0.00012207 -6.29007e-05Z" 
                    fill="url(#paint0_linear_1206_2838)"
                />
                <defs>
                    <linearGradient 
                        id="paint0_linear_1206_2838" 
                        x1="0" 
                        y1="0" 
                        x2="1439" 
                        y2="853.5" 
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="rotate(164.74)"
                    >
                        <stop offset="0.4794" stopColor="#FF4948"/>
                        <stop offset="0.9896" stopColor="#F6F8FB" stopOpacity="0"/>
                    </linearGradient>
                </defs>
            </svg>

            {/* 右上背景のSVG */}
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="right-background"
                viewBox="0 0 1196 852" 
                fill="none"
            >
                <path 
                    opacity="0.3" 
                    d="M0 852C745.455 555.503 792.192 245.522 730.032 0H1196V852H0Z" 
                    fill="url(#paint0_linear_1206_2837)"
                />
                <defs>
                    <linearGradient 
                        id="paint0_linear_1206_2837" 
                        x1="737.5" 
                        y1="347.5" 
                        x2="908.5" 
                        y2="905.5" 
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#FFDA79"/>
                        <stop offset="1" stopColor="#F6F8FB" stopOpacity="0"/>
                    </linearGradient>
                </defs>
            </svg>

            {/* ロゴ */}
            <div className="logo">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="35" 
                    height="46" 
                    viewBox="0 0 35 46" 
                    fill="none"
                >
                    <g clipPath="url(#clip0_1189_29)">
                        <path 
                            d="M31.8177 17.6232C33.0471 16.1425 33.8094 14.4675 34.0553 12.7441C34.0553 12.2586 33.6373 11.5061 32.9488 11.5061C32.9488 13.3995 32.2357 15.2443 30.8833 16.8707C28.7687 19.4195 25.3017 21.2401 21.3183 22.0169L17.7284 15.3414L25.8427 0.339842C25.2525 0.0242744 24.5395 0.242744 24.2198 0.82533L17.6546 13.0111V0H16.4744V12.9868L9.90922 0.82533C9.58957 0.242744 8.8765 0.0242744 8.28637 0.339842L16.376 15.3657L12.7861 22.0412C8.80273 21.2644 5.33573 19.4438 3.22111 16.895L2.28674 17.6475C4.49972 20.3177 8.08966 22.2596 12.196 23.1335L0 45.7815C0.590127 46.0971 1.3032 45.8786 1.62285 45.296L13.45 23.3277C14.4335 23.4734 15.4417 23.5704 16.4744 23.5947V46H17.6546V23.5947C18.6874 23.5704 19.6955 23.4734 20.679 23.3277L32.5062 45.296C32.8258 45.8786 33.5389 46.0971 34.129 45.7815L21.9085 23.1092C26.0148 22.2354 29.6047 20.2934 31.7931 17.6232H31.8177ZM14.0401 22.2354L16.4744 17.7203V22.4296C15.663 22.4296 14.8515 22.3325 14.0401 22.2354ZM17.6546 22.4296V17.7203L20.0889 22.2354C19.3021 22.3325 18.4907 22.4053 17.6546 22.4296Z" 
                            fill="url(#paint0_linear_1189_29)"
                        />
                    </g>
                    <defs>
                        <linearGradient 
                            id="paint0_linear_1189_29" 
                            x1="17.0645" 
                            y1="0" 
                            x2="17.0645" 
                            y2="46" 
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#FFE17B"/>
                            <stop offset="1" stopColor="#FF4948"/>
                        </linearGradient>
                        <clipPath id="clip0_1189_29">
                            <rect width="35" height="46" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            </div>

            {/* コンテンツ */}
            <div className="content">
                <h1 className="banner-text">AIbility</h1>
            </div>

            {/* メニューボックス */}
            <div className="menu-container">
                <div className="menu-items">
                    <div className="menu-item">TOP</div>
                    <div className="menu-item">About</div>
                    <div className="menu-item">Flow</div>
                    <div className="menu-item">FAQ</div>
                    <div className="menu-item">Review</div>
                </div>
                <div className="contact-button">
                    <span className="contact-text">Contact</span>
                </div>
            </div>

            {/* ヘッダーバーを追加 */}
            <div className="header-bar"></div>

            {/* 既存の画像 */}
            <Image 
                src="/images/wes-hicks-4-EeTnaC1S4-unsplash.png"
                alt="Description"
                width={534}
                height={287}
                className="image"
            />

            {/* 2つ目の画像を追加 */}
            <Image 
                src="/images/30556645.png"
                alt="Description"
                width={590}
                height={288}
                className="image-2"
            />

            {/* 既存のcircle-backgroundはそのままに、新しい右丸要素を追加 */}
            <div className="circle-background"></div>
            <div className="right-circle-gradient"></div>
        </header>
    );
};

export default Header;
