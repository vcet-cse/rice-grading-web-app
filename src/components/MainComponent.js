import React, { Component } from 'react';
import NavigationComp from './NavigationComponent';
import Footer from './FooterComponent';
import HomePage from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Grade from './GradingRiceComponent';

class Main extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <NavigationComp />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route path="/grade" component={Grade} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}
export default Main;