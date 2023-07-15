const { faunaFetch } = require('./utils/fauna');

exports.handler = async (event, ) => {
  const { product } = JSON.parse(event.body);



  await faunaFetch({
    query: `
      mutation ($productID: ID!, $productName: STRING!) {
        createProduct(data: { productID: $productID, productName: $productName }) {
          productID
          productName
        }
      } 
    `,
    variables: {
      productID: product.id,
      productName: product.Name,
    },
  });

};
