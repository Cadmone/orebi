import { createSlice } from '@reduxjs/toolkit'

export const singleSlice = createSlice({
  name: 'counter',
  initialState: {
   cartItem: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")): [],
  },
  reducers: {
    addToCart: (state, actions) => {

      let findproduct = state.cartItem.findIndex((item)=> item.id == actions.payload.id)
      
      if(findproduct !== -1){
        state.cartItem[findproduct].qun +=1  
        localStorage.setItem("cart", JSON.stringify(state.cartItem) )
      }else{
        state.cartItem = [...state.cartItem, actions.payload]
        localStorage.setItem("cart", JSON.stringify(state.cartItem) )
      }
     
    },
    removeproduct:(state, actions)=> {
      state.cartItem.splice(actions.payload, 1)
      localStorage.setItem("cart", JSON.stringify(state.cartItem) )
    },
    incrementproduct:(state,actions)=>{
    state.cartItem[actions.payload].qun += 1
    localStorage.setItem("cart", JSON.stringify(state.cartItem) )
    },
    decrmentproduct:(state,actions)=>{
      if(state.cartItem[actions.payload].qun > 1){
        state.cartItem[actions.payload].qun -= 1
        localStorage.setItem("cart", JSON.stringify(state.cartItem) )
      }
      
    }
    
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeproduct,incrementproduct, decrmentproduct } = singleSlice.actions

export default singleSlice.reducer