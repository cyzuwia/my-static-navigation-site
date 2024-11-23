import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header>
      <h1>多功能静态导航网站</h1>
      <nav>
        <Link to="/">首页</Link>
        <Link to="/links">友链</Link>
        <Link to="/search">搜索</Link>
        <Link to="/settings">设置</Link>
      </nav>
      <ThemeToggle />
    </header>
  );
};

export default Header;
