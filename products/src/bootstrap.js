import faker from "faker";

const mount = (el) => {
  let products = "";

  for (let index = 0; index < 30; index++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
  console.log(products);
};

export { mount };
// context/situation #1
