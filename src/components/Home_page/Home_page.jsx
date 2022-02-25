import React from 'react';
import s from './Home_page.module.css';
import { NavLink } from 'react-router-dom';

const Home_page = () => {
    return (
        <div className={s.homewrapper}>
            <div className={s.item}>
                <span> На этом сайте можно посмотреть на столы. </span>
            </div>
            <div className={s.imgbox}>
                <NavLink to='/table'>
                    <img src='https://static.tildacdn.com/tild3832-3238-4237-b836-343666333666/---03.jpg' alt='' />
                </NavLink>
            </div>
        </div>
    )
}

export default Home_page;
