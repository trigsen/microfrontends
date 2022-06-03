import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'

// mount function
const mount = (element) => {
    ReactDOM.render(
        <App />,
        element
    )
}

// dev env for isolation
if (process.env.NODE_ENV === 'development') {
    const rootElement = document.querySelector('#_marketing-dev-only')
    if (rootElement) {
        mount(rootElement)
    }
}

// for container app
export { mount }