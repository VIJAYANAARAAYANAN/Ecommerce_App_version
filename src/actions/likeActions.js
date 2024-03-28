//likeAction.js
import * as types from './likeActionTypes';

export const addToWishlist = (productId) => {
    console.log('Dispatching action from likeAction.js:', { type: types.ADD_TO_WISHLIST, payload: { id: productId } });
    return {
      type: types.ADD_TO_WISHLIST,
      payload: { id: productId },
    };
  };

export const removeFromWishlist = (productId) => {
    console.log('Triggered action from likeAction.js:',{ type: types.REMOVE_FROM_WISHLIST,payload : { id :productId }});
    return {
    type: types.REMOVE_FROM_WISHLIST,
    payload: { id: productId },
    };
  };
