// return full name of passed contact parameter
function getFullName(contact) {
  const names = contact.names;
  return `${names.first} ${names.surname}`;
}

// return array of products tied to passed contact parameter
function getProductsPurchased(contact) {
  const purchased = contact.purchased;

  if (!purchased.length) {
    return "No products purchased.";
  }

  if (purchased.length === 1) {
    return purchased[0].name;
  }

  const result = [];
  for (let product of purchased) {
    result.push(product.name);
  }

  return result;
}

module.exports = {
  getFullName,
  getProductsPurchased,
};
