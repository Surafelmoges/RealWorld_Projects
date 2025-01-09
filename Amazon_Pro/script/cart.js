export const cart =[];

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