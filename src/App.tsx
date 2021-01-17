import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// @ts-ignore
import {CSSTransition} from 'react-transition-group/CSSTransitionGroup';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Header} from "./components/header/header";
import {Catalog} from "./components/catalog/catalog";
import {Cart} from './components/cart/cart';
import {SignIn} from "./components/auth/signin";
import {SignUp} from "./components/auth/signup";
import {Profile} from "./components/auth/profile";


const App: React.FC = () => {

    return (
        <div className="App">
            <ToastContainer className="mt-8"/>
            <Header/>
            <Switch>
                <Route path="/" component={Catalog} exact/>
                <Route path="/cart" component={Cart} exact/>
                <Route path="/auth/signin" component={SignIn} exact/>
                <Route path="/auth/signup" component={SignUp} exact/>
                <Route path="/auth/profile" component={Profile} exact/>
            </Switch>
        </div>
    );
}
export default (App);
