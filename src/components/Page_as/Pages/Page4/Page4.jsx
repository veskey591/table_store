import React from 'react';
import s from './Page4.module.css'

const Paga4 = (props) => {
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

const Page4 = (props) => {
    const pageData = [
        { name: "Стол из дерева саур, экзотический", imag: "https://cs1.livemaster.ru/storage/4f/82/aa03ad4761ad4223377e4569475q.jpg", price: "290 000 Руб", size: "2100*1000*760", material: "Массив саура, лак", nal: "нет в наличии", color: " Cветлый саур" },]

    return (
        <Paga4 name={pageData[0].name} imag={pageData[0].imag} price={pageData[0].price} size={pageData[0].size} material={pageData[0].material} color={pageData[0].color} nal={pageData[0].nal} />
    )
}

export default Page4;