import React, { useRef, useEffect } from 'react';

import { Link, useLocation } from 'react-router-dom';

import './header.scss';

import logo from '../../assets/loi.png';

import avt from './account.png'
import { useHistory } from 'react-router-dom';
const headerNav = [
    {
        display: 'Trang chủ',
        path: '/'
    },
    {
        display: 'Phim Hot',
        path: '/movie'
    },
    {
        display: 'TV Series',
        path: '/tv'
    },

];

const Header = () => {
    const history = useHistory();
    const { pathname } = useLocation();
    const headerRef = useRef(null);

    const active = headerNav.findIndex(e => e.path === pathname);

    useEffect(() => {
        const shrinkHeader = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current.classList.add('shrink');
            } else {
                headerRef.current.classList.remove('shrink');
            }
        }
        window.addEventListener('scroll', shrinkHeader);
        return () => {
            window.removeEventListener('scroll', shrinkHeader);
        };
    }, []);

    return (
        <div ref={headerRef} className="header">
            <div className="header__wrap container">
                <div className="logo" onClick={()=> history.push("/")}>
                    <img src={logo} alt="" />
                </div>
                <ul className="header__nav">
                    {
                        headerNav.map((e, i) => (
                            <li key={i} className={`${i === active ? 'active' : ''}`}>
                                <Link to={e.path}>
                                    {e.display}
                                </Link>
                            </li>

                        ))
                    }
                    <img onClick={() => history.push("/profile")} src={avt} alt="" className="nav__logo" />
                </ul>
            </div>
        </div>
    );
}

export default Header;
