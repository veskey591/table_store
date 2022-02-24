import React from 'react';
import Tables from './Tables/Tables';
import s from './Page_content.module.css';
const Page_content = () => {
    return (
        <div>
            <div className={s.text}>
                <h2> Tables </h2>
            </div>
            <div className={s.item}>
                <Tables />
                <Tables />
                <Tables />
                <Tables />
                <Tables />

            </div>
        </div>
    )
}

export default Page_content;