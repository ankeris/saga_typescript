import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import store from './@features/store/store';
// components
import Header from './components/Header';
import PagePostsContainer from './components/PagePosts';

const app =
    <section className="app-box">
        <Provider store={store}>
            <Header />
            <BrowserRouter>
                <Switch>
                    <Route path="/" render={(props: any) => <PagePostsContainer {...props} />} />
                    {/* <Route path="/about" render={(props: any) => <PageAuthentication {...props} setAuth={() => afterLogin()} />} /> */}
                </Switch>
            </BrowserRouter>
        </Provider>
    </section>

ReactDOM.render(app, document.getElementById('app'));
