import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import store from '@/store/store';
// components
import Header from '@/components/Header';
import PagePosts from '@/components/PagePosts';
import { myTheme } from '@/styling/theme';
import { GlobalStyles } from '@/styling/global';

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
