import React, { useReducer } from "react";

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  checkout: false,
};

const sumItems = (items) => {
  const itemsCounter = items.reduce((total,product)=>total+product.quantity ,0);
  const total = items.reduce((total,product)=> total+product.price*product.quantity , 0).toFixed(2);
  return {itemsCounter:itemsCounter , total:total};
}

const cartReducer = (state, action) => {
    console.log(state);
  switch (action.type) {
    case "ADD-ITEM":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        selectedItems: [...state.selectedItems],
        ...sumItems(state.selectedItems),
        checkout:false,
      };
    case "REMOVE_ITEM":
      const newSelected = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        selectedItems: [...newSelected],
        ...sumItems(state.selectedItems),
        itemsCounter: state.itemsCounter === 1 ? 0 : state.itemsCounter,
        total : state.total && 0,
      };
    case "INCREASE":
      const indexI = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[indexI].quantity++;
      return {
        ...state,
        ...sumItems(state.selectedItems)
      };
    case "DECREASE":
      const indexD = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[indexD].quantity--;
      return {
        ...state,
        ...sumItems(state.selectedItems)
      };
    case "CHECKOUT":
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkout: true,
      };
    case "CLEAR":
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkout: false,
      };
    default:
      return state;
  }
};

export const Cartcontex = React.createContext();

const CartContextProvider = (props) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <Cartcontex.Provider value={{state , dispatch}}>
        {props.children}
    </Cartcontex.Provider>
  );
};

export default CartContextProvider;
