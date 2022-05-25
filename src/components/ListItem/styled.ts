import styled from "styled-components";

export const Item = styled.div` 
    
  .item {
    border-bottom: .5px solid var(--dt-DarkGrayishBlue);
    color: var(--dt-LightGrayishBlue);
    display: flex;
    align-items: center;
    padding-left: 25px;
    height: 65px;    
  }

  .item label {
    height: 20%;
  }

  .item input[type='checkbox'] {
    opacity: 0;
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

  .selected {
    background-image: var(--CheckBackground);
  }

  .div-selected label {
    text-decoration: line-through;
    color: var(--dt-DarkGrayishBlue);
  }

  .div-selected {
    background-color: var(--dt-darkblue);
  }

  .fa-check {
    font-size: 12px;
    color: white;
    border: 2px solid red;
  }

`