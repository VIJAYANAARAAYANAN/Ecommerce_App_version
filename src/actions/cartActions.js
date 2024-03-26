// actions/cartActions.js
import * as types from '../actions/cartActionTypes';

export const addToCart = (productId) => {
  console.log('Dispatching action from cartAction.js:', { type: types.ADD_TO_CART, payload: { id: productId } });
  return {
    type: types.ADD_TO_CART,
    payload: { id: productId },
  };
};

export const removeFromCart = (productId) => ({
  type: types.REMOVE_FROM_CART,
  payload: { id: productId },
});

export const incrementQuantity = (productId) => ({
  type: types.INCREMENT_QUANTITY,
  payload: { id: productId },
});

export const decrementQuantity = (productId) => ({
  type: types.DECREMENT_QUANTITY,
  payload: { id: productId },
});
