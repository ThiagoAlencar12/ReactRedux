import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';
import { FormatarPreco } from '../../util/format';

import { Container, ProdutoTabela, Total } from './styles';
import * as CartActions from '../../store/modules/cart/action';

function Cart({ cart, total, removeFromCart, atualizarMonte }) {
  function incrementa(produto) {
    atualizarMonte(produto.id, produto.amount + 1);
  }

  function decrementa(produto) {
    atualizarMonte(produto.id, produto.amount - 1);
  }

  return (
    <Container>
      <ProdutoTabela>
        <thead>
          <tr>
            <th />
            <th> PRODUTO </th>
            <th> QTD </th>
            <th> SUBTOTAL </th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cart.map(produto => (
            <tr>
              <td>
                <img src={produto.image} alt={produto.title} />
              </td>

              <td>
                <strong>{produto.title}</strong>
                <span>{produto.FormatarPreco}</span>
              </td>

              <td>
                <div>
                  <button type="button" onClick={() => decrementa(produto)}>
                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                  </button>

                  <input type="number" readOnly value={produto.amount} />

                  <button type="button" onClick={() => incrementa(produto)}>
                    <MdAddCircleOutline size={20} color="#7159c1" />
                  </button>
                </div>
              </td>

              <td>
                <strong>{produto.subtotal}</strong>
              </td>

              <td>
                <button
                  type="button"
                  onClick={() => removeFromCart(produto.id)}
                >
                  <MdDelete size={20} color="#7159c1" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProdutoTabela>

      <footer>
        <button type="button"> Finalize seu pedido</button>

        <Total>
          <span>TOTAL: </span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  );
}
const mapStateToProps = state => ({
  cart: state.cart.map(produto => ({
    ...produto,
    subtotal: FormatarPreco(produto.price * produto.amount),
  })),
  total: FormatarPreco(
    state.cart.reduce((total, produto) => {
      return total + produto.price * produto.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
