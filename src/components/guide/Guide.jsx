import "../../App.css"
import "./guide.css"
import hero1 from "../../img/hero1.png"
import hero2 from "../../img/hero2.png"
function Guide(){

    return (
        <>
            <section class="guide">
                <div class="guide__container ">
                    <div class="guide__block">
                        <img src={hero1} alt="" class="guide__img guide__img-back"/>
                        <img src={hero2} alt="" class="guide__img guide__img-front"/>
                    </div>
                    <div class="guide__block guide__content">
                        <h3 class="sub__title">о нашем походе</h3>
                        <h2 class="title">Исследуйте все горные массивы мира вместе с нами</h2>
                        <p class="guide__text">
                            Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть 
                            более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, 
                            штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, "consectetur" и занялся его 
                            поисками в классической латинской литературе.
                        </p>
                        <button class="btn">Программа тура</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Guide