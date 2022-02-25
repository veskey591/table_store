import React from 'react';
import s from './Page_footer.module.css';

const Page_footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.item}>
                <span> О нас </span>
                <div className={s.items}>
                    <span>
                        Вообще нет идей, как оформить сайт.
                    </span>
                    <br></br>
                    <span>
                        На код лучше не смотреть.
                    </span>
                </div>
            </div>
            <div className={s.item}>
                <span> Помощь </span>
                <div className={s.items}>
                    <span>
                        На всём сайте работают лишь 4 недокнопки.
                    </span>
                    <br></br>
                    <span>
                        Покупать здесь нельзя.
                    </span>
                    <br></br>
                    <span>
                        В хэдере работают "Главная" и "Столы".
                    </span>
                </div>
            </div>
            <div className={s.item}>
                <span> Способы оплаты: </span>
                <div className={s.items}>
                    <span> - таких нет.</span>
                </div>
            </div>
            <div className={s.item}>
                <span> Контакты </span>
                <br></br>
                <span>
                    г. Москва
                </span>
                <div>
                    <span>
                        +7 (495) 855-55-46 (Москва)
                    </span>
                </div>
                <div className={s.items}>
                    <span>
                        ПН-ВС:выходной
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Page_footer;