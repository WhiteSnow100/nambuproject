import React from 'react';
import './App.css'; // 스타일링은 별도의 CSS 파일에서 관리

function App() {
  return (
    <div className="app">
      {/* 상단 영역 */}
      <header className="header">
        <div className="header-left">
          <p>Welcome, User!</p>
        </div>
        <div className="header-right">
          <button className="home-button">Home</button>
          <button className="login-button">Login</button>
        </div>
      </header>

      {/* 중간 영역 */}
      <nav className="menu">
        <ul>
          <li>Menu Item 1</li>
          <li>Menu Item 2</li>
          <li>Menu Item 3</li>
        </ul>
      </nav>

      {/* 하단 영역 */}
      <main className="main-content">
        <h2>Main Features</h2>
        <div className="features">
          <button>Feature 1</button>
          <button>Feature 2</button>
          <button>Feature 3</button>
        </div>
      </main>
    </div>
  );
}

export default App;
