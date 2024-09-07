import React from "react";
import './AllProducts.css';
import SearchBar from './SearchBar';
import RegisterButton from './RegisterButton';
import SortOptions from './SortOptions';

const AllProducts = ({
  products,
  page,
  setPage,
  screenType,
  productSearch,
  setProductSearch,
  sortOrder,
  onSearchSubmit,
  navigate,
}) => {
  return (
    <div className="allProductsContainer">

      {/* 데스크탑 및 태블릿에서 "판매 중인 상품"과 RegisterButton, SearchBar, SortOptions가 같은 줄에 배치 */}
      {screenType !== 'mobile' && (
        <div className="allProductHeader">
          <div className="headerMenu">
            <h2 className="section-title">판매 중인 상품</h2>
            <RegisterButton navigate={navigate} />
            <SearchBar 
              productSearch={productSearch}
              setProductSearch={setProductSearch}
            />
            <SortOptions
              sortOrder={sortOrder}
              setPage={setPage}
              screenType={screenType}
            />
          </div>
        </div>
      )}

      {/* 모바일 버전에서는 "판매 중인 상품"과 RegisterButton이 한 줄에, SearchBar와 SortOptions가 두 번째 줄에 배치 */}
      {screenType === 'mobile' && (
        <>
          <div className="headerMenu">
            <h2 className="section-title">판매 중인 상품</h2>
            <RegisterButton navigate={navigate} />
          </div>

          <div className="searchFormWrapper">
            <SearchBar
              productSearch={productSearch}
              setProductSearch={setProductSearch}
            />
            <SortOptions
              sortOrder={sortOrder}
              setPage={setPage}
              screenType={screenType}
            />
          </div>
        </>
      )}

      {/* 상품 목록 */}
      <div className="allProductsContents">
        {products.map((item) => (
          <div key={item._id || item.id} className="allProducts">
            <img src={item.images} alt={item.name} className="productImg" />
            <h2 className="productTitle">{item.name}</h2>
            <h2 className="productPrice">{item.price.toLocaleString("ko-KR")}원</h2>
            <span className="like">
              <img src="../image/heart.svg" alt="좋아요" />
              {item.favoriteCount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;

