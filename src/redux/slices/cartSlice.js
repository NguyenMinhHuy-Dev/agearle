import { createSlice } from '@reduxjs/toolkit';

const initialState = {
cartItems: [],
totalAmount:0,
totalQuantity:0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem:(state, action)=>{
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item)=> item.id === newItem.id
      );
      state.totalQuantity++
      if(!existingItem){
        state.cartItems.push({
          id: newItem.id,
          productName: newItem.productName,
          imgUrl: newItem.imgUrl,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
       
      }
      else{
        existingItem.quantity++;
        existingItem.totalPrice = 
            Number(existingItem.totalPrice) + Number(newItem.price);
      }
      state.totalAmount = state.cartItems.reduce((total, item)=> total+
      Number(item.price)*Number(item.quantity),0
      );
        console.log(state.totalQuantity);
        console.log(state.cartItems);
        console.log(newItem);
    },

    
    deleteItems:(state, action)=>{
      const id = action.payload
      const existingItem = state.cartItems.find(item=> item.id === id)
  
      if(existingItem){
        state.cartItems = state.cartItems.filter(item=> item.id !== id)
        state.totalQuantity = state.totalQuantity - existingItem.quantity
      }
  
      state.totalAmount = state.cartItems.reduce((total, item)=> total+
        Number(item.price)*Number(item.quantity),0
      );
    },

    removeItems: (state,action)=>{
      const removeItem = action.payload
      const existingItem = state.cartItems.find((item)=> item.id === removeItem.id
      ); 
      state.totalQuantity--
      if(existingItem.quantity <= 1){
        if (window.confirm('Bạn có chắc muốn xóa')) {
          
        // alert('Bạn có chắc muốn xóa')
          if(existingItem){
            state.cartItems = state.cartItems.filter(item=> item.id !== removeItem.id)
            state.totalQuantity = state.totalQuantity - existingItem.quantity + 1
          }
      
          state.totalAmount = state.cartItems.reduce((total, item)=> total+
            Number(item.price)*Number(item.quantity),0);
        }
        // console.log("xoa san pham")
      }else{
        existingItem.quantity--;
        existingItem.totalPrice = 
            Number(existingItem.totalPrice) - Number(removeItem.price);
          }
        state.totalAmount = state.cartItems.reduce((total, item)=> total+
        Number(item.price)*Number(item.quantity),0
        );
    },

  },


  
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;