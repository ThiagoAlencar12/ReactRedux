import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';
import api from '../../services/api';
import { FormatarPreco } from '../../util/format';

import { ProdutoLista } from './styles';
import * as CartActions from '../../store/modules/cart/action';

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
    const { addToCart } = this.props;

    addToCart(produto);
  };

  render() {
    const { produto } = this.state;
    const { amount } = this.props;
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
                <MdAddShoppingCart size={16} color="#FFF" />{' '}
                {amount[produtos.id] || 0}
              </div>
              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </li>
        ))}
      </ProdutoLista>
    );
  }
}
const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, produto) => {
    amount[produto.id] = produto.amount || 0;

    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
