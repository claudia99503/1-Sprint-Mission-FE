import React from "react";
import './BestProducts.css';

const BestProducts = ({ products, screenType }) => {
  const displayedProducts = screenType === 'desktop' 
    ? products.slice(0, 4)
    : screenType === 'tablet' 
    ? products.slice(0, 2)
    : products.slice(0, 1);

  return (
    <div className="bestProductsContainer">
      {/* "베스트 상품" 글자는 ProductsBox 위에 위치 */}
      <h2 className="section-title">베스트 상품</h2>
      <div className="productsBox">
        {displayedProducts.map((item) => (
          <div key={item._id || item.id} className="products">
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

export default BestProducts;

