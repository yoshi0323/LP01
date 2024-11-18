/* C:\Users\user\LPws\lpws\components\Main1.js */
import React, { useState } from 'react';
import './Main1.css';
import Image from 'next/image';
import Footer from './Footer';

const Main1 = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const [openIndex, setOpenIndex] = useState(null);

    const atex5 = () => {
        return "AIエキスパートのコンサル";
    };

    // QAデータの配列
    const qaData = [
        {
            question: "返金は可能か",
            answer: "3ヶ月以内であれば可能です。質問に対しての回答を入れます"
        },
        {
            question: "返金は可能か",
            answer: "3ヶ月以内であれば可能です。質問に対しての回答を入れます"
        },
        {
            question: "返金は可能か",
            answer: "3ヶ月以内であれば可能です。質問に対しての回答を入れます"
        },
        {
            question: "返金は可能か",
            answer: "3ヶ月以内であれば可能です。質問に対しての回答を入れます"
        }
    ];

    // モーダルを開く関数
    const openModal = (index) => {
        setSelectedQuestion(qaData[index]);
        setIsModalOpen(true);
    };

    // モーダルを閉じる関数
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedQuestion(null);
    };

    // アコーディオンの開閉を制御する関数
    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
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

                {/* 4つ目のア���テム */}
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
                <div id="qa-section" className="qa-text">QA</div>
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
                    {qaData.map((item, index) => (
                        <div key={index} className={`qa-item-wrapper ${openIndex === index ? 'open' : ''}`}>
                            <div className="qa-item">
                                <div className="qa-q-label">Q</div>
                                <div className="qa-question-text">{item.question}</div>
                                <button 
                                    onClick={() => toggleAccordion(index)}
                                    className="qa-expand-button"
                                >
                                    <svg 
                                        width="38" 
                                        height="38" 
                                        viewBox="0 0 38 38" 
                                        fill="none" 
                                        xmlns="http://www.w3.org/2000/svg"
                                        style={{ transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }}
                                    >
                                        <rect width="38" height="38" rx="8" fill="white"/>
                                        <path 
                                            d="M19 9L19 29" 
                                            stroke="#FF6552" 
                                            strokeWidth="1.5" 
                                            strokeLinecap="round"
                                        />
                                        <path 
                                            d="M13 23L19 29L25 23" 
                                            stroke="#FF6552" 
                                            strokeWidth="1.5" 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>
                            </div>
                            {openIndex === index && (
                                <div className="qa-answer">
                                    <div className="qa-a-label">A</div>
                                    <div className="qa-answer-text">{item.answer}</div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* モーダルコンポーネント */}
            {isModalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <div className="modal-q-label">Q</div>
                            <div className="modal-question">{selectedQuestion?.question}</div>
                            <button 
                                className="qa-expand-button modal-close" 
                                onClick={closeModal}
                            >
                                <svg 
                                    width="38" 
                                    height="38" 
                                    viewBox="0 0 38 38" 
                                    fill="none" 
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect width="38" height="38" rx="8" fill="white"/>
                                    <path 
                                        d="M19 29L19 9" 
                                        stroke="#FF6552" 
                                        strokeWidth="1.5" 
                                        strokeLinecap="round"
                                    />
                                    <path 
                                        d="M13 15L19 9L25 15" 
                                        stroke="#FF6552" 
                                        strokeWidth="1.5" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="modal-a-label">A</div>
                            <div className="modal-answer">{selectedQuestion?.answer}</div>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default Main1;
