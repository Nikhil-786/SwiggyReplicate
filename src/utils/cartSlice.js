import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
name:'Cart',
initialState:{
    items:[],
},
reducers:{
    addItem:(state,action)=>{

        //mutating the state.
      
        state.items.push(action.payload);
    },
    removeItem:(state,action)=>{
        //console.log(action);
        state.items.delete(action.payload);
       
    },
    clearCart:(state,action)=>{
        state.items.length=0;
    }

}

});

export const {addItem,removeItem,clearCart} =cartSlice.actions;
export default cartSlice.reducer;