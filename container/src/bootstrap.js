import "products/ProductIndex";
import "cart/CartIndex";
import { mount as productMount } from "../../products/src/bootstrap";
import { mount as cartMount } from "../../cart/src/bootstrap";

productMount(document.querySelector("#my-products"));
cartMount(document.querySelector("#my-cart"));

document.querySelector(
  "#dev-container"
).innerHTML = `<div>Hello world</div><br></br>`;
