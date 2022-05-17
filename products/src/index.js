import faker from 'faker'

// const products = new Array(3)
//                         .fill(0)
//                         .map(() => faker.commerce.productName())
//                         .forEach((e) => document.querySelector('#products').innerHTML += `<div>${e}</div>`)

const product = faker.commerce.productName()
document.querySelector('#dev-products').innerHTML += `<div>${product}</div>`
console.log(products)

