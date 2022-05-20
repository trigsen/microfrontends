import faker from 'faker'

const mount = (element) => {
    const product = faker.commerce.productName()
    element.innerHTML += `<div>${product}</div>`
}

if (process.env.NODE_ENV === 'development') {
    // Id for isolated development should be unique. 
    // We assuming that #products-microfrontend-dev exists only in current microfrontend
    const microfrontendRootNode = document.querySelector('#products-microfrontend-dev')

    if (microfrontendRootNode) {
        mount(microfrontendRootNode)
    }
}

export { mount }