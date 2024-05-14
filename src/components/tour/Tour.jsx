import "../../App.css"
import "./tour.css"
import programs1 from "../../img/programs1.png"
import programs2 from "../../img/programs2.png"
import programs3 from "../../img/programs3.png"
import programs4 from "../../img/programs4.png"

function Tour(){

    return (
        <>
            <section class="section__content tour">
                <div class="tour__container">
                    <div class="tour__blcok">
                        <h3 class="sub__title">наше предложение</h3>
                        <h2 class="title">Лучшие программы для тебя</h2>
                        <p class="tour__lead">Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа.</p>
                        <ul class="tour__list">
                            <li class="tour__item tour__team">
                                <h3 class="tour__sub-title">Опытный гид</h3>
                                <p class="tour__text">Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.</p>
                            </li>
                            <li class="tour__item tour__security">
                                <h3 class="tour__sub-title">Безопасный поход</h3>
                                <p class="tour__text">Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.</p>
                            </li>
                            <li class="tour__item tour__price">
                                <h3 class="tour__sub-title">Лояльные цены</h3>
                                <p class="tour__text">Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.</p>
                            </li>
                        </ul>
                        <button class="btn">Стоимость программ</button>
                    </div>
                    <div class="tour__blcok tour__imgs">
                        <img src={programs1} alt="" class="tour__img"/>
                        <img src={programs2} alt="" class="tour__img"/>
                        <img src={programs3} alt="" class="tour__img"/>
                        <img src={programs4} alt="" class="tour__img"/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Tour