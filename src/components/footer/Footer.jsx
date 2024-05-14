import "../../App.css"
import "./footer.css"
import telegram from "../../img/telegram.png"
import vk from "../../img/vk.png"
import pinterest from "../../img/pinterest.png"
import skype from "../../img/skype.png"
function Footer(){

    return (
        <>
            <footer class="footer">
                <div class="footer__container">
                    <div class="footer__block">
                        <h2 class="footer__title">Компания «РумТибет»</h2>
                        <p class="footer__text">
                            Его корни уходят в один фрагмент классической латыни 45 года н.э., 
                            то есть более двух тысячелетий назад. Ричард МакКлинток, 
                            профессор латыни из колледжа Hampden-Sydney.
                        </p>
                        <div class="footer__links">
                            <a class="footer__mail" href="">info@domain.com</a>
                            <a class="footer__tel" href="">+7 (123) 456-78-90</a>
                        </div>
                        <div class="footer__media">
                            <a class="footer__media-link" href=""><img src={telegram} alt=""/></a>
                            <a class="footer__media-link" href=""><img src={vk} alt=""/></a>
                            <a class="footer__media-link" href=""><img src={pinterest} alt=""/></a>
                            <a class="footer__media-link" href=""><img src={skype} alt=""/></a>
                        </div>
                    </div>
                    <div class="footer__block">
                        <h3 class="footer__sub-title">Наши услуги</h3>
                        <ul class="footer__list">
                            
                            <li class="footer__item"><a href="" class="footer__link">Прогулки в горы летом</a></li>
                            <li class="footer__item"><a href="" class="footer__link">Зимние походы в горы</a></li>
                            <li class="footer__item"><a href="" class="footer__link">Посещение храмов в горах</a></li>
                            <li class="footer__item"><a href="" class="footer__link">Экстремальные виды туризма</a></li>
                            <li class="footer__item"><a href="" class="footer__link">Походы в джунглях Амазонии <span class="footer__new">new</span></a></li>
                            <li class="footer__item"><a href="" class="footer__link">Поездка в Африку</a></li>
                        </ul>
                    </div>
                    <div class="footer__block">
                        <h3 class="footer__sub-title">Важно для путешествий</h3>
                        <ul class="footer__list">
                            <li class="footer__item"><a href="" class="footer__link">Как собрать в долгий поход?</a></li>
                            <li class="footer__item footer__arrow"><a href="" class="footer__link">Жизненно важные предметы для похода</a></li>
                            <li class="footer__item footer__arrow"><a href="" class="footer__link">Медицинская страховка, гарантии безопасности</a></li>
                            <li class="footer__item"><a href="" class="footer__link">Если вы врач - загляните сюда</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
            <div class="copyright">
                <div class="copyright__container">
                    <p class="copyright__text">ИП Константинопольский К.К., 2023</p>
                    <a class="copyright__link" href="">Политика обработки персональных данных</a>
                </div>
            </div>
        </>
    )
}

export default Footer