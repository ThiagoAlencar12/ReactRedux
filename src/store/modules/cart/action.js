export function addToCart(produto) {
  return {
    type: '@cart/ADD',
    produto,
  };
}

export function removeFromCart(id) {
  return { type: '@cart/REMOVE', id };
}

export function atualizarMonte(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT',
    id,
    amount,
  };
}
