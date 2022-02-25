import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = () => {
    return (
            <header className={s.header}>
                <nav className={s.item}>
                    <span> Table Store </span>
                    <NavLink to='/'> Главная </NavLink>
                    <NavLink to='/table'> Столы </NavLink>
                    <span> Корзина </span>
                </nav>
            </header>
    )
}

export default Header;