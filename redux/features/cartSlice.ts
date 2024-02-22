import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IProduct {
    id: number;
    name: string;
    img: string;
    price: string;
    quantity: number; // Changed type to number
}

const initialState: Array<IProduct> = [];

export const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<IProduct>) => {
            const existingProductIndex = state.findIndex(pro => pro.id === action.payload.id);
            if (existingProductIndex === -1) {
                state.push(action.payload);
            } else {
                state[existingProductIndex].quantity++;
            }
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            const id = action.payload;
            return state.filter(item => item.id !== id);
        }
    }
});

// Export action creators
export const { addToCart, removeFromCart } = cartSlice.actions;

// Export reducer
export default cartSlice.reducer;
