import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import { FormatarPreco } from '../../../util/format';

import { addToCartSuccess, atualizarMonteSuccess } from './action';

function* addToCart({ id }) {
  const produtoExiste = yield select(state =>
    state.cart.find(p => p.id === id)
  );

  const stock = yield call(api.get, `/stock/${id}`);

  const stockQuantidade = stock.data.amount;
  const currentAmount = produtoExiste ? produtoExiste.amount : 0;

  const amount = currentAmount + 1;

  if (amount > stockQuantidade) {
    toast.error('Produto Esgotado');
    return;
  }

  if (produtoExiste) {
    yield put(atualizarMonteSuccess(id, amount));
  } else {
    const resposta = yield call(api.get, `/products/${id}`);

    const data = {
      ...resposta.data,
      amount: 1,
      formatar: FormatarPreco(resposta.data.price),
    };

    yield put(addToCartSuccess(data));
  }
}

function* atualizarCarrinho({ id, amount }) {
  if (amount <= 0) return;

  const stock = yield call(api.get, `stock/${id}`);
  const stockData = stock.data.amount;

  if (amount > stockData) {
    toast.error('Produto Esgotado');
    return;
  }
  yield put(atualizarMonteSuccess(id, amount));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', atualizarCarrinho),
]);
