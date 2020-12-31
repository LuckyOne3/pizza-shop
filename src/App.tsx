import './App.css';
import React from 'react';
import {Header} from "./components/header/header";
import {Catalog} from "./components/catalog/catalog";
import {Notification} from "./components/catalog/notification";

import { Cart } from './components/cart/cart';
import { Route } from 'react-router-dom';
import {SignIn} from "./components/auth/signin";
import {SignUp} from "./components/auth/signup";
import {Profile} from "./components/auth/profile";

const App: React.FC = () => {

    return (
        <div className="App">
            <Header/>
            <Route path="/" component={Catalog} exact />
            <Route path="/cart" component={Cart} exact />
            <Route path="/auth/signin" component={SignIn} exact />
            <Route path="/auth/signup" component={SignUp} exact />
            <Route path="/auth/profile" component={Profile} exact />
        </div>
    );
}
export default (App);
