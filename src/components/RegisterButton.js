import React from 'react';
import './RegisterButton.css';

const RegisterButton = ({ navigate }) => (
  <button className="register-button" onClick={() => navigate('/registration')}>
    상품 등록하기
  </button>
);

export default RegisterButton;

