// TYPES
const GET_PRODUCTS = "GET_PRODUCTS";
const SET_CART = "SET_CART";
const DELETE_CART = "DELETE_CART";

const Reducer = (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case GET_PRODUCTS:
      console.log(payload);
      return { ...state, products: payload };
    case SET_CART:
      return {
        ...state,
        cart: [
          ...state.cart,
          state.products.filter((item) => item.id == payload.id),
        ],
      };
  }
};

export default Reducer;
