import React from 'react';

const ThemeProvider = ({ theme, children }) => {
  const root = document.documentElement;
  root.style.setProperty('--bg-color', theme === 'dark' ? '#222' : '#fff');
  root.style.setProperty('--text-color', theme === 'dark' ? '#fff' : '#222');

  return <>{children}</>;
};

export default ThemeProvider;
