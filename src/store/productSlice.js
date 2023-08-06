import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    status: 'idle'
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        // fetchProducts(state, action) {
        //     state.data = action.payload;
        // }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getProducts.pending, (state,action) => {
            state.status = 'Loading';
        })
        .addCase(getProducts.fulfilled, (state,action) => {
            state.data = action.payload;
            state.status = 'idle';
        })
        .addCase(getProducts.rejected, (state,action) => {
            state.status = 'error';
        })
    }
});

export const {fetchProducts} = productSlice.actions;
export default productSlice.reducer;

//Redux Middleware Thunk Created 1
export const getProducts = createAsyncThunk('products/get', async () => {
    const data = await fetch('https://fakestoreapi.com/products')
    const result = await data.json();
    console.log("THIS IS THINK CALL:", result);
    return result;
});

//Redux Middleware Thunk Created 2
// export function getProducts() {
//     return async function getProductsThunk(dispatch, getState) {
//         const data = await fetch('https://fakestoreapi.com/products')
//         const result = await data.json();
//         console.log("THIS IS THINK CALL:", result);
//         dispatch(fetchProducts(result));

//     }
// }