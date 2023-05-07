import { createSlice } from "@reduxjs/toolkit";

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
  },
  reducers: {
    setProductList: (state, action) => {
      state.productList = action.payload;
    },
    setProductCategoryList: (state, action) => {
      state.productCategoryList = action.payload;
    },
    addToCart: (state, action) => {
      const { id, img, price } = action?.payload;
      const obj = state.shopping.cart.find((obj) => obj.id === id);
      if (obj) {
        obj.quantity++;
        state.shopping.totalNumberofProduct++;
        state.shopping.totalPrice += price;
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
});

export const {
  setProductList,
  setProductCategoryList,
  addToCart,
  removeToCart,
  favoriteProduct,
} = productSlice.actions;

export default productSlice.reducer;
