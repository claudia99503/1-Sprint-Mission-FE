import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./ProductList.css";
import useScreenType from "../hooks/useScreenType";
import useFetchProducts from "../hooks/useFetchProducts";
import BestProducts from "./BestProducts";
import AllProducts from "./AllProducts";
import Pagination from "./Pagination";

const ProductList = () => {
  const [sortOrder, setSortOrder] = useState("recent");
  const [productSearch, setProductSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const totalPages = 5;
  const navigate = useNavigate();
  const location = useLocation();
  const isMarketPage = location.pathname === "/items"; // 중고마켓 페이지 여부 확인

  const screenType = useScreenType();

  // 화면 크기에 따라 페이지 크기 설정
  useEffect(() => {
    if (screenType === "desktop") {
      setPageSize(10); // 데스크탑: 10개
    } else if (screenType === "tablet") {
      setPageSize(6); // 태블릿: 6개
    } else {
      setPageSize(4); // 모바일: 4개
    }
  }, [screenType]);

  // 상품 데이터 가져오기
  const { products, bestProducts } = useFetchProducts(
    sortOrder,
    page,
    pageSize,
    productSearch,
    isMarketPage
  );

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="product-list">
      {isMarketPage ? (
        <AllProducts
          products={products}
          page={page}
          setPage={setPage}
          pageSize={pageSize}
          screenType={screenType}
          productSearch={productSearch}
          setProductSearch={setProductSearch}
          sortOrder={sortOrder}
          onSearchSubmit={handleSearchSubmit}
          navigate={navigate}
        />
      ) : (
        <>
          <BestProducts products={bestProducts} screenType={screenType} />
          <AllProducts
            products={products}
            page={page}
            setPage={setPage}
            pageSize={pageSize}
            screenType={screenType}
            productSearch={productSearch}
            setProductSearch={setProductSearch}
            sortOrder={sortOrder}
            onSearchSubmit={handleSearchSubmit}
            navigate={navigate}
          />
        </>
      )}
      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
};

export default ProductList;

