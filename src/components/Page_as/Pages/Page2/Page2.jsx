import React from 'react';
import s from './Page2.module.css'

const Paga2 = (props) => {
    return (
        <div className={s.pagewrapper}>
            <div className={s.name}>
                {props.name}
            </div>
            <div></div>
            <div className={s.box}>
                <img src={props.imag} alt='' />
            </div>
            <div className={s.price}>
                <span>{props.price}</span>
                <br></br>
                <span>{props.nal}</span>
            </div>
            <div className={s.characteristic}>
                <span>Размер (Д*Ш*В) ............................................................................................................................................................................</span>
                <br></br>
                <span>Материал .........................................................................................................................................................................................</span>
                <br></br>
                <span>Цвет ....................................................................................................................................................................................................</span>
            </div>
            <div>
                <span>{props.size} </span>
                <br></br>
                <span>{props.material} </span>
                <br></br>
                <span>{props.color}</span>
            </div>
        </div>
    )
}

const Page2 = (props) => {
    const pageData = [
        { name: "Стол из ясеня, обычный", imag: "https://cs1.livemaster.ru/storage/65/70/758c2ecfa6fc96f0a76274335ei3.jpg", price: "42 600 Руб", size: "1600*800*760", material: "Массив ясеня", nal: "нет в наличии", color: " Cветлый ясень" },]

    return (
        <Paga2 name={pageData[0].name} imag={pageData[0].imag} price={pageData[0].price} size={pageData[0].size} material={pageData[0].material} color={pageData[0].color} nal={pageData[0].nal} />
    )
}

export default Page2;