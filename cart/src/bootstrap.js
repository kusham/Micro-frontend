import faker from "faker";

const mount = (el) => {
  let products = "";

  for (let index = 0; index < 30; index++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = "<br></br><div>This is Your cart</div>";
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-cart-dev-only");
  // assuming our container does not have an element
  // with id 'dev-products-dev-only'

  if (el) {
    // we are probably running in isolation
    mount(el);
  }
}

export { mount };
