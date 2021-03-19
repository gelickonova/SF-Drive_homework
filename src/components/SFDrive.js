import React from 'react';
import Footer from "./Footer";
import FaqMain from "./FaqMain";
import AboutUsMain from "./AboutUsMain"
import '../../scss/aboutus.scss'
import '../../scss/faq.scss';
import '../../scss/header.scss';
import '../../scss/footer.scss';
import Logo from "../img/logo.svg";
import menuIcon from "../img/mobile-menu-icon.svg";

export default class SFDrive extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currentPage: (window.location.hash==="") ? "#aboutus" : window.location.hash }
    }

    render() {
        (this.state.currentPage === "#aboutus") ? document.title = "О нас" : document.title = "Частые вопросы";
        return (<React.Fragment>
            <header>
                <a href="#" className="header-logo"><img src={Logo}
                                                         alt="Логотип SkillDrive, ссылка на главную страницу"/></a>
                <section className="menu">
                    <nav>
                        <ul className="nav">
                            <li><a href="#" onClick={(e) => {
                                this.setState({currentPage: "#aboutus"})
                                window.location.hash = "#aboutus";
                                e.preventDefault()
                            }}>О нас</a></li>
                            <li><a href="#">Условия</a></li>
                            <li><a href="#" onClick={(e) => {
                                this.setState({currentPage: "#faq"})
                                window.location.hash = "#faq";
                                e.preventDefault()
                            }}>Частые вопросы</a></li>
                        </ul>
                    </nav>
                    <button className="button">Войти</button>
                </section>
                <button className="menu-icon">
                    <img src={menuIcon} alt="меню"/>
                </button>
            </header>
            { this.state.currentPage === "#aboutus" ? <AboutUsMain/> : <FaqMain/>}
            <Footer/>
        </React.Fragment>);
    }
}
