import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Page_content.module.css';

const PageItem = (props) => {
    return (

        <div className={s.card}>
            <div className={s.cardbox}>
                <img src={props.imag} alt='' />
            </div>
            <div className={s.cardsecondcomponent}>
                <div className={s.price}>
                    {props.price}
                </div>
                <div className={s.tname}>
                    {props.name}
                </div>
                <div className={s.moreinfo}>
                    <NavLink to={"/table/" + props.id}> Подробнее </NavLink>
                </div>
            </div>
        </div>

    )
}

const Page_content = (props) => {
    const tableData = [
        { id: "1", name: "стол из дуба", price: "50000 руб", imag: "https://cs5.livemaster.ru/storage/4e/06/4fe48eb83c2ea619e2e5454b83mw--dlya-doma-i-interera-stoly-iz-slebov-primorskogo-duba-s-zhivy.jpg" },
        { id: "2", name: "стол из ясеня", price: "42600 руб", imag: "https://cs1.livemaster.ru/storage/04/df/49440fdf76506ac832bb9317e364.jpg" },
        { id: "3", name: "стол из ореха", price: "87500 руб", imag: "https://cs1.livemaster.ru/storage/16/37/3dcd8f86361d4b41efe3549c5coe.jpg" },
        { id: "4", name: "стол из дерева саур", price: "290000 руб", imag: "https://cs1.livemaster.ru/storage/4f/82/aa03ad4761ad4223377e4569475q.jpg" },
        { id: "5", name: "стол из лиственницы", price: "42600 руб", imag: "https://cs5.livemaster.ru/storage/47/35/0d29a9c64273fddd8fc7f740b2ln.jpg" },
        { id: "6", name: "стол из дуба", price: "25500 руб", imag: "https://cs5.livemaster.ru/storage/e8/8f/4168a2699bca00e049a4248ef6a7.jpg" },
    ]
    return (
        <div>
            <div className={s.text}>
                <h2> Tables </h2>
            </div>
            <div className={s.item}>
                <PageItem id={tableData[0].id} price={tableData[0].price} name={tableData[0].name } imag={tableData[0].imag} />
                <PageItem id={tableData[1].id} price={tableData[1].price} name={tableData[1].name} imag={tableData[1].imag}/>
                <PageItem id={tableData[2].id} price={tableData[2].price} name={tableData[2].name} imag={tableData[2].imag}/>
                <PageItem id={tableData[3].id} price={tableData[3].price} name={tableData[3].name} imag={tableData[3].imag}/>
                <PageItem id={tableData[4].id} price={tableData[4].price} name={tableData[4].name} imag={tableData[4].imag}/>
                <PageItem id={tableData[5].id} price={tableData[5].price} name={tableData[5].name} imag={tableData[5].imag}/>
            </div>
        </div>
    )
}



export default Page_content;