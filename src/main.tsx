import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// 루트 DOM 요소를 가져옵니다.
const container = document.getElementById('root');

// createRoot를 사용해 루트를 생성합니다. (!container 처리는 TypeScript 등에서 타입 안정성을 위해 추가됩니다.)
const root = createRoot(container!);

// 루트에 App 컴포넌트를 렌더링합니다.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
