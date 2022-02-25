import React from 'react';
import s from './Page6.module.css'

const Paga6 = (props) => {
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
                <span>Размер (Д*В) ............................................................................................................................................................................</span>
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

const Page6 = (props) => {
    const pageData = [
        { name: "Стол из дуба, круглый", imag: "https://cs1.livemaster.ru/storage/cf/25/e6c7a7c7ddcbbe1fadaa9d59ddt6.jpg", price: "42 000 Руб", size: "1100*750", material: "Массив дуба", nal: "нет в наличии", color: " Cветлый дуб" },]

    return (
        <Paga6 name={pageData[0].name} imag={pageData[0].imag} price={pageData[0].price} size={pageData[0].size} material={pageData[0].material} color={pageData[0].color} nal={pageData[0].nal} />
    )
}

export default Page6;