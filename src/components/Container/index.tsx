import { useState } from "react";
import { GlobalStyle } from "../../styles/globals";
import { Main } from "./styles";
import imgSun from '../../assets/icon-sun.svg';
import imgMoon from '../../assets/icon-moon.svg';

export function Container() {
  const [theme, setTheme] = useState('dark');
  const [iconTheme, setIconTheme] = useState(imgSun);

  function handleTheme() {
    setTheme(theme == 'dark' ? 'light' : 'dark');
    setIconTheme(theme == 'dark' ? imgMoon : imgSun);
  }

  return (
    <>
      <GlobalStyle />
      <Main tema={theme}>
        <div className="header"></div>
        <div className="background"></div>
        <div className="todo">
          <div className="title">
            <h1>TODO</h1>
            <img className="icone" src={iconTheme} onClick={handleTheme}></img>
          </div>
        </div>
      </Main>
    </>
  );
}