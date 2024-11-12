// C:\Users\user\LPws\lpws\pages\contact.js

import React from 'react';
import Header from '../Header'; // ヘッダーをインポート
import './contact.css'; // CSSをインポート

function Contact() {
    return (
        <div className="main-container">
            <Header /> {/* ヘッダーを表示 */}
            <h1>Contact</h1>
            <form>
                <label>お名前を入力してください</label>
                <input type="text" />
                
                <label>メールアドレスを入力してください</label>
                <input type="email" />
                
                <label>お問い合わせ内容を入力してください</label>
                <textarea />
                
                <button type="submit">送信</button>
            </form>
        </div>
    );
}

export default Contact;
