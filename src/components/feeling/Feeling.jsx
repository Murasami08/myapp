import "../../App.css"
import "./feeling.css"
import add1 from "../../img/add1.png"
import add2 from "../../img/add2.png"
import add3 from "../../img/add3.png"
import add4 from "../../img/add4.png"
import add5 from "../../img/add5.png"
import add6 from "../../img/add6.png"
function Feeling(){

    return (
        <>
            <section class="section__content feeling">
                <div class="container">
                    <h3 class="sub__title center">фото-отчет</h3>
                    <h2 class="title center">Делимся впечатлениями</h2>
                    <div class="feeling__block">
                        <img src={add1} alt="" class="feeling__img1"/>
                        <img src={add2} alt="" class="feeling__img2"/>
                        <img src={add3} alt="" class="feeling__img3"/>
                        <img src={add4} alt="" class="feeling__img4"/>
                        <img src={add5} alt="" class="feeling__img5"/>
                        <img src={add6} alt="" class="feeling__img6"/>
                    </div>
                    <div class="btns">
                        <button class="btn last">Наш pinterest</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Feeling