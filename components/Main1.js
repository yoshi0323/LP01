/* C:\Users\user\LPws\lpws\components\Main1.js */
import React from 'react';
import './Main1.css';
import Image from 'next/image';

const Main1 = () => {
    return (
        <div className="main1-container">
            <div className="menu-text">Menu</div>
            <div className="menu-description">適切なメニューをお選びいただけます。</div>
            
            {/* Plan A - 既存のコンテナ */}
            <div className="plan-container">
                <div className="plan-title">Plan</div>
                <div className="plan-letter">A</div>
                <div className="price-yen">¥</div>
                <div className="price-amount">300,000</div>
                <div className="vector-6"></div>
                
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
                <div className="atext2">AIエキスパートのコンサル</div>
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
                <div className="plan-title">Plan</div>
                <div className="plan-letter">B</div>
                <div className="price-yen">¥</div>
                <div className="price-amount">100,000</div>
                <div className="vector-6"></div>
                
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
                <div className="atext1">AIエキスパートのコンサル</div>
                <div className="vector-7"></div>
            </div>

            {/* Plan C */}
            <div className="plan-container-c">
                <div className="plan-title">Plan</div>
                <div className="plan-letter">C</div>
                <div className="price-yen">¥</div>
                <div className="price-amount">100,000</div>
                <div className="vector-6"></div>
                
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
            
            {/* 入力フィールドとそのテキスト、送信ボタン */}
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
                    <div className="qa-item">
                        {/* Q1テキスト */}
                        <div className="qa-q-label">Q</div>
                        
                        {/* 縦ライン */}
                        <div className="qa-vertical-line"></div>
                        
                        {/* 質問テキスト */}
                        <div className="qa-question-text">返金は可能か</div>
                        
                        {/* Vector 16 アイコン */}
                        <Image 
                            src="/images/Vector 16.svg"
                            alt="expand"
                            width={24}
                            height={24}
                            className="qa-expand-icon"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main1;
