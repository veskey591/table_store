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
        { id: "1", name: "Стол из дуба", price: "115 000 руб", imag: "https://cs2.livemaster.ru/storage/35/f7/d3e10b16abff20790964ad3945rz.jpg" },
        { id: "2", name: "Стол из ясеня", price: "42 600 руб", imag: "https://cs1.livemaster.ru/storage/65/70/758c2ecfa6fc96f0a76274335ei3.jpg" },
        { id: "3", name: "Стол из массива ореха", price: "87 500 руб", imag: "https://cs1.livemaster.ru/storage/16/37/3dcd8f86361d4b41efe3549c5coe.jpg" },
        { id: "4", name: "Стол из дерева саур", price: "290 000 руб", imag: "https://cs1.livemaster.ru/storage/4f/82/aa03ad4761ad4223377e4569475q.jpg" },
        { id: "5", name: "Стол из лиственницы", price: "42 600 руб", imag: "https://cs5.livemaster.ru/storage/47/35/0d29a9c64273fddd8fc7f740b2ln.jpg" },
        { id: "6", name: "Стол из дуба", price: "44 000 руб", imag: "https://cs1.livemaster.ru/storage/cf/25/e6c7a7c7ddcbbe1fadaa9d59ddt6.jpg" },
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