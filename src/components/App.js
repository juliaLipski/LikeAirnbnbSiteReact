import React, { Component } from 'react';
import Item from './Item';
import Header from './Header';
import Footor from './Footor';
import Err from './Error';
import HomePage from './HomePage';
import ScrollArea from 'react-scrollbar';
import {
    Route,
    Link,
    Switch,
    HashRouter,
    hashHistory
} from 'react-router-dom';


const App = () => (
    <HashRouter history={hashHistory} basename="home" hashType="slash">
        <div >
            <Header />
            <ScrollArea
                speed={0.8}
                className="area"
                contentClassName="content"
                horizontal={false} >
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/item/:id" component={Item} />
                    <Route component={Err} />
                </Switch>
            </ScrollArea>
            <Footor />
        </div>
    </HashRouter>
)
export default App;