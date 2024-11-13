import React, { useState } from 'react';
import Image from 'next/image';
import './contact.css';
import Success from '../success/Success';
import { useRouter } from 'next/router';

function Contact() {
    const router = useRouter();
    const [isSuccessVisible, setIsSuccessVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSuccessVisible(true);
    };

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="main-container" style={{ overflow: 'visible' }}>
            {/* 背景グラデーション */}
            <svg 
                className="background-gradient"
                xmlns="http://www.w3.org/2000/svg" 
                width="1439" 
                height="1360" 
                viewBox="0 0 1439 1360" 
                fill="none"
            >
                <path 
                    opacity="0.3" 
                    d="M0.00012207 -6.29007e-05C453.894 760.414 1063.14 808.089 1439 744.681L1439 1362L-5.95349e-05 1362L0.00012207 -6.29007e-05Z" 
                    fill="url(#paint0_linear_1236_4240)"
                />
                <defs>
                    <linearGradient 
                        id="paint0_linear_1236_4240" 
                        x1="907.029" 
                        y1="752.299" 
                        x2="135.731" 
                        y2="1107.02" 
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#FF4948"/>
                        <stop offset="1" stopColor="#F6F8FB" stopOpacity="0"/>
                    </linearGradient>
                </defs>
            </svg>

            {/* ヘッダー部分 */}
            <div className="header-container">
                <div className="logo-section">
                    <Image
                        src="/images/a (3).svg"
                        alt="Albility icon"
                        width={40}
                        height={38}
                        priority
                        className="logo-icon"
                    />
                    <span className="logo-text">AIbility</span>
                </div>
                
                <div className="nav-menu">
                    <a href="/" className="nav-item" onClick={() => scrollToSection('top-section')}>TOP</a>
                    <a href="/about" className="nav-item">About</a>
                    <a href="/flow" className="nav-item">Flow</a>
                    <a href="/faq" className="nav-item">FAQ</a>
                    <a href="/review" className="nav-item">Review</a>
                    <div className="contact-button" onClick={() => scrollToSection('contact-section')}>
                        <span className="contact-text">Contact</span>
                    </div>
                </div>
            </div>

            {/* ラインを追加 */}
            <div className="divider"></div>

            {/* Contactテキストを追加 */}
            <h1 className="contact-title">Contact</h1>

            {/* 新しいテキストを追加 */}
            <p className="contact-subtitle">まずはお気軽に問い合わせください</p>

            {/* フォームコンテナを修正 */}
            <div className="form-container">
                <label className="form-label">お名前</label>
                <input 
                    type="text" 
                    name="name"
                    className="form-input" 
                    placeholder="名前を入力してください"
                    value={formData.name}
                    onChange={handleInputChange}
                />

                <label className="form-label">アドレス</label>
                <input 
                    type="email" 
                    name="email"
                    className="form-input" 
                    placeholder="メールアドレスを入力してください"
                    value={formData.email}
                    onChange={handleInputChange}
                />

                <label className="form-label">お問い合わせ内容</label>
                <textarea 
                    name="message"
                    className="form-textarea" 
                    placeholder="お問い合わせ内容を入力してください"
                    value={formData.message}
                    onChange={handleInputChange}
                ></textarea>
            </div>

            {/* 送信ボタンは元の位置のまま */}
            <div className="submit-container">
                <button 
                    className="submit-button"
                    onClick={handleSubmit}
                    type="button"
                >
                    <span className="submit-text">内容を送る</span>
                    <Image
                        src="/images/Group 311 (4).svg"
                        alt="Send Icon"
                        width={38}
                        height={38}
                        className="send-icon"
                        priority
                    />
                </button>
            </div>

            {/* Success ポップアップを追加 */}
            <Success 
                isVisible={isSuccessVisible} 
                onClose={() => setIsSuccessVisible(false)}
            />

            {/* コンタクトフォーム部分 */}
            <div className="content-container">
                {/* 既存のコンテンツ */}
            </div>

            {/* フッターを追加 */}
            <div className="footer">
                <Image
                    src="/images/a (4).svg"  // 画像パスを修正
                    alt="Footer Icon"
                    className="footer-icon"
                    width={34.129}  // 幅を指定
                    height={46}     // 高さを指定
                />
                <span className="footer-text">AIbility</span>
            </div>

            {/* アイコンを追加 */}
            <div className="icon-container">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="7" 
                    height="7" 
                    viewBox="0 0 7 7" 
                    fill="none"
                    style={{ display: 'block' }} // SVG表示を確実にする
                >
                    <circle cx="3.5" cy="3.5" r="3.5" fill="#FFF"/>
                </svg>
            </div>

            {/* 新しいアイコンを追加 */}
            <div className="new-icon-container">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="7" 
                    height="7" 
                    viewBox="0 0 7 7" 
                    fill="none"
                    style={{ display: 'block' }} // SVGの表示を確実にする
                >
                    <circle cx="3.5" cy="3.5" r="3.5" fill="#FFF"/>
                </svg>
            </div>

            {/* 新しいアイコンを追加 */}
            <div className="third-icon-container">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="7" 
                    height="7" 
                    viewBox="0 0 7 7" 
                    fill="none"
                    style={{ display: 'block' }} // SVGの表示を確実にする
                >
                    <circle cx="3.5" cy="3.5" r="3.5" fill="#FFF"/>
                </svg>
            </div>

            {/* プライバシーポリシーのテキストを追加 */}
            <div className="privacy-text">プライバシーポリシー</div>

            {/* 利用規約のテキストを追加 */}
            <div className="terms-text">利用規約</div>

            {/* 運用会社のテキストを追加 */}
            <div className="company-text">運用会社</div>
        </div>
    );
}

export default Contact;