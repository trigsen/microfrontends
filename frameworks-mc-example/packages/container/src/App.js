import React from 'react'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header/Header'
import { MarketingApp } from './components/MarketingApp'

const generateClassName = createGenerateClassName({
    productionPrefix: 'container',
})

export const App = () => {
    return (
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <Header />
                <MarketingApp />
            </BrowserRouter>
        </StylesProvider>
    )
}