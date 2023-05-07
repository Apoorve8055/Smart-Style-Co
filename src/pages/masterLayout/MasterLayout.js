import { Outlet } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { getProductCategory, getProductList } from "../../services/api";
import "./MasterLayout.scss";
import { useDispatch } from "react-redux";
import {
  setProductCategoryList,
  setProductList,
} from "../../store/productSlice";

const MasterLayout = () => {
  const dispatch = useDispatch();
  const fetchData = useCallback(async () => {
    try {
      const [productCategory, productList] = await Promise.all([
        getProductCategory(),
        getProductList(),
      ]);
      dispatch(setProductCategoryList(productCategory?.data));
      dispatch(setProductList(productList?.data));
    } catch (error) {
      console.error("Error: ", error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MasterLayout;
