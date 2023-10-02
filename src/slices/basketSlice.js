import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  // actions
  reducers: {
    addToBasket: (state, action) => {
      //es como incluir un elemento al array de basket
      // action.payload contiene lo que queremos añadir
      state.items = [...state.items,action.payload];
    },
    removeFromBasket: (state, action) => {
      const index= state.items.findIndex((basketItem)=>basketItem.id===action.payload.id)

      // copia
      let newBasket =[...state.items]

      if(index>=0){
        // if the item exists in the basket

        // esta cosa lo borra
        newBasket.splice(index,1)
      }else{
        console.log(`Cant remove product (id: ${action.payload.id}) as its not in the basket`)
      }

      // esto pone la copia en el state original
      state.items=newBasket
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;
export const selectTotal=(state) => state.basket.items.reduce((total,item)=>total+item.price,0)

export default basketSlice.reducer;
