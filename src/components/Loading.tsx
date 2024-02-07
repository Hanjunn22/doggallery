import React from 'react';

const Loading: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ textAlign: 'center' }}>
        <p>Loading...</p>
        {/* 여기에 로딩 인디케이터나 스피너를 추가 */}
      </div>
    </div>
  );
};

export default Loading;
