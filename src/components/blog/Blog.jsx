import "../../App.css"
import "./blog.css"
import blog1 from "../../img/blog1.png"
import blog2 from "../../img/blog2.png"
import blog3 from "../../img/blog3.png"
import blog4 from "../../img/blog4.png"
function Blog(){

    return (
        <>
            <section class="section__content blog">
                <div class="container">
                    <h3 class="sub__title center">делимся впечатлениями</h3>
                    <h2 class="title center">Блог о путешествиях</h2>
                    <div class="blog__cards">
                        <div class="blog__card">
                            <img class="blog__img" src={blog1} alt=""/>
                            <div class="blog__content">
                                <h3 class="blog__sub-title">Красивая Италя, какая она в реальности?</h3>
                                <div class="blog__lend">
                                    <p class="blog__text">Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.</p>
                                    <div class="blog__links">
                                        <span class="blog__data">01/04/2023</span>
                                        <a class="blog__link" href="#">читать статью</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="blog__card">
                            <img class="blog__img" src={blog2} alt=""/>
                            <div class="blog__content">
                                <h3 class="blog__sub-title">Долой сомнения! Весь мир открыт для вас!</h3>
                                <div class="blog__lend">
                                    <p class="blog__text">
                                        Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий 
                                        активизации ... независимые способы реализации соответствующих условий активизации ...Для современного мира базовый вектор развития предполагает 
                                        независимые способы реализации соответствующих условий активизации ... независимые способы реализации соответствующих условий активизации ...
                                    </p>
                                    <div class="blog__links">
                                        <span class="blog__data">01/04/2023</span>
                                        <a class="blog__link" href="#">читать статью</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="blog__card">
                            <img class="blog__img" src={blog3} alt=""/>
                            <div class="blog__content">
                                <h3 class="blog__sub-title">Как подготовиться к путешествию в одиночку? </h3>
                                <div class="blog__lend">
                                    <p class="blog__text">Для современного мира базовый вектор развития предполагает.</p>
                                    <div class="blog__links">
                                        <span class="blog__data">01/04/2023</span>
                                        <a class="blog__link" href="#">читать статью</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="blog__card">
                            <img class="blog__img" src={blog4} alt=""/>
                            <div class="blog__content">
                                <h3 class="blog__sub-title">Индия ... летим?</h3>
                                <div class="blog__lend">
                                    <p class="blog__text">Для современного мира базовый.</p>
                                    <div class="blog__links">
                                        <span class="blog__data">01/04/2023</span>
                                        <a class="blog__link" href="#">читать статью</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="btns">
                        <button class="btn ">Другие материалы</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog