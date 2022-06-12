import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header/Header'
import { MarketingApp } from './components/MarketingApp'

export const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <MarketingApp />
        </BrowserRouter>
    )
}