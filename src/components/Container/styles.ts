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
    top: 20%;
    left: 50%;
    height: 70vh;
    padding: 0;
    transform: translateX(-50%);
    width: 40.62rem;

    @media (max-width: 720px){
      width: 25rem;
    }

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

    .list {
      border-radius: 5px;
    }

    .box{
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }

    .item,
    .item-head,
    .item-foot {
      width: 100%;
      height: 6vh;
    }

    .item-foot div {    
      width: 33%;   
      
      @media (max-width: 720px){
        width: 40%;   
      }
    }

    .text-right{
      text-align: right;
    }

    .text-foot {
      cursor: pointer;
      font-size: 14px;
      color: var(--dt-DarkGrayishBlue);
      transition: all .3s;
    }
    
    .text-foot:hover {
      color: var(--BrightBlue);
    }

    .filterActive {
      color: var(--BrightBlue);
    }

    .foot-center {      
      justify-content: space-between;
      display: flex;      

      @media (max-width: 720px){
        display: none;
      }
    }


    .item {
      border-bottom: .5px solid ${(props) => `var(${ props.tema == 'dark' ? '--dt-DarkGrayishBlue' : '--lt-LightGrayishBlue' })`};

      display: flex;
      align-items: center;
      padding-left: 25px;
      height: 65px;

      color: ${(props) => `var(${ props.tema == 'dark' ? '--dt-LightGrayishBlue' : '--lt-VeryDarkGrayishBlue' })`};
      background-color: ${(props) => `var(${ props.tema == 'dark' ? '--dt-VeryDarkDesaturatedBlue' : '--lt-VeryLightGray' })`};
    }

    .item span {
      display: inline-block;
      width: 23px;
      height: 23px;
      border-radius: 50%;
      border: 1px solid var(--dt-DarkGrayishBlue);
      margin-right: 20px;
      display: flex;
      justify-content: center;
      padding: 6px 0 0 1px;
    }


    .item label {
      height: 20%;
    }

    .item input[type='checkbox'] {
      opacity: 0;
    }

    .item-foot {
      //background-color: var(--dt-VeryDarkDesaturatedBlue);
      border-radius: 5px;
      height: 5vh;
      display: flex;
      justify-content: space-between;
      align-items: center;

      padding: 0 1.5rem;

      color: ${(props) => `var(${ props.tema == 'dark' ? '--dt-LightGrayishBlue' : '--lt-VeryDarkGrayishBlue' })`};
      background-color: ${(props) => `var(${ props.tema == 'dark' ? '--dt-VeryDarkDesaturatedBlue' : '--lt-VeryLightGray' })`};
    }

    .newtarefa {
      opacity: 1;
      background-color: transparent;
      border: 2px solid transparent;      
      padding-top: 5px;
      width: 100%;
      font-size: 1rem;
      color: ${(props) => `var(${ props.tema == 'dark' ? '--dt-LightGrayishBlue' : '--lt-VeryDarkGrayishBlue' })`};
    }

    .newtarefa:focus,
    .newtarefa:focus {
      box-shadow: 0 0 0 0;
      outline: 0;
      border: 2px solid transparent;
    }

    .selected {
      background-image: var(--CheckBackground);
    }

    .div-selected label {
      text-decoration: line-through;
      color: ${(props) => `var(${ props.tema == 'dark' ? '--dt-DarkGrayishBlue' : '--lt-DarkGrayishBlue' })`};      
    }

    .div-selected {
      background-color: ${(props) => `var(${ props.tema == 'dark' ? '--dt-darkblue' : '--lt-VeryLightGrayishBlue' })`};
    }

    .fa-check {
      font-size: 12px;
      color: white;
    }

    .list div:nth-child(1) {
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }

    .item-head {
      background-color: ${(props) => `var(${ props.tema == 'dark' ? '--dt-darkblue' : '--lt-VeryLightGray' })`};
      margin-bottom: 20px;
      border-radius: 5px;
      border-bottom: 1px solid transparent;
      height: 65px;
      
    }

    .title {
      position: absolute;
      top: -90px;
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    .title h1 {
      color: white;
      font-size: 35px;
      font-weight: 700;
      letter-spacing: 15px;
    }

    .icon {
      width: 28px;
      height: 28px;
      background-image: url(images/icon-sun.svg);
      background-size: cover;
    }

    .item label,
    .item span {
      cursor: pointer;
    } 

  
  }
`

