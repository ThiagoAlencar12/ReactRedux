import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      return produce(state, draft => {
        const { produto } = action;

        draft.push(produto);
      });

    case '@cart/REMOVE':
      return produce(state, draft => {
        const produtoIndex = draft.findIndex(p => p.id === action.id);

        if (produtoIndex >= 0) {
          draft.splice(produtoIndex, 1);
        }
      });
    case '@cart/UPDATE_AMOUNT_SUCCESS': {
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
