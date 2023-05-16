import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	items: [],
	total: 0
}

export const basketSlice = createSlice({
	name: 'basket',
  initialState: {
    items: JSON.parse(localStorage.getItem('basketItems')) || [], // Завантажуємо попередній стан з localStorage
    total: JSON.parse(localStorage.getItem('basketTotal')) || 0,
  },
	reducers: {
		addItem: (state, action) => {
			const existingItem = state.items.find(item => item.id === action.payload.id);
			if(existingItem){
				existingItem.quantity += 1;
			}else{
				state.items.push({
					...action.payload,
					quantity: 1,
				});
			} 
			state.total += +action.payload.price;
      localStorage.setItem('basketItems', JSON.stringify(state.items));
      localStorage.setItem('basketTotal', JSON.stringify(state.total));
		},
        decreaseQuantity: (state, action) => {
            const item = state.items.find((item) => item.id === action.payload);
            if (item) {
              if (item.quantity > 1) {
                item.quantity -= 1;
                state.total -= item.price;
              } else {
                state.items = state.items.filter((item) => item.id !== action.payload);
                state.total -= item.price;
              }
            }
            localStorage.setItem('basketItems', JSON.stringify(state.items));
            localStorage.setItem('basketTotal', JSON.stringify(state.total));
          },
          increaseQuantity: (state, action) => {
            const item = state.items.find((item) => item.id === action.payload);
            if (item) {
              item.quantity += 1;
              state.total += item.price;
            }
            localStorage.setItem('basketItems', JSON.stringify(state.items));
            localStorage.setItem('basketTotal', JSON.stringify(state.total));
          },
          clearBasket: (state) => {
            state.items = [];
            localStorage.removeItem('basketItems');
            localStorage.removeItem('basketTotal');
          }
        },
});

export const {addItem, decreaseQuantity, increaseQuantity, clearBasket} = basketSlice.actions;
export default basketSlice.reducer;