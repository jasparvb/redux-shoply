export function cartTotal(products, cart) {
    let total = 0;
    for (let id in products) {
      const { price } = products[id];
      const quantity = cart[id] || 0;
      total += price * quantity;
    }
    return total;
}
  