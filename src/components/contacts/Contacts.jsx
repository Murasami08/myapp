import "../../App.css"
import "./contacts.css"
function Contacts(){

    return (
        <>
            <section class="contacts">
                <div class="contacts__container">
                    <div class="contacts__block">
                        <h3 class="sub__title ">актуально</h3>
                        <h2 class="contacts__title title">Получайте полезные рассылки о путешествиях</h2>
                    </div>
                    <div class="contacts__block contacts__wrapper-form">
                        <form class="contacts__form" action="">
                            <label class="contacts__label" for="">Введите e-mail адрес</label>
                            <input class="contacts__input" type="email" name="" id="" placeholder="name@domain.com" />
                            <button type="submit" class="contacts__btn btn">Подписаться на новости</button>
                        </form>
                        <p class="contacts__text">
                            подписываясь на новости, вы автоматически соглашаетесь с 
                            <a class="contacts__link" href="">условиями обработки персональных данных</a> и 
                            <a class="contacts__link" href="">правилами рекламных рассылок</a>
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contacts