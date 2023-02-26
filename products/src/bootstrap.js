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


// context/situation #1
// we are running this file in development in isolation
// we are using out local index.html file
// which DEFINITELY has an element with an id of 'dev-product'
// we want to immediately render our app into that element
if (process.env.NODE_ENV === "development") {
    const el = document.querySelector("#dev-products-dev-only");
    // assuming our container does not have an element
    // with id 'dev-products-dev-only'
    
    if (el) {
        // we are probably running in isolation
      mount(el);
  }
}

// context/situation #2
// we are running this file in development or production
// through the container app
// no guarantee that an element with an id of 'dev-product'
// we do not want to immediately render our app into that element

export { mount };