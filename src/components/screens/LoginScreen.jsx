import React, { useState } from 'react'
import './LoginScreen.scss';
import loi from '../../assets/loi.png'
import background from './background.jpg'
import SignUpScreen from './SignUpScreen';
const LoginScreen = () => {
    const [signIn, setSignIn] = useState(false);
    return (
        <div className='loginScreen'>
            <div className="loginScreen__background">
                <img className='loginScreen__logo' src={loi} alt="" />
                <button onClick={() => setSignIn(true)} className='loginScreen__button'>Đăng nhập</button>
                <div className='loginScreen__gradient' />
            </div>
            <div className="loginScreen__body">
                {signIn ? (
                    <SignUpScreen />
                ) : (
                    <>
                        <div className="loginScreen__input">
                        </div>
                    </>
                )}
                <video
                    autoPlay
                    muted
                    loop
                    id="video-Login"
                >
                    <source
                        src="https://raw.githubusercontent.com/fuocy/video/master/endgame.mp4"
                        type="video/mp4" 
                    />


                </video>
            </div>
        </div>
    )
}

export default LoginScreen;