const productsArray = [
  {
    id: "price_1MZES1EQVNpruQYn81fQ8YpW",
    title: "Cofee",
    price:5.00,
  },
  {
    id: "price_1MZEULEQVNpruQYnn8GaM7sT",
    title: "Sunglasses",
    price:10.00,
  },
  {
    id: "price_1MZEXvEQVNpruQYn08OYOm5a",
    title: "Camera",
    price:25.99,
  },
];

function getProductData(id) {
  let productData = productsArray.find((product) => product.id === id);
  if (productData === undefined) {
    console.log("Product data does not exist for the ID" + id);
    return undefined;
  }
  return productData;
}

export { productsArray, getProductData };
