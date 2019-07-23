import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';
import api from '../../services/api';
import { FormatarPreco } from '../../util/format';

import { ProdutoLista } from './styles';

class Home extends Component {
  state = {
    produto: [],
  };

  async componentDidMount() {
    const resposta = await api.get('products');

    const data = resposta.data.map(produto => ({
      ...produto,
      precoFormatado: FormatarPreco(produto.price),
    }));

    this.setState({ produto: data });
  }

  AdicionarProduto = produto => {
    // quando faz esse dispatch das props, todos os reducers sao ativados
    const { dispatch } = this.props;

    dispatch({
      type: 'ADD_TO_CART',
      produto,
    });
  };

  render() {
    const { produto } = this.state;

    return (
      <ProdutoLista>
        {produto.map(produtos => (
          <li key={produtos.id}>
            <img src={produtos.image} alt={produto.title} />
            <strong>{produtos.title}</strong>
            <span>{produtos.precoFormatado}</span>
            <button
              type="button"
              onClick={() => this.AdicionarProduto(produtos)}
            >
              <div>
                <MdAddShoppingCart size={16} color="#FFF" /> 3
              </div>
              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </li>
        ))}
      </ProdutoLista>
    );
  }
}
export default connect()(Home);
