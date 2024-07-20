function sortedCatalogue(products) {
  let productDict = {};

  products.forEach(product => {
    let [name, price] = product.split(' : ');
    price = parseFloat(price);
    let initial = name[0].toUpperCase();

    if (!productDict[initial]) {
      productDict[initial] = {};
    }
    productDict[initial][name] = price;
  });

  let sortedInitials = Object.keys(productDict).sort();

  sortedInitials.forEach(initial => {
    console.log(initial);
    let sortedProducts = Object.keys(productDict[initial]).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

    sortedProducts.forEach(name => {
      console.log(`  ${name}: ${productDict[initial][name]}`);
    });
  });
}