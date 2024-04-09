// likeActions.js
import * as types from '../actions/likeActionTypes';

export const addToWishlist = (productId) => {
  return {
    type: types.ADD_TO_WISHLIST,
    payload: productId,
  };
};

export const removeFromWishlist = (productId) => {
  return {
    type: types.REMOVE_FROM_WISHLIST,
    payload: productId,
  };
};
