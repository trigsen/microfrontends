import faker from 'faker'

const cart = faker.random.number()
document.querySelector('#dev-cart').innerHTML += `<div>You have ${cart} items</div>`

