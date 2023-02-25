import faker from 'faker'

let products = ''

for (let index = 0; index < 30; index++) {
   
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`
}
console.log("object");

document.querySelector('#dev-cart').innerHTML = '<br></br><div>This is Your cart</div>';
