import React from 'react';
import { createRoot } from 'react-dom/client';  // React 18에서 createRoot를 사용
import './index.css';
import App from './App';

// root DOM 노드를 가져와서 createRoot로 렌더링
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
