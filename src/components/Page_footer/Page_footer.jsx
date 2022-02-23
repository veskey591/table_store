import React from 'react';
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
                <a href='contacts'> контакты </a>
            </div>
        </footer>
    )
}

export default Page_footer;