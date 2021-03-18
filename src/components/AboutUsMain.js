import React from 'react';

export default class AboutUsMain extends React.Component {
    render() {
        return (<main>
            <section className="about-section">
                <img src="../img/undraw_team_spirit_hrr4.svg" alt="Рисунок команды" className="team_pic"/>
                    <h1 className="about-h1">О нас</h1>
                    <p className="about-text">Это учебный проект, созданный с целью получения боевого опыта в разработке
                        настоящего
                        живого
                        веб-приложения. Этот сервис имитирует работу каршеринга, в котором можно не только арендовать
                        автомобили, но
                        и сдавать их в аренду.
                    </p>
            </section>
            <section className="contacts-section">
                <h2 className="contacts-h2">Контакты</h2>
                <div className="contacts">
                    <div className="mail-and-tel">
                        <p className="label">Электронная почта</p>
                        <a href="mailto:drive@skillfactory.com" className="link">drive@skillfactory.com</a>
                    </div>
                    <img src="../img/rect.svg" className="rectangle"/>
                        <div className="mail-and-tel">
                            <p className="label">Телефон</p>
                            <a href="tel:+79121234567" className="link">+7 912 123-45-67</a>
                        </div>
                </div>
            </section>
            <section className="team-section">
                <h2 className="team-h2">Команда</h2>
                <div className="team-men">
                    <div className="person">
                        <img src="../img/ivanov.png" alt="фотография Ивана Иванова" className="personal-pic"/>
                            <p className="name">Иван Иванов</p>
                            <p className="position">СЕО</p>
                    </div>
                    <div className="person">
                        <img src="../img/smirnov.png" alt=" фотография Алексея Смирнова" className="personal-pic"/>
                            <p className="name">Алексей Смирнов</p>
                            <p className="position">Frontend-разработчик</p>
                    </div>
                    <div className="person">
                        <img src="../img/yartsev.png" alt="фотография Дениса Ярцева" className="personal-pic"/>
                            <p className="name">Денис Ярцев</p>
                            <p className="position">Backend-разработчик</p>
                    </div>
                    <div className="person">
                        <img src="../img/morozov.png" alt="фотография Николая Морозова" className="personal-pic"/>
                            <p className="name">Николай Морозов</p>
                            <p className="position">Дизайнер</p>
                    </div>
                </div>
                <div className="team-women">
                    <div className="person">
                        <img src="../img/deeva.png" alt="фотография Ирины Деевой" className="personal-pic"/>
                            <p className="name">Ирина Деева</p>
                            <p className="position">Копирайтер</p>
                    </div>
                    <div className="person">
                        <img src="../img/strelkova.png" alt="фотография Марии Стрелковой" className="personal-pic"/>
                            <p className="name">Мария Стрелкова</p>
                            <p className="position">SMM</p>
                    </div>
                </div>
            </section>
        </main>);
    }
}
