// likeReducer.js
import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from '../actions/likeActionTypes';
import productData from '../data/wholedata';

const initialState = {
  likeItems: [],
};

const likeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST: {
      const existingIndex = state.likeItems.findIndex(item => item.id === action.payload);
      if (existingIndex !== -1) {
        console.log('Product is already in the wishlist.');
        return state;
      } else {
        console.log('Adding product to wishlist.');
        const productToAdd = productData.find(product => product.id === action.payload);
        if (productToAdd) {
          return {
            ...state,
            likeItems: [...state.likeItems, { ...productToAdd }],
          };
        } else {
          console.error('Product not found in productData.');
          return state;
        }
      }
    }

    case REMOVE_FROM_WISHLIST: {
      return {
        ...state,
        likeItems: state.likeItems.filter(item => item.id !== action.payload),
      };
    }

    default:
      return state;
  }
};

export default likeReducer;
