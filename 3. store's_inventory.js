const exchangeRate = 80; // 1 USD = 80 INR
const pricesInUSD = {
  item1: 10,
  item2: 20,
  item3: 30,
  item4: 40,
};

const pricesInRupees = Object.entries(pricesInUSD).map(([itemName, priceInUSD]) => {
  return [itemName, priceInUSD * exchangeRate];
});

const pricesInRupeesObject = Object.fromEntries(pricesInRupees);

console.log(pricesInRupeesObject);
