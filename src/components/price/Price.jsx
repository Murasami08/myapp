import "../../App.css"
import "./price.css"
import popular1 from "../../img/popular1.png"
import popular2 from "../../img/popular2.png"
import popular3 from "../../img/popular3.png"
import star from "../../img/star.png"
function Price(){

    return (
        <>
            <section class="section__content price">
                <div class="container">
                    <h3 class="sub__title center">по версии отдыхающих</h3>
                    <h2 class="title center">Популярные направления</h2>
                    <div class="price__cards">
                        <div class="price__card">
                            <img class="price__img-bg" src={popular1} alt=""/>
                            <div class="rating">
                                <img class="rating__img" src={star} alt=""/>
                                <span class="rating__number">4.9</span>
                            </div>
                            <div class="price__item">
                                <div class="price__sub-item">
                                    <h3 class="price__sub-title">Озеро возле гор</h3>
                                    <p class="price__text">романтическое приключение</p>
                                </div>
                                <span class="price__number">480 $</span>
                            </div>
                        </div>
                        <div class="price__card">
                            <img class="price__img-bg" src={popular2} alt=""/>
                            <div class="rating">
                                <img class="rating__img" src={star} alt=""/>
                                <span class="rating__number">4.5</span>
                            </div>
                            <div class="price__item">
                                <div class="price__sub-item">
                                    <h3 class="price__sub-title">Ночь в горах</h3>
                                    <p class="price__text">в компании друзей</p>
                                </div>
                                <span class="price__number">480 $</span>
                            </div>
                        </div>
                        <div class="price__card">
                            <img class="price__img-bg" src={popular3} alt=""/>
                            <div class="rating">
                                <img class="rating__img" src={star} alt=""/>
                                <span class="rating__number">5.0</span>
                            </div>
                            <div class="price__item">
                                <div class="price__sub-item">
                                    <h3 class="price__sub-title">Йога в горах</h3>
                                    <p class="price__text">для тех, кто забоится о себе</p>
                                </div>
                                <span class="price__number">480 $</span>
                            </div>
                        </div>
                    </div>
                    <div class="btns">
                        <button class="btn ">Рейтинг направлений</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Price;