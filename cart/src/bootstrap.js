import faker from 'faker'

const mount = (element) => {
    const cart = faker.datatype.number()
    element.innerHTML += `<div>You have ${cart} items</div>`
}

if (process.env.NODE_ENV === 'development') {
    // Id for isolated development should be unique. 
    // We assuming that #cart-microfrontend-dev exists only in current microfrontend
    const microfrontendRootNode = document.querySelector('#cart-microfrontend-dev')

    if (microfrontendRootNode) {
        mount(microfrontendRootNode)
    }
}

export { mount }