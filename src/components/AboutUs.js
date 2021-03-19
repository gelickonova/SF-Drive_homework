import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import AboutUsMain from "./AboutUsMain";
import '../../scss/aboutus.scss'

export default class AboutUs extends React.Component {
    render() {
        return (<React.Fragment>
            <Header></Header>
            <AboutUsMain></AboutUsMain>
            <Footer></Footer>
        </React.Fragment>);
    }
}

