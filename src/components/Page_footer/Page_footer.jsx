import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Page_footer.module.css';

const Page_footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.item}>
                о нас
            </div>
            <div className={s.item}>
                помощь
            </div>
            <div className={s.item}>
                способы оплаты
            </div>
            <div className={s.item}>
                <NavLink to='/contacts'> контакты </NavLink>
            </div>
        </footer>
    )
}

export default Page_footer;