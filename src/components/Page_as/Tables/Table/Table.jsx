import React from 'react';
import s from './Table.module.css';

const Table = () => {
    return (
        <div className={s.item}>
            <img src='https://cs1.livemaster.ru/storage/48/a6/ea8573b8c21cc00d8db4d826bfgs--dlya-doma-i-interera-stolik-iz-duba.jpg' alt='' />
            <div>
                <div>
                    <span> table 1 </span>
                </div>
                <div>
                    <span> more info </span>
                </div>
            </div>
        </div>
    )
}

export default Table;