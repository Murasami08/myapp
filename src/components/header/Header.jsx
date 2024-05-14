import "../../App.css"
import "./header.css"
import logo from "../../img/logo.png"
function Header(){

    return (
        <>
            <header className="header">
                <div className="header__container">
                    <img className="header__img" src={logo} alt="" />
                    <nav>
                        <ul className="header__list">
                            <li className="header__item"><p className="header__text">Главная</p></li>
                            <li className="header__item"><p className="header__text">Про гида</p></li>
                            <li className="header__item"><p className="header__text">Программа тура</p></li>
                            <li className="header__item"><p className="header__text">Стоимость</p></li>
                            <li className="header__item"><p className="header__text">Блог</p></li>
                            <li className="header__item"><p className="header__text">Контакты</p></li>
                        </ul>
                    </nav>
                    <button className="btn">Консультация</button>
                </div>
                <div className="search">
                    <div className="search__container">
                        <h1 className="search__title">
                            Насладись прогулкой в горах <br/>
                            с командой единомышленников
                        </h1>
                        <div className="search__block">
                            <form className="search__form" action="" method="post">
                                <div className="search__item">
                                    <select className="search__list" value="Локация для тура<">
                                        <option className="search__select" name="" id="">Локация для тура</option>
                                        <option className="search__select" name="" id=""></option>
                                        <option className="search__select" name="" id=""></option>
                                        <option className="search__select" name="" id=""></option>
                                    </select>
                                    <p className="search__text">выберите из списка</p>
                                </div>
                                <div className="search__item">
                                    <select className="search__list" value="Дата похода">
                                        <option className="search__select" name="" id="">Дата похода</option>
                                        <option className="search__select" name="" id=""></option>
                                        <option className="search__select" name="" id=""></option>
                                        <option className="search__select" name="" id=""></option>
                                    </select>
                                    <p className="search__text">укажите диапазон</p>
                                </div>
                                <div className="search__item">
                                    <select className="search__list" value="Участники">
                                        <option className="search__select" name="" id="">Участники</option>
                                        <option className="search__select" name="" id=""></option>
                                        <option className="search__select" name="" id=""></option>
                                        <option className="search__select" name="" id=""></option>
                                    </select>
                                    <p className="search__text">минимум 4 человека</p>
                                </div>
                                <button className="search__btn btn" type="submit">Найти программу</button>
                            </form>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header