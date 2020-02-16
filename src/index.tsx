import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import store from './@features/store/store';
// components
import Header from './components/Header';
import PagePosts from './components/PagePosts';
import { ThemeProvider } from 'styled-components';
import { myTheme } from './@features/styling/theme';
import { GlobalStyles } from './@features/styling/global';

const app =
    <section className="app-box">
        <GlobalStyles />
        <ThemeProvider theme={myTheme}>
            <Provider store={store}>
                <Header />
                <BrowserRouter>
                    <Switch>
                        <Route path="/" render={(props: any) => <PagePosts {...props} />} />
                        {/* <Route path="/about" render={(props: any) => <PageAuthentication {...props} setAuth={() => afterLogin()} />} /> */}
                    </Switch>
                </BrowserRouter>
            </Provider>
        </ThemeProvider>
    </section>

ReactDOM.render(app, document.getElementById('app'));
