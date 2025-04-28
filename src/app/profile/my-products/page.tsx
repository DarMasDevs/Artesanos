"use client";
import React from "react";
import MyProducts from "@/components/Profile/MyProducts";
import { Products, RootState } from "@/types/types";
import { useSelector } from "react-redux";
import { data } from "../../../../public/data";

const MyProductsPage = () => {
  const userProfile = useSelector(
    (state: RootState) => state.userReducer?.user,
  );
  const productByUser = data.products.filter(
    (product: Products) => product.userId === userProfile?._id,
  );
  

  return (
    <div>
      <MyProducts productByUser={productByUser} />
    </div>
  );
};

export default MyProductsPage;
