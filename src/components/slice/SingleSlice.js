import { createSlice } from '@reduxjs/toolkit'

export const singleSlice = createSlice({
  name: 'counter',
  initialState: {
    value:0
  },
  reducers: {
    addToCart: (state) => {
      state.value += 1

      //  if(findProduct !== -1){
      //     state.cartItem[findProduct].quantity += 1
      //     localStorage.setItem("cart", JSON.stringify(state.cartItem))
      //  }else{
      //    state.cartItem = [...state.cartItem, action.payload]
      //    localStorage.setItem("cart", JSON.stringify(state.cartItem))
      //  }
    },
    removeProduct: (state, action)=>{
      state.cartItem.splice(action.payload, 1)
      localStorage.setItem("cart", JSON.stringify(state.cartItem))
    },
    incerementProduct: (state, action)=>{
      state.cartItem[action.payload].quantity +=1
      localStorage.setItem("cart", JSON.stringify(state.cartItem))
    },
    decrementProduct: (state, action)=>{
      if(state.cartItem[action.payload].quantity > 1){
        state.cartItem[action.payload].quantity -=1
        localStorage.setItem("cart", JSON.stringify(state.cartItem))
      }
    },

    
  },
})

// Action creators are generated for each case reducer function
export const { addToCart,removeProduct,incerementProduct,decrementProduct } = singleSlice.actions

export default singleSlice.reducer









































// import { createSlice } from '@reduxjs/toolkit'

// export const singleSlice = createSlice({
//   name: 'counter',
//   initialState: {
//     cartItem: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")): [],
//   },
//   reducers: {
//     addTocart: (state, action) => {
//       let finproduct = state.cartItem.findIndex((itme)=> itme.id == action.payload.id)
//       if (finproduct !== -1){
//        state.cartItem[finproduct]. qun +=1
//        localStorage.setItem("cart", JSON.stringify(state.cartItem))
//       } else{
//         state.cartItem = [...state.cartItem, action.payload]
//         localStorage.setItem("cart", JSON.stringify(state.cartItem))
//       }
      
//     }, 
//   },
// })

// // Action creators are generated for each case reducer function
// export const { addToCart } = singleSlice.actions

// export default singleSlice.reducer