import { products } from "../data/data";

function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
}

export function getProductById(idParam) {
  return new Promise((resolve) => {
    const itemRequested = products.find((item) => String(item.id) === idParam);
    setTimeout(() => resolve(itemRequested), 1000);
  });
}

export function getProductsByCategory(catParam) {
  return new Promise((resolve, reject) => {
    const itemsRequested = products.filter((item) => item.category === catParam);
    if (itemsRequested.length === 0) reject("No encontramos productos");
    setTimeout(() => resolve(itemsRequested), 1000);
  });
}

export default getData;