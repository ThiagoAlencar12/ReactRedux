import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProdutoLista } from './styles';

export default function Home() {
  return (
    <ProdutoLista>
      <li>
        <img
          src="https://a-static.mlcdn.com.br/210x210/notebook-dell-inspiron-i15-3567-d15p-intel-core-i3-4gb-1tb-156-linux/magazineluiza/221658600/53763c0433c8619a79c4847ebb66cb79.jpg"
          alt="Notebook"
        />
        <strong>Notebook Dell</strong>
        <span>Preço: 1.254,85</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://a-static.mlcdn.com.br/210x210/notebook-dell-inspiron-i15-3567-d15p-intel-core-i3-4gb-1tb-156-linux/magazineluiza/221658600/53763c0433c8619a79c4847ebb66cb79.jpg"
          alt="Notebook"
        />
        <strong>Notebook Dell</strong>
        <span>Preço: 1.254,85</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://a-static.mlcdn.com.br/210x210/notebook-dell-inspiron-i15-3567-d15p-intel-core-i3-4gb-1tb-156-linux/magazineluiza/221658600/53763c0433c8619a79c4847ebb66cb79.jpg"
          alt="Notebook"
        />
        <strong>Notebook Dell</strong>
        <span>Preço: 1.254,85</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProdutoLista>
  );
}
