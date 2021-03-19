import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import FaqMain from "./FaqMain";
import '../../scss/faq.scss';
import '../../scss/header.scss';
import '../../scss/footer.scss';

export default class AboutUs extends React.Component {
    render() {
        return (<React.Fragment>
            <Header></Header>
            <FaqMain></FaqMain>
            <Footer></Footer>
        </React.Fragment>);
    }
}

