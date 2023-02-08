const productsArray = [
  {
    id: "1",
    title: "Cofee",
    price:5.00,
  },
  {
    id: "2",
    title: "Sunglasses",
    price:10.00,
  },
  {
    id: "3",
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
