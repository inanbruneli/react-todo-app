import styled from "styled-components";
import imgDark from '../../assets/bg-desktop-dark.jpg';
import imgLight from '../../assets/bg-desktop-light.jpg';

interface MainProps{
  tema: string;
}

export const Main = styled.main<MainProps>` 

  width: 100vw;
  height: 100vh;

  .header {
    background-size: cover;
    background-repeat: no-repeat;
    height: 35vh;
    background-image: ${(props) => `url(${ props.tema == 'dark' ? imgDark : imgLight  })`};    
  }

  .background {
    height: 65vh;
    background-color: ${(props) => `var(${ props.tema == 'dark' ? '--dt-VeryDarkBlue' : '--lt-VeryLightGray' })`}; 
  }

  .todo {
    position: absolute;
    top: 10%;
    left: 50%;
    height: 70vh;
    padding: 0;
    transform: translateX(-50%);
    width: 650px;

    .title {
      width: 100%;
      display: flex;
      justify-content: space-between;      
    }

    .title h1 {
      color: white;
      font-size: 2.2rem;
      font-weight: 700;
      letter-spacing: 0.9rem;
    }

    .icone {
      width: 1.8rem;
      height: 1.8rem;
      transition: .2s;
      cursor: pointer;

      &:hover{
        filter: brightness(0.9);
        transform: scale(1.08);
      }
    }
  
  }
`

