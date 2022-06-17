import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { createMemoryHistory, createBrowserHistory } from 'history'

// mount function
const mount = (element, props) => {
    const history = props?.defaultHistoryObject 
    ? props.defaultHistoryObject 
    : createMemoryHistory({ initialEntries: [props.initialPathname]})
    
    if (props?.onNavigate) {
        history.listen(props.onNavigate)
    }

    ReactDOM.render(
        <App history={history} />,
        element
    )

    return {
        onParentNavigate: ({ pathname: nextPathname }) => {
            const { pathname } = history.location

            if (pathname !== nextPathname) {
                history.push(nextPathname)
            }
        }
    }
}

// dev env for isolation
if (process.env.NODE_ENV === 'development') {
    const rootElement = document.querySelector('#_marketing-dev-only')
    if (rootElement) {
        mount(rootElement, { defaultHistoryObject: createBrowserHistory() })
    }
}

// for container app
export { mount }