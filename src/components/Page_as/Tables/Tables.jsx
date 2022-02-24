import React from 'react';
import s from './Tablex.module.css';

const Tables = () => {
    return (
        <div className={s.card}>
            <div className={s.cardbox}>
                <img src='https://www.digiseller.ru/preview/589536/p1_2731437_2edafc8f.jpg'/>
            </div>
            <div>
                <div className={s.price}>
                    цена
                </div>
                <div className={s.name}>
                    название
                </div>
                <div className={s.moreinfo}>
                    подробнее
                </div>
            </div>
        </div>
    )
}

export default Tables;