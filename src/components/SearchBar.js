import React from 'react';
import './SearchBar.css';

const SearchBar = ({ productSearch, setProductSearch }) => (
  <div className="search-bar">
    <img src="/image/glass.svg" alt="Search Icon" className="search-icon" />
    <input
      type="text"
      placeholder="검색할 상품을 입력해주세요"
      value={productSearch}
      onChange={(e) => setProductSearch(e.target.value)}
    />
  </div>
);

export default SearchBar;

