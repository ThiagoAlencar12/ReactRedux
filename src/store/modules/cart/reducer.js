import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD':
      return produce(state, draft => {
        const produtoIndex = draft.findIndex(p => p.id === action.produto.id);

        if (produtoIndex >= 0) {
          draft[produtoIndex].amount += 1;
        } else {
          draft.push({
            ...action.produto,
            amount: 1,
          });
        }
      });

    case '@cart/REMOVE':
      return produce(state, draft => {
        const produtoIndex = draft.findIndex(p => p.id === action.id);

        if (produtoIndex >= 0) {
          draft.splice(produtoIndex, 1);
        }
      });
    case '@cart/UPDATE_AMOUNT': {
      if (action.amount <= 0) {
        return state;
      }

      return produce(state, draft => {
        const produtoIndex = draft.findIndex(p => p.id === action.id);

        if (produtoIndex >= 0) {
          draft[produtoIndex].amount = Number(action.amount);
        }
      });
    }
    default:
      return state;
  }
}
