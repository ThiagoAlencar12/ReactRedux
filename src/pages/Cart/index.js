import React from 'react';
import { connect } from 'react-redux';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons//md';

import { Container, ProdutoTabela, Total } from './styles';

function Cart({ cart }) {
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
                  <button type="button">
                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                  </button>

                  <input type="number" readOnly value={produto.amount} />

                  <button type="button">
                    <MdAddCircleOutline size={20} color="#7159c1" />
                  </button>
                </div>
              </td>

              <td>
                <strong>R$258,80</strong>
              </td>

              <td>
                <button type="button">
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
          <strong>R$100.00</strong>
        </Total>
      </footer>
    </Container>
  );
}
const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Cart);
