import React, { lazy, Suspense } from 'react'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header'

const LazyMarketingApp = lazy(() => import('./components/MarketingApp').then((module) => ({ default: module.MarketingApp })))
const LazyAuthApp = lazy(() => import('./components/AuthApp').then((module) => ({ default: module.AuthApp })))


const generateClassName = createGenerateClassName({
    productionPrefix: 'container',
})

export const App = () => {
    return (
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <Header />
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route exact path={'/'} component={LazyMarketingApp} />
                        <Route path={'/auth'} component={LazyAuthApp} />
                    </Switch>
                </Suspense>
            </BrowserRouter>
        </StylesProvider>
    )
}

