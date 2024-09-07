import React from "react";
import "./SortOptions.css";

const SortOptions = ({ sortOrder, setPage, screenType }) => {
  const handleSortClick = () => {
    // 모바일에서는 버튼 클릭 시 sort-options를 토글
    if (screenType === "mobile") {
      document.querySelector(".sort-options").classList.toggle("active");
    }
  };

  return (
    <div className="sort-options-container">
      {screenType === "mobile" ? (
        <img
          src="/image/btn_sort.svg"
          alt="Sort Icon"
          onClick={handleSortClick}
        />
      ) : (
        <div className="sort-options">
          <select value={sortOrder} onChange={() => setPage(1)}>
            <option value="recent">최신순</option>
            <option value="popular">인기순</option>
            <option value="low-price">가격 낮은 순</option>
            <option value="high-price">가격 높은 순</option>
          </select>
          <img
            src="/image/down.svg"
            alt="Dropdown Icon"
            className="dropdown-icon"
          />
        </div>
      )}
    </div>
  );
};

export default SortOptions;

