/* C:\Users\user\LPws\lpws\components\Main1.js */
import React from 'react';
import './Main1.css';
import Image from 'next/image';
import Footer from './Footer';

const Main1 = () => {
    const atex5 = () => {
        return "AIエキスパートのコンサル";
    };

    return (
        <div className="main1-container">
            {/* グラデーション背景の半円 */}
            <div className="gradient-background">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="1440" 
                    height="812" 
                    viewBox="0 0 1440 812" 
                    fill="none"
                    style={{
                        position: 'absolute',
                        top: '2821px',
                        left: '0',
                        zIndex: '-1'
                    }}
                >
                    <g opacity="0.3" filter="url(#filter0_d_1207_2881)">
                        <path 
                            d="M0 744C0 -94.6157 1440 -134.486 1440 744C1440 744 719.342 744 398.684 744L0 744Z" 
                            fill="url(#paint0_linear_1207_2881)" 
                            shapeRendering="geometricPrecision"
                        />
                    </g>
                    <defs>
                        <filter 
                            id="filter0_d_1207_2881" 
                            x="-104" 
                            y="0" 
                            width="1608" 
                            height="812" 
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
                            <feOffset dx="-20" dy="-16"/>
                            <feGaussianBlur stdDeviation="42"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix 
                                type="matrix" 
                                values="0 0 0 0 0.965486 0 0 0 0 0.727181 0 0 0 0 0.447433 0 0 0 1 0"
                            />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1207_2881"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1207_2881" result="shape"/>
                        </filter>
                        <linearGradient 
                            id="paint0_linear_1207_2881" 
                            x1="720" 
                            y1="0" 
                            x2="720" 
                            y2="744" 
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0" stopColor="#FFDA79"/>
                            <stop offset="1" stopColor="#F6F8FB" stopOpacity="0"/>
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div className="menu-text">Menu</div>
            <div className="menu-description">適切なメニューをお選びいただけます。</div>
            
            {/* Plan A - 既存のコンテナ */}
            <div className="plan-container">
                <div className="plan-gradient-overlay" />
                <div className="plan-title">Plan</div>
                <div className="plan-letter" style={{ background: 'linear-gradient(90deg, #FF4747 0%, #FFE27B 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>A</div>
                <div className="price-yen">¥</div>
                <div className="price-amount">300,000</div>
                
                {/* 既存のグラデーションライン */}
                <div className="custom-gradient-line" />
                
                {/* 追加のグラデーションラインを追加 */}
                <div className="additional-gradient-line" />
                
                {/* さらに新しいグラデーションラインを追加 */}
                <div className="extra-gradient-line" />
                
                {/* 1つ目のアイテム */}
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
                <div className="gradient-line" />
                <div className="vector-7"></div>

                {/* 2つ目のアイテム */}
                <div className="check-icon2">
                    <Image 
                        src="/images/check.svg"
                        alt="check"
                        width={16}
                        height={16}
                        priority
                        className="check-image"
                    />
                </div>
                <div className="atext2">{atex5()}</div>
                <div className="gradient-line" />
                <div className="vector-8"></div>

                {/* 3つ目のアイテム */}
                <div className="check-icon3">
                    <Image 
                        src="/images/check.svg"
                        alt="check"
                        width={16}
                        height={16}
                        priority
                        className="check-image"
                    />
                </div>
                <div className="atext3">動画閲覧無制限</div>
                <div className="gradient-line" />
                <div className="vector-9"></div>

                {/* 4つ目のアイテム */}
                <div className="check-icon4">
                    <Image 
                        src="/images/check.svg"
                        alt="check"
                        width={16}
                        height={16}
                        priority
                        className="check-image"
                    />
                </div>
                <div className="atext4">コミュニティ参加して質問可能</div>
                <div className="vector-10"></div>
            </div>

            {/* Plan B */}
            <div className="plan-container-b">
                <div className="plan-gradient-overlay" />
                <div className="plan-title">Plan</div>
                <div className="plan-letter">B</div>
                <div className="price-yen">¥</div>
                <div className="price-amount">100,000</div>
                <div className="vector-6"></div>
                
                {/* Plan B の金額の下にグラデーションラインを追加 */}
                <div className="gradient-line" style={{ top: '302px', left: '29px' }} /> {/* 位置を調整 */}

                {/* Bプランのチェックアイテム */}
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
                <div className="atext1">{atex5()}</div>
                <div className="vector-7"></div>
            </div>

            {/* Plan C */}
            <div className="plan-container-c">
                <div className="plan-gradient-overlay" />
                <div className="plan-title">Plan</div>
                <div className="plan-letter">C</div>
                <div className="price-yen">¥</div>
                <div className="price-amount">100,000</div>
                <div className="vector-6"></div>
                
                {/* Plan C の金額の下にグラデーションラインを追加 */}
                <div className="gradient-line" style={{ top: '302px', left: '29px' }} /> {/* 位置を調整 */}

                {/* Cプランのチェックアイテム */}
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
                <div className="atext1">コミュニティ参加して質問可能</div>
                <div className="vector-7"></div>
            </div>

            {/* Get NEW Abilityテキスト */}
            <div className="get-ability-text">Get NEW Ability</div>
            <div className="get-ability-text1">まずはお気軽に問い合わせください</div>
            
            {/* 入力フィードとそのキスト、送信ボタン */}
            <div className="input-field">
                <div className="input-text">Contact</div>
                <div className="submit-button">
                    <Image 
                        src="/images/Group 311.svg"
                        alt="submit"
                        width={38}
                        height={38}
                        priority
                        className="submit-icon"
                    />
                </div>
            </div>

            {/* QA背景セクション */}
            <div className="qa-background">
                <div className="qa-text">QA</div>
                <Image 
                    src="/images/flatlay-5115827_1280 1.png"
                    alt="QA section image"
                    width={371}
                    height={589}
                    priority
                    className="qa-image"
                    style={{ objectFit: 'cover' }}
                />
                {/* QA コンテンツ用のFrame */}
                <div className="qa-content-frame">
                    {/* 1つ目のンナ */}
                    <div className="qa-item" style={{ position: 'relative' }}>
                        {/* Q1テキスト */}
                        <div className="qa-q-label">Q</div>
                        
                        {/* 縦線 - 仕様に合わせて修正 */}
                        <div 
                            style={{
                                width: '0px',
                                height: '61px',
                                position: 'absolute',
                                top: '0px',
                                left: '79px',
                                opacity: '1',
                                display: 'block',
                                margin: '0',
                                flexShrink: '0',
                                borderLeft: '1.5px solid #FFFFFF'
                            }} 
                        />
                        
                        {/* 質問テキスト */}
                        <div className="qa-question-text">返金は可能か</div>

                        {/* 下向きアイコンを追加 */}
                        <Image 
                            src="/images/Group 311 (2).svg"
                            alt="expand"
                            width={38}
                            height={38}
                            priority
                            style={{
                                position: 'absolute',
                                top: '14px',
                                right: '14px'
                            }}
                        />
                    </div>

                    {/* 2つ目のコンテナ */}
                    <div className="qa-item" style={{ 
                        width: '726px',
                        height: '183px',
                        position: 'relative',
                        top: '16px',
                        gap: '0px',
                        borderRadius: '12px',
                        border: '1.5px solid #FFFFFF',
                        opacity: '1',
                        background: 'transparent',
                        marginBottom: '16px'
                    }}>
                        {/* Q テキスト */}
                        <div className="qa-q-label">Q</div>
                        
                        {/* 縦線 */}
                        <div 
                            style={{
                                width: '0px',
                                height: '63px',
                                position: 'absolute',
                                top: '0px',
                                left: '79px',
                                opacity: '1',
                                display: 'block',
                                margin: '0',
                                flexShrink: '0',
                                borderLeft: '1.5px solid #FFFFFF'
                            }} 
                        />

                        {/* 横線 */}
                        <div 
                            style={{
                                width: '726px',
                                height: '0px',
                                position: 'absolute',
                                top: '63px',
                                left: '0px',
                                opacity: '1',
                                borderTop: '1.5px solid #FFFFFF'
                            }} 
                        />
                        
                        {/* 質問テキスト */}
                        <div className="qa-question-text">返金は可能か</div>

                        {/* A テキスト - 正確なタイポグラフィーで修正 */}
                        <div style={{
                            position: 'absolute',
                            width: '16px',
                            height: '29px',
                            top: '89px',
                            left: '32px',
                            color: '#FFF',
                            fontFamily: '"Noto Sans JP"',
                            fontSize: '20px',
                            fontStyle: 'normal',
                            fontWeight: 700,
                            lineHeight: 'normal',
                            letterSpacing: '2px'
                        }}>A</div>

                        {/* 回答テキスト */}
                        <div style={{
                            width: '500px',
                            height: '56px',
                            position: 'absolute',
                            top: '89px',
                            left: '111px',
                            gap: '0px',
                            opacity: '1',
                            fontFamily: 'Noto Sans JP',
                            fontSize: '20px',
                            fontWeight: '700',
                            lineHeight: '28px',
                            letterSpacing: '0.1em',
                            textAlign: 'left',
                            textUnderlinePosition: 'from-font',
                            textDecorationSkipInk: 'none',
                            color: '#FFFFFF'
                        }}>3ヶ月以内でれば可能で。<br/>質問に対しての回答を入れます</div>

                        {/* 上向きアイコン */}
                        <Image 
                            src="/images/Group 311 (3).svg"
                            alt="expand"
                            width={38}
                            height={38}
                            priority
                            style={{
                                position: 'absolute',
                                top: '14px',
                                right: '14px'
                            }}
                        />
                    </div>

                    {/* 3つ目のコンテナ */}
                    <div className="qa-item" style={{ position: 'relative' }}>
                        {/* Q3テキスト */}
                        <div className="qa-q-label">Q</div>
                        
                        {/* 縦線 */}
                        <div 
                            style={{
                                width: '0px',
                                height: '61px',
                                position: 'absolute',
                                top: '0px',
                                left: '79px',
                                opacity: '1',
                                display: 'block',
                                margin: '0',
                                flexShrink: '0',
                                borderLeft: '1.5px solid #FFFFFF'
                            }} 
                        />
                        
                        {/* 質問テキスト */}
                        <div className="qa-question-text">返金は可能か</div>

                        {/* 下向きアイコン */}
                        <Image 
                            src="/images/Group 311 (2).svg"
                            alt="expand"
                            width={38}
                            height={38}
                            priority
                            style={{
                                position: 'absolute',
                                top: '14px',
                                right: '14px'
                            }}
                        />
                    </div>

                    {/* 4つ目のコンテナ */}
                    <div className="qa-item" style={{ position: 'relative' }}>
                        {/* Q4テキスト */}
                        <div className="qa-q-label">Q</div>
                        
                        {/* 縦線 */}
                        <div 
                            style={{
                                width: '0px',
                                height: '61px',
                                position: 'absolute',
                                top: '0px',
                                left: '79px',
                                opacity: '1',
                                display: 'block',
                                margin: '0',
                                flexShrink: '0',
                                borderLeft: '1.5px solid #FFFFFF'
                            }} 
                        />
                        
                        {/* 質問テキスト */}
                        <div className="qa-question-text">返金は可能か</div>

                        {/* 下向きアイコン */}
                        <Image 
                            src="/images/Group 311 (2).svg"
                            alt="expand"
                            width={38}
                            height={38}
                            priority
                            style={{
                                position: 'absolute',
                                top: '14px',
                                right: '14px'
                            }}
                        />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Main1;
