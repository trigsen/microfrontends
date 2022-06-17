import React from 'react'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header'
import { MarketingApp } from './components/MarketingApp'
import { AuthApp } from './components/AuthApp'

const generateClassName = createGenerateClassName({
    productionPrefix: 'container',
})

export const App = () => {
    return (
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path={'/'} component={MarketingApp} />
                    <Route path={'/auth'} component={AuthApp} />
                </Switch>
            </BrowserRouter>
        </StylesProvider>
    )
}