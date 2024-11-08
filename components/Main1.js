/* C:\Users\user\LPws\lpws\components\Main1.js */
import React from 'react';
import './Main1.css';
import Image from 'next/image';
import Footer from './Footer';

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
                    {/* 1つ目のンテナ */}
                    <div className="qa-item" style={{ position: 'relative' }}>
                        {/* Q1テキスト */}
                        <div className="qa-q-label" style={{
                            position: 'absolute',
                            width: '16px',
                            height: '29px',
                            top: '17px',
                            left: '32px',
                            gap: '0px',
                            opacity: '1',
                            fontFamily: 'Noto Sans JP',
                            fontSize: '20px',
                            fontWeight: '700',
                            lineHeight: '28.96px',
                            letterSpacing: '0.1em',
                            textAlign: 'left',
                            textUnderlinePosition: 'from-font',
                            textDecorationSkipInk: 'none',
                            color: '#FFFFFF'
                        }}>Q</div>
                        
                        {/* 画像を追加 */}
                        <img 
                            src="/images/Vector 16.svg" 
                            alt="vertical line" 
                            style={{
                                width: '0px', // 幅を0pxに設定
                                height: '65px', // 高さを65pxに設定
                                position: 'absolute', // 位置を絶対に設定
                                top: '1px', // 上からの位置を1pxに設定
                                left: '79px', // 左からの位置を79pxに設定
                                opacity: '1', // 不透明度を1に設定
                                display: 'block', // ブロック要素として表示
                                margin: '0', // ��ージンを0に設定
                                border: '1.5px solid transparent', // ボーダーを設定
                            }} 
                        />
                        
                        {/* 質問テキスト */}
                        <div className="qa-question-text">返金は可能か</div>
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
                    }}>
                        {/* Q テキスト */}
                        <div className="qa-q-label" style={{
                            position: 'absolute',
                            width: '16px',
                            height: '29px',
                            top: '17px',
                            left: '32px',
                            gap: '0px',
                            opacity: '1',
                            fontFamily: 'Noto Sans JP',
                            fontSize: '20px',
                            fontWeight: '700',
                            lineHeight: '28.96px',
                            letterSpacing: '0.1em',
                            textAlign: 'left',
                            textUnderlinePosition: 'from-font',
                            textDecorationSkipInk: 'none',
                            color: '#FFFFFF'
                        }}>Q</div>

                        {/* 質問テキスト - widthを調整 */}
                        <div style={{
                            width: '200px',  // 修正: 130px から 200px に変更
                            height: '28px',
                            position: 'absolute',
                            top: '17px',
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
                        }}>返金は可能か</div>

                        {/* 横線（1本のみ） */}
                        <div style={{
                            width: '726px',
                            height: '0px',
                            position: 'absolute',
                            top: '66px',
                            left: '0',
                            borderTop: '1.5px solid #FFFFFF',
                            opacity: '1',
                        }} />

                        {/* A テキスト */}
                        <div className="qa-q-label" style={{
                            position: 'absolute',
                            width: '16px',
                            height: '29px',
                            top: '94px',
                            left: '32px',
                            gap: '0px',
                            opacity: '1',
                            fontFamily: 'Noto Sans JP',
                            fontSize: '20px',
                            fontWeight: '700',
                            lineHeight: '28.96px',
                            letterSpacing: '0.1em',
                            textAlign: 'left',
                            textUnderlinePosition: 'from-font',
                            textDecorationSkipInk: 'none',
                            color: '#FFFFFF'
                        }}>A</div>
                    </div>

                    {/* 回答テキスト - widthを調整 */}
                    <div style={{
                        width: '500px',
                        height: '56px',
                        position: 'absolute',
                        top: '177px',
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
                    }}>3ヶ月以内であれば可能で���。<br/>質問に対しての回答を入れます</div>

                    {/* 3つ目のコンテナ */}
                    <div className="qa-item" style={{ 
                        width: '726px',
                        height: '66px',  // 高さを短く
                        position: 'relative',
                        top: '32px',  // 16px × 2 で上のコンテナとの間隔を設定
                        gap: '0px',
                        borderRadius: '12px',
                        border: '1.5px solid #FFFFFF',
                        opacity: '1',
                        background: 'transparent',
                    }}>
                        {/* Q テキスト */}
                        <div className="qa-q-label" style={{
                            position: 'absolute',
                            width: '16px',
                            height: '29px',
                            top: '17px',
                            left: '32px',
                            gap: '0px',
                            opacity: '1',
                            fontFamily: 'Noto Sans JP',
                            fontSize: '20px',
                            fontWeight: '700',
                            lineHeight: '28.96px',
                            letterSpacing: '0.1em',
                            textAlign: 'left',
                            color: '#FFFFFF'
                        }}>Q</div>

                        {/* 質問テキスト */}
                        <div style={{
                            width: '200px',
                            height: '28px',
                            position: 'absolute',
                            top: '17px',
                            left: '111px',
                            gap: '0px',
                            opacity: '1',
                            fontFamily: 'Noto Sans JP',
                            fontSize: '20px',
                            fontWeight: '700',
                            lineHeight: '28px',
                            letterSpacing: '0.1em',
                            textAlign: 'left',
                            color: '#FFFFFF'
                        }}>返金は可能か</div>
                    </div>

                    {/* 4つ目のコンテナ */}
                    <div className="qa-item" style={{ 
                        width: '726px',
                        height: '66px',
                        position: 'relative',
                        top: '48px',  // 16px × 3 で上のコンテナとの間隔を設定
                        gap: '0px',
                        borderRadius: '12px',
                        border: '1.5px solid #FFFFFF',
                        opacity: '1',
                        background: 'transparent',
                    }}>
                        {/* Q テキスト */}
                        <div className="qa-q-label" style={{
                            position: 'absolute',
                            width: '16px',
                            height: '29px',
                            top: '17px',
                            left: '32px',
                            gap: '0px',
                            opacity: '1',
                            fontFamily: 'Noto Sans JP',
                            fontSize: '20px',
                            fontWeight: '700',
                            lineHeight: '28.96px',
                            letterSpacing: '0.1em',
                            textAlign: 'left',
                            color: '#FFFFFF'
                        }}>Q</div>

                        {/* 質問テキスト */}
                        <div style={{
                            width: '200px',
                            height: '28px',
                            position: 'absolute',
                            top: '17px',
                            left: '111px',
                            gap: '0px',
                            opacity: '1',
                            fontFamily: 'Noto Sans JP',
                            fontSize: '20px',
                            fontWeight: '700',
                            lineHeight: '28px',
                            letterSpacing: '0.1em',
                            textAlign: 'left',
                            color: '#FFFFFF'
                        }}>返金は可能か</div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Main1;
