import React from 'react';
import {Link, Route, Switch} from 'react-router-dom'
import Footer from "./Footer";
import FaqMain from "./FaqMain";
import AboutUsMain from "./AboutUsMain"
import '../../scss/aboutus.scss'
import '../../scss/faq.scss';
import '../../scss/header.scss';
import '../../scss/footer.scss';
import '../../scss/register.scss';
import Header from "./Header";
import RegisterOneMain from "./RegisterOneMain";
import RegisterTwoMain from "./RegisterTwoMain";

export default class SFDrive extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<React.Fragment>
            <Header/>
            <Switch>
                <Route path="/aboutus">
                    <AboutUsMain/>
                    <Footer/>
                </Route>
                <Route path="/faq">
                    <FaqMain/>
                    <Footer/>
                </Route>
                <Route path="/registration">
                    <RegisterOneMain/>
                </Route>
                <Route path="/stepTwo">
                    <RegisterTwoMain/>
                </Route>
                <Route path="/">
                    <AboutUsMain/>
                    <Footer/>
                </Route>
            </Switch>
        </React.Fragment>);
    }
}
