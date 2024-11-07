import React from 'react';
import './Main.css';

const Main = () => {
    return (
        <div className="main-container">
            <div className="text-item">Flow</div>
            <div className="letter-circle"></div>
            <div className="email-icon"></div>
            <div className="line"></div>
            <div className="contact-text">Contact</div>
            <div className="contact-subtext">本ページから、お問い合わせください</div>
            <div className="movie-circle"></div>
            <div className="movie-icon"></div>
            <div className="line2"></div>
            <div className="movie-text">Movie</div>
            <div className="movie-subtext">動画視聴ページへのリンクが確認可能です</div>
            <div className="consultant-circle"></div>
            <div className="consultant-icon"></div>
            <div className="line3"></div>
            <div className="consultant-text">Consultant</div>
            <div className="consultant-subtext">コンサルティングの日程を調整します</div>
            <div className="group-circle"></div>
            <div className="group-icon"></div>
            <div className="group-text">Group</div>
            <div className="group-subtext">AIを自分のスキルにするメンバーのグループへ招待します</div>
        </div>
    );
};

export default Main;
