import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../contexts/ThemeContext';

const StyledThemeToggle = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 2px solid var(--green);
  background-color: var(--navy);
  color: var(--green);
  cursor: pointer;
  transition: var(--transition);

  &:hover {
    background-color: var(--green);
    color: var(--navy);
    transform: translateY(-2px);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px var(--green-tint);
  }

  svg {
    width: 20px;
    height: 20px;
    transition: var(--transition);
  }

  @media (max-width: 768px) {
    top: 15px;
    right: 15px;
    width: 40px;
    height: 40px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
    />
  </svg>
);

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <StyledThemeToggle
      onClick={toggleTheme}
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}>
      {isDarkMode ? <SunIcon /> : <MoonIcon />}
    </StyledThemeToggle>
  );
};

export default ThemeToggle;
