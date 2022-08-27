// EL REDUCER FUNCIONA COMO UN SWITCH CON OPERACIONES QUE QUIERO QUE SE HAGAN ANTES DE GUARDAR O PEDIR UN PRODUCTO

// TYPES
const GET_PRODUCTS = "GET_PRODUCTS";
const SET_CART = "SET_CART";
const DELETE_CART = "DELETE_CART";

const Reducer = (state, action) => {
  const { payload, type } = action;
  switch (type) {
    // CADA VEZ QUE ALGUIEN LLAME AL REDUCER (CON EL DISPATCH) CON GET_PRODUCTS LEE LO QUE TIENE EL STATE Y LE AGREGA EN PRODCUTS LO QUE VENGA EN PAYLOAD
    case GET_PRODUCTS:
      // console.log(payload);
      return { ...state, products: payload };
    case SET_CART:
      return {
        ...state,
          cart: [
        ...state.cart,
        ...state.products.filter((item) => item.id == parseInt(payload)), // FILTER ME DEVUELVE UN ARRAY CON LOS ITEMS
        ]
      };

      case DELETE_CART:
      return {
        ...state,// 
        cart: state.cart.filter((item) => item[0].id != parseInt(payload)),
    
      };
      default: return state;
  }
};

export default Reducer;
