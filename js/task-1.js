function  makeTransaction(quantity, pricePerDroid, customerCredits){
  let totalPrice = quantity * pricePerDroid;
  if (totalPrice > customerCredits) {
    return "Insufficient funds!";
  } else {
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
  }
}
console.log(makeTransaction(5, 300, 2000)); // "You ordered 5 droids worth 1500 credits!"
console.log(makeTransaction(10, 500, 4000)); // "Insufficient funds!"
console.log(makeTransaction(3, 100, 500)); // "You ordered 3 droids worth 300 credits!"
console.log(makeTransaction(7, 200, 1400)); // "You ordered 7 droids worth 1400 credits!"
console.log(makeTransaction(1, 1000, 500)); // "Insufficient funds!"