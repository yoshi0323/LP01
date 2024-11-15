import React from 'react';
import './Main.css';

// グラデーションライン用のコンポーネント
const GradientLine = ({ planId }) => (
    <svg 
        className="gradient-line"
        xmlns="http://www.w3.org/2000/svg" 
        width="271" 
        height="2" 
        viewBox="0 0 271 2" 
        fill="none"
    >
        <path d="M0 1H271" stroke={`url(#paint0_linear_${planId})`}/>
        <defs>
            <linearGradient 
                id={`paint0_linear_${planId}`}
                x1="0" 
                y1="1.5" 
                x2="271" 
                y2="1.5" 
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#FF4747"/>
                <stop offset="1" stopColor="#FFE27B"/>
            </linearGradient>
        </defs>
    </svg>
);

const Main = () => {
    // 文字を1文字ずつ分割してspanで囲む関数
    const splitText = (text, baseDelay, isMain = true) => {
        return text.split('').map((char, index) => (
            <span 
                key={index} 
                className={`char-animate ${isMain ? 'flow-item' : 'flow-item-sub'}`}
                style={{ 
                    animationDelay: `${baseDelay + (index * 0.1)}s`
                }}
            >
                {char}
            </span>
        ));
    };

    return (
        <div className="main-container">
            <svg 
                className="curved-background"
                width="1440" 
                height="954" 
                viewBox="0 0 1440 954" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <g filter="url(#filter0_d_1207_2896)">
                    <path 
                        d="M1440 28.0001C1218 817.5 506 936.5 3.18928e-05 757.622L5.22663e-05 918L1440 918L1440 28.0001Z" 
                        fill="url(#paint0_linear_1207_2896)" 
                        shapeRendering="crispEdges"
                    />
                </g>
                <defs>
                    <filter 
                        id="filter0_d_1207_2896" 
                        x="-42" 
                        y="6.10352e-05" 
                        width="1504" 
                        height="954" 
                        filterUnits="userSpaceOnUse" 
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix 
                            in="SourceAlpha" 
                            type="matrix" 
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" 
                            result="hardAlpha"
                        />
                        <feOffset dx="-10" dy="4"/>
                        <feGaussianBlur stdDeviation="16"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix 
                            type="matrix" 
                            values="0 0 0 0 0.992157 0 0 0 0 0.537255 0 0 0 0 0.458824 0 0 0 0.36 0"
                        />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1207_2896"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1207_2896" result="shape"/>
                    </filter>
                    <linearGradient 
                        id="paint0_linear_1207_2896" 
                        x1="1119.28" 
                        y1="501.734" 
                        x2="1270.73" 
                        y2="973.375" 
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#FE7A6E"/>
                        <stop offset="1" stopColor="#FFD677" stopOpacity="0"/>
                    </linearGradient>
                </defs>
            </svg>
            <div className="text-item">
                {splitText('Flow', 0)}
            </div>
            <div className="letter-circle"></div>
            <div className="email-icon"></div>
            <div className="line"></div>
            <div className="contact-text">
                {splitText('Contact', 1)}
            </div>
            <div className="contact-subtext">
                {splitText('本ページから、お問い合わせください', 1, false)}
            </div>
            <div className="movie-circle"></div>
            <div className="movie-icon"></div>
            <div className="line2"></div>
            <div className="movie-text">
                {splitText('Movie', 2)}
            </div>
            <div className="movie-subtext">
                {splitText('動画視聴ページへのリンクが確認可能です', 2, false)}
            </div>
            <div className="consultant-circle"></div>
            <div className="consultant-icon"></div>
            <div className="line3"></div>
            <div className="consultant-text">
                {splitText('Consultant', 3)}
            </div>
            <div className="consultant-subtext">
                {splitText('コンサルティングの日程を調整します', 3, false)}
            </div>
            <div className="group-circle"></div>
            <div className="group-icon"></div>
            <div className="group-text">
                {splitText('Group', 4)}
            </div>
            <div className="group-subtext">
                {splitText('AIを自分のスキルにするメンバーのグループへ招待します', 4, false)}
            </div>
            <div className="plans-wrapper">
                {/* Plan A */}
                <div className="plan-container">
                    <div className="plan-title">Plan</div>
                    <div className="plan-letter">A</div>
                    <div className="price-yen">¥</div>
                    <div className="price-amount">300,000</div>
                    <hr className="gradient-line" />
                    
                    <div className="check-icon">
                        <img alt="check" width="16" height="16" decoding="async" data-nimg="1" className="check-image" style={{color: 'transparent'}} src="/images/check.svg" />
                    </div>
                    <div className="atext1">7日間動画2本まで</div>
                    
                    <div className="check-icon2">
                        <img alt="check" width="16" height="16" decoding="async" data-nimg="1" className="check-image" style={{color: 'transparent'}} src="/images/check.svg" />
                    </div>
                    <div className="atext2">AIエキスパートのコンサル</div>
                    
                    <div className="check-icon3">
                        <img alt="check" width="16" height="16" decoding="async" data-nimg="1" className="check-image" style={{color: 'transparent'}} src="/images/check.svg" />
                    </div>
                    <div className="atext3">動画閲覧無制限</div>
                    
                    <div className="check-icon4">
                        <img alt="check" width="16" height="16" decoding="async" data-nimg="1" className="check-image" style={{color: 'transparent'}} src="/images/check.svg" />
                    </div>
                    <div className="atext4">コミュニティ参加して質問可能</div>
                </div>

                {/* Plan B */}
                <div className="plan-container">
                    <div className="plan-title">Plan</div>
                    <div className="plan-letter">B</div>
                    <div className="price-yen">¥</div>
                    <div className="price-amount">100,000</div>
                    
                    <svg 
                        className="gradient-line"
                        xmlns="http://www.w3.org/2000/svg" 
                        width="271" 
                        height="2" 
                        viewBox="0 0 271 2" 
                        fill="none"
                        style={{
                            position: 'absolute',
                            top: '302px',
                            left: '29px',
                            zIndex: 9999
                        }}
                    >
                        <path 
                            d="M0 1H271" 
                            stroke="url(#paint0_linear_B)"
                        />
                        <defs>
                            <linearGradient 
                                id="paint0_linear_B" 
                                x1="0" 
                                y1="1.5" 
                                x2="271" 
                                y2="1.5" 
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#FF4747"/>
                                <stop offset="1" stopColor="#FFE27B"/>
                            </linearGradient>
                        </defs>
                    </svg>
                    
                    <div className="check-icon">
                        <img alt="check" width="16" height="16" decoding="async" data-nimg="1" className="check-image" style={{color: 'transparent'}} src="/images/check.svg" />
                    </div>
                    <div className="atext1">7日間動画2本まで</div>
                    
                    <div className="check-icon2">
                        <img alt="check" width="16" height="16" decoding="async" data-nimg="1" className="check-image" style={{color: 'transparent'}} src="/images/check.svg" />
                    </div>
                    <div className="atext2">AIエキスパートのコンサル</div>
                    
                    <div className="check-icon3">
                        <img alt="check" width="16" height="16" decoding="async" data-nimg="1" className="check-image" style={{color: 'transparent'}} src="/images/check.svg" />
                    </div>
                    <div className="atext3">動画閲覧無制限</div>
                    
                    <div className="check-icon4">
                        <img alt="check" width="16" height="16" decoding="async" data-nimg="1" className="check-image" style={{color: 'transparent'}} src="/images/check.svg" />
                    </div>
                    <div className="atext4">コミュニティ参加して質問可能</div>
                </div>

                {/* Plan C */}
                <div className="plan-container">
                    <div className="plan-title">Plan</div>
                    <div className="plan-letter">C</div>
                    <div className="price-yen">¥</div>
                    <div className="price-amount">50,000</div>
                    <hr className="gradient-line" />
                    
                    <svg 
                        className="gradient-line"
                        xmlns="http://www.w3.org/2000/svg" 
                        width="271" 
                        height="2" 
                        viewBox="0 0 271 2" 
                        fill="none"
                        style={{
                            position: 'absolute',
                            top: '302px',
                            left: '29px',
                            zIndex: 9999
                        }}
                    >
                        <path 
                            d="M0 1H271" 
                            stroke="url(#paint0_linear_C)"
                        />
                        <defs>
                            <linearGradient 
                                id="paint0_linear_C" 
                                x1="0" 
                                y1="1.5" 
                                x2="271" 
                                y2="1.5" 
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#FF4747"/>
                                <stop offset="1" stopColor="#FFE27B"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Main;
