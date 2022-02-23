import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <div className={s.header}>
            <header>
                <div>
                    <span> Table Store </span>
                    <span> Главная </span>
                    <span> Корзина </span>
                </div>
            </header>
        </div>
    )
}

export default Header;