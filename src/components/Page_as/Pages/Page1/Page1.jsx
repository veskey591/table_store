import React from 'react';
import s from './Page1.module.css'

const Paga = (props) => {
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

const Page1 = (props) => {
    const pageData = [
        { name: "Стол из дуба с шкафчиками", imag: "https://cs2.livemaster.ru/storage/35/f7/d3e10b16abff20790964ad3945rz.jpg", price: "115 000 Руб", size: "2000*500*750", material: "Массив дуба", nal: "нет в наличии", color:" Cветлый дуб"}, ]

    return (
        <Paga name={pageData[0].name} imag={pageData[0].imag} price={pageData[0].price} size={pageData[0].size} material={pageData[0].material} color={pageData[0].color} nal={pageData[0].nal}/>
    )
}

export default Page1;