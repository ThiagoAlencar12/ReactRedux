import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons//md';

import { Container, ProdutoTabela, Total } from './styles';

export default function Cart() {
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
          <tr>
            <td>
              <img
                src="https://a-static.mlcdn.com.br/210x210/notebook-dell-inspiron-i15-3567-d15p-intel-core-i3-4gb-1tb-156-linux/magazineluiza/221658600/53763c0433c8619a79c4847ebb66cb79.jpg"
                alt="Notebook"
              />
            </td>

            <td>
              <strong>NotebookDell</strong>
              <span>R$150,00</span>
            </td>

            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>

                <input type="number" readOnly value={2} />

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
