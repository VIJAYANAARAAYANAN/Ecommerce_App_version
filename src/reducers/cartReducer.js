// reducers/cartReducer.js
import productData from '../data/minidata'; // Import product data

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  console.log('Action received by cartReducer:', action);
  switch (action.type) {
    case 'ADD_TO_CART':
      
      const existingProductIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
      if (existingProductIndex !== -1) {
        console.log('Product is already in the cart.');
        //increase quantity
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[existingProductIndex].quantity += 1;
        return {
          ...state,
          cartItems: updatedCartItems,
        };
      } else {
        console.log('Product is not in the cart.');
        // If the product is not in the cart, add it with quantity 1
        const productToAdd = productData.find(product => product.id === action.payload.id);
        if (productToAdd) {
          return {
            ...state,
            cartItems: [...state.cartItems, { ...productToAdd, quantity: 1 }],
          };
        } else {
          console.error('Product not found in productData.');
          return state; 
        }
      }

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload.id),
      };

    case 'INCREMENT_QUANTITY':
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };

    case 'DECREMENT_QUANTITY':
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload.id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        ),
      };

    default:
      return state;
  }
};

export default cartReducer;
