import CartActionTypes from "./action-type";

const initialState = {
  products: [],
  productsTotalprice: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCT:
      return {
        ...initialState,
        productss: [...initialState.products, action.payload],
      };

    default:
      return state;
  }
};

export default cartReducer;
