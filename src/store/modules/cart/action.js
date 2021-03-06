export function addToCartRequest(id) {
  return {
    type: '@cart/ADD_REQUEST',
    id,
  };
}

export function addToCartSuccess(produto) {
  return {
    type: '@cart/ADD_SUCCESS',
    produto,
  };
}

export function endCart(produto) {}

export function removeFromCart(id) {
  return { type: '@cart/REMOVE', id };
}

export function atualizarMonteRequest(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_REQUEST',
    id,
    amount,
  };
}

export function atualizarMonteSuccess(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_SUCCESS',
    id,
    amount,
  };
}
