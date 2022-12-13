import React, { useState } from 'react'
import './LoginScreen.scss';
import loi from '../../assets/loi.png'
import background from './background.jpg'
import SignUpScreen from './SignUpScreen';
const LoginScreen = () => {
    const [signIn, setSignIn] = useState(false);
    return (
        <div className='loginScreen' style={{ backgroundImage: `url(${background})` }}>
            <div className="loginScreen__background">
                <img className='loginScreen__logo' src={loi} alt="" />
                <button  onClick={() => setSignIn(true)} className='loginScreen__button'>Đăng nhập</button>
                <div className='loginScreen__gradient' />
            </div>
            <div className="loginScreen__body">
                {signIn ? (
                    <SignUpScreen />
                ) : (
                    <>
                        <h1>Unlimited movies, TV shows, and more.</h1>
                        <h2>Watch anywhere</h2>
                        <div className="loginScreen__input">
                            <form action="">
                                <input type='email' placeholder='Email Address' />
                                <button className='loginScreen__getStarted'>
                                    GET STARTED
                                </button>
                            </form>
                        </div>
                    </>
                )}

            </div>
        </div>
    )
}

export default LoginScreen;