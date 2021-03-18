import React from 'react';
import Logo from "../img/logo.svg"

export default class Header extends React.Component {
    render() {
        return (<header>
            <a href="#" className="header-logo"><img src={Logo}
                                                     alt="Логотип SkillDrive, ссылка на главную страницу"/></a>
            <section className="menu">
                <nav>
                    <ul className="nav">
                        <li><a href="#">О нас</a></li>
                        <li><a href="#">Условия</a></li>
                        <li><a href="#">Частые вопросы</a></li>
                    </ul>
                </nav>
                <button className="button">Войти</button>
            </section>
            <button className="menu-icon">
                <img src="../img/mobile-menu-icon.svg" alt="меню"/>
            </button>
        </header>);
    }
}
