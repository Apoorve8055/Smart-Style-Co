import { Outlet } from "react-router-dom";
import { memo, useEffect } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./MasterLayout.scss";
import { useDispatch } from "react-redux";
import {
  fetchProductCategory,
  fetchProductList,
} from "../../store/productSliceThunks";

const MasterLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductCategory());
    dispatch(fetchProductList());
  }, []);

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default memo(MasterLayout);
