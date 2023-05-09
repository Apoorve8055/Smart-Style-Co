import { createSlice } from "@reduxjs/toolkit";
import {
  fetchProductById,
  fetchProductCategory,
  fetchProductList,
} from "./productSliceThunks";

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
      const { id, title, img, price, qty } = action?.payload;
      const objIndex = state.shopping.cart.findIndex((obj) => obj.id === id);

      if (objIndex !== -1) {
        state.shopping.cart[objIndex].quantity += qty ? parseInt(qty) : 1;
        state.shopping.totalNumberofProduct += qty ? parseInt(qty) : 1;
        state.shopping.totalPrice += price * (qty ? parseInt(qty) : 1);
      } else {
        const newItem = {
          id,
          title,
          img,
          price,
          quantity: qty ? parseInt(qty) : 1,
        };
        state.shopping.cart.push(newItem);
        state.shopping.totalNumberofProduct += qty ? parseInt(qty) : 1;
        state.shopping.totalPrice += price * (qty ? parseInt(qty) : 1);
      }
    },

    decrementProductFromCart: (state, action) => {
      const { id, price } = action?.payload;
      const index = state.shopping.cart.findIndex((item) => item.id === id);
      if (state.shopping.cart[index].quantity === 1) {
        state.shopping.cart = state.shopping.cart.filter(
          (item) => item.id !== id
        );
      } else {
        state.shopping.cart[index].quantity--;
      }

      state.shopping.totalNumberofProduct--;
      state.shopping.totalPrice -= price;
    },
    deleteFromCart: (state, action) => {
      const { id, price } = action?.payload;
      const index = state.shopping.cart.findIndex((item) => item.id === id);
      const qty = state.shopping.cart[index].quantity;
      state.shopping.cart = state.shopping.cart.filter(
        (item) => item.id !== id
      );

      state.shopping.totalNumberofProduct -= qty;
      state.shopping.totalPrice -= price * qty;
    },
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

    builder.addCase(fetchProductCategory.fulfilled, (state, action) => {
      state.productCategoryList = action.payload;
    });

    builder.addCase(fetchProductList.fulfilled, (state, action) => {
      state.productList = action.payload;
    });
  },
});

export const {
  setProductList,
  setProductCategoryList,
  addToCart,
  decrementProductFromCart,
  deleteFromCart,
  favoriteProduct,
} = productSlice.actions;

export default productSlice.reducer;
