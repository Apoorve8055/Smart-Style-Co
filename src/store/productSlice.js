import { createSlice } from "@reduxjs/toolkit";
import { fetchProductById } from "./productSliceThunks";

const productSlice = createSlice({
  name: "product",
  initialState: {
    productList: [],
    productCategoryList: [],
    shopping: {
      cart: [],
      totalNumberofProduct: 0,
      totalPrice: 0,
      favoriteProductList: [],
    },
    productDetails: null,
  },
  reducers: {
    setProductList: (state, action) => {
      state.productList = action.payload;
    },
    setProductCategoryList: (state, action) => {
      state.productCategoryList = action.payload;
    },
    addToCart: (state, action) => {
      const { id, img, price, qty } = action?.payload;
      const obj = state.shopping.cart.find((obj) => obj.id === id);
      if (obj) {
        obj.quantity++;
        state.shopping.totalNumberofProduct++;
        state.shopping.totalPrice += price;
      }
      if (qty) {
        let additional_qty = parseInt(qty);
        state.shopping.cart.push({ id, img, price, quantity: additional_qty });
        state.shopping.totalNumberofProduct += additional_qty;
        state.shopping.totalPrice += price * additional_qty;
      } else {
        state.shopping.cart.push({ id, img, price, quantity: 1 });
        state.shopping.totalNumberofProduct++;
        state.shopping.totalPrice += price;
      }
    },
    removeToCart: (state, action) => {},
    favoriteProduct: (state, action) => {
      const { id, img, price } = action?.payload;
      const obj = state.shopping.favoriteProductList.find(
        (obj) => obj.id === id
      );
      if (obj) {
        const index = state.shopping.favoriteProductList.indexOf(obj);
        state.shopping.favoriteProductList.splice(index, 1);
      } else {
        state.shopping.favoriteProductList.push({ id, img, price });
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductById.fulfilled, (state, action) => {
      state.productDetails = action.payload;
    });
  },
});

export const {
  setProductList,
  setProductCategoryList,
  addToCart,
  removeToCart,
  favoriteProduct,
} = productSlice.actions;

export default productSlice.reducer;
