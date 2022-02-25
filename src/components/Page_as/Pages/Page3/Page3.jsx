import React from 'react';
import s from './Page3.module.css'

const Paga3 = (props) => {
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

const Page3 = (props) => {
    const pageData = [
        { name: "Стол из массива ореха", imag: "https://cs1.livemaster.ru/storage/16/37/3dcd8f86361d4b41efe3549c5coe.jpg", price: "87 500 Руб", size: "1800*800*740", material: "Массив из американского ореха", nal: "нет в наличии", color: " Тёмный орех" },]

    return (
        <Paga3 name={pageData[0].name} imag={pageData[0].imag} price={pageData[0].price} size={pageData[0].size} material={pageData[0].material} color={pageData[0].color} nal={pageData[0].nal} />
    )
}

export default Page3;