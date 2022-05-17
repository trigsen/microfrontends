import { mount as productsMount } from 'products/ProductsIndex'
import { mount as cartMount } from 'cartApp/Cart'
console.log('products')

productsMount(document.querySelector('#root'))
cartMount(document.querySelector('#root'))