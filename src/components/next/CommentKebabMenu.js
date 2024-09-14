import React, { useState } from 'react';
import styles from './CommentKebabMenu.module.css';

const CommentKebabMenu = ({ commentId, onEdit, onDelete }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleKebabClick = () => {
    setShowMenu(!showMenu); // 케밥 버튼 클릭 시 토글
  };

  return (
    <div className={styles.container}>
      <img
        src="/image/kebab.svg"
        alt="Kebab Icon"
        className={styles.kebabIcon}
        onClick={handleKebabClick}
      />
      {showMenu && (
        <div className={styles.kebabMenu}>
          <div className={styles.menuItem} onClick={onEdit}>댓글 수정</div>
          <div className={styles.menuItem} onClick={onDelete}>댓글 삭제</div>
        </div>
      )}
    </div>
  );
};

export default CommentKebabMenu;
