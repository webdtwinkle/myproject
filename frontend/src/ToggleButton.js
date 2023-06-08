import React from 'react';
import './ToggleButton.css';

const ToggleButton = ({ theme, toggleTheme }) => {
  const handleClick = () => {
    toggleTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button onClick={handleClick}>
      {theme === 'dark' ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
    </button>
  );
};

export default ToggleButton;
