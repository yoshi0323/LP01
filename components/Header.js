import React from 'react';

const Header = () => {
    return (
        <header style={headerStyle}>
            {/* 右上背景のSVG */}
            <svg xmlns="http://www.w3.org/2000/svg" width="1196" height="852" viewBox="0 0 1196 852" fill="none">
                <path opacity="0.3" d="M0 852C745.455 555.503 792.192 245.522 730.032 0H1196V852H0Z" fill="url(#paint0_linear_1206_2837)"/>
                <defs>
                    <linearGradient id="paint0_linear_1206_2837" x1="737.5" y1="347.5" x2="908.5" y2="905.5" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FFDA79"/>
                        <stop offset="1" stopColor="#F6F8FB" stopOpacity="0"/>
                    </linearGradient>
                </defs>
            </svg>

            {/* 左上背景のSVG */}
            <svg xmlns="http://www.w3.org/2000/svg" width="1439" height="854" viewBox="0 0 1439 854" fill="none" style={leftBackgroundStyle}>
                <path opacity="0.3" d="M0.00012207 -6.29007e-05C453.894 760.414 1063.14 808.089 1439 744.681L1439 853.5L-3.73077e-05 853.5L0.00012207 -6.29007e-05Z" fill="url(#paint0_linear_1206_2838)"/>
                <defs>
                    <linearGradient id="paint0_linear_1206_2838" x1="907.029" y1="752.299" x2="135.731" y2="1107.02" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FF4948"/>
                        <stop offset="1" stopColor="#F6F8FB" stopOpacity="0"/>
                    </linearGradient>
                </defs>
            </svg>

            {/* 丸形の背景 */}
            <div style={circleBackgroundStyle}></div>

            <div style={contentStyle}>
                <h1>Welcome to Our Landing Page</h1>
                <p>This is one of the essential human abilities.</p>
            </div>
            {/* 左上背景と右上背景、丸形背景の設定 */}
        </header>
    );
};

const headerStyle = {
    width: '1196px',
    height: '852px',
    flexShrink: 0,
    position: 'relative',
    overflow: 'hidden',
};

const leftBackgroundStyle = {
    width: '853.5px',
    height: '1439px',
    transform: 'rotate(90deg)',
    position: 'absolute',
    top: 0,
    left: 0,
};

const circleBackgroundStyle = {
    width: '761px',
    height: '454px',
    flexShrink: 0,
    borderRadius: '761px',
    opacity: 0.2,
    background: 'linear-gradient(90deg, #FF4747 0%, #FFE27B 100%)',
    filter: 'blur(40px)',
    position: 'absolute',
    top: '50%', // 中央に配置
    left: '50%', // 中央に配置
    transform: 'translate(-50%, -50%)', // 中央に配置
};

const contentStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#333',
    textAlign: 'center',
};

export default Header;
