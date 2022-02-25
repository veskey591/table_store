import React from 'react';
import s from './Page5.module.css'

const Paga5 = (props) => {
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

const Page5 = (props) => {
    const pageData = [
        { name: "Стол из лиственницы, обычный", imag: "https://cs5.livemaster.ru/storage/47/35/0d29a9c64273fddd8fc7f740b2ln.jpg", price: "42 600 Руб", size: "2500*800*800", material: "Лиственница, обработанна маслом", nal: "нет в наличии", color: " Очень тёмная лиственница" },]

    return (
        <Paga5 name={pageData[0].name} imag={pageData[0].imag} price={pageData[0].price} size={pageData[0].size} material={pageData[0].material} color={pageData[0].color} nal={pageData[0].nal} />
    )
}

export default Page5;