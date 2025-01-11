export const cart =[{
  productID: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity: 3,
},{
  productID: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity: 1
}];

export function addTocart(productID){
  let machItem;
    cart.forEach((cartItem) => {
      if(productID === cartItem.productId){
        machItem = cartItem;
      }
    });

    if(machItem){
      machItem.quantity+=1;
    }
    else{
      cart.push(
        {
          productId: productID,
          quantity: 1
        });
    }
    

 }