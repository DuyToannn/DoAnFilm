import React, { useRef } from 'react'
import { auth } from '../../firebase';
import "./SignupScreen.scss";

const SignUpScreen = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser)=> {
            console.log("Cảm ơn bạn đã đăng ký");
        })
        .catch((error) => {
            alert(error.message)
        })
    }

    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser)=> {
            console.log(authUser);
        })
        .catch((error) => {
            alert(error.message)
        })
    }

    return (
        <div className='signupScreen'>

            <form action="">
                <h1>Đăng nhập</h1>
                <input ref={emailRef}  type="email" placeholder='Tài khoản' />
                <input ref={passwordRef}  type="Password" placeholder='Mật khẩu' />
                <button tyoe="submit" onClick={signIn}>Đăng nhập</button>

                <h4 className='mt-3'>
                    <span className="signupScreen__gray">Tạo tài khoản Chillflix?</span> 
                    <span className="signupScreen__link" onClick={register}>Đăng ký ngay</span>
                </h4>
            </form>
        </div>
    )
}

export default SignUpScreen