import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from "./components/home";
import Item1 from "./components/item1";
import Item2 from "./components/item2";
import HeaderNavbar from "./components/common/header-navbar";

function App() {
    return (
        // eslint-disable-next-line react/jsx-no-undef
        <BrowserRouter>
            <HeaderNavbar/>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/Item1">
                    <Item1/>
                </Route>
                <Route path="/Item2">
                    <Item2/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
