import React from 'react';
import './ProfileScreen.scss';
import avt from '../header/account.png';
import { selectUser } from '../../feafures/userSlice';
import { useSelector } from 'react-redux';
import { auth } from '../../firebase';
import { useHistory } from 'react-router-dom';
const ProfileScreen = () => {
    const user = useSelector(selectUser)
    const history = useHistory();

    const handLogout = (e) => {
        e.preventDefault();
        if (auth.signOut()) {
            history.push("/")
        }
    }
    return (
        <div className='profileScreen'>
            <div className="profileScreen__body">
                <h1>Edit Profile</h1>
                <div className="profileScreen__info">
                    <img src={avt} alt="" />
                    <div className="profileScreen__details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen__plans">
                            <button 
                                onClick={handLogout} 
                                className="profileScreen__signOut">Đăng xuất
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProfileScreen