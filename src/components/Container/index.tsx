import { useContext, useEffect, useState } from "react";
import { GlobalStyle } from "../../styles/globals";
import { Main } from "./styles";
import imgSun from '../../assets/icon-sun.svg';
import imgMoon from '../../assets/icon-moon.svg';
import { ListItem } from "../ListItem";
import { itemsContext } from "../../ItemsContext";

export function Container() {
  const { items } = useContext(itemsContext);
  const { setCount } = useContext(itemsContext);
  const { setItems } = useContext(itemsContext);
  const { count } = useContext(itemsContext);

  const [theme, setTheme] = useState('dark');
  const [iconTheme, setIconTheme] = useState(imgSun);
  const [input, setInput] = useState('');
  const [backup, setBackup] = useState<ItemProps[]>(items);
  const [filtro, setFiltro] = useState('');
  const [active, setActive] = useState('text-foot active');
  const [completed, setCompleted] = useState('text-foot completed');
  const [all, setAll] = useState('text-foot all filterActive');

  function handleTheme() {
    setTheme(theme == 'dark' ? 'light' : 'dark');
    setIconTheme(theme == 'dark' ? imgMoon : imgSun);
  }

  function addItem(key: number) {
    if (key == 9 || key == 13) {
      const newItem = {
        id: items.length == 0 ? 1 : items[items.length - 1].id + 1,
        descricao: input,
        checked: false,
      }

      const allItems = items;
      allItems.push(newItem);
      setItems(allItems);
      setCount(allItems.filter(item => !item.checked).length);
      setInput('');
      localStorage.setItem('items', JSON.stringify(allItems));
    }
  }

  function clearCompleted() {
    const newItems = items.filter(item => !item.checked);
    setItems(newItems);
    setBackup(newItems);
    setCount(newItems.filter(item => !item.checked).length);
    localStorage.setItem('items', JSON.stringify(newItems));
  }

  interface ItemProps {
    id: number;
    descricao: string;
    checked: boolean;
  }

  function filter(param: string) {
    if (backup.length == 0) setBackup(items);

    if (param == filtro || param == '') {

      setFiltro('');
      setItems(backup);

      setActive('text-foot active');
      setCompleted('text-foot completed');
      setAll('text-foot all filterActive');
    } else {
      setFiltro(param);

      const bool = param == 'completed';
      let newItems = [];
      if (backup.length > 0) {
        newItems = backup.filter(item => item.checked == bool);
      } else {
        newItems = items.filter(item => item.checked == bool);
      }

      setItems(newItems);

      if (param == 'active') {
        setActive('text-foot active filterActive');
        setCompleted('text-foot completed');
        setAll('text-foot all ');
      } else {
        setActive('text-foot active ');
        setCompleted('text-foot completed filterActive');
        setAll('text-foot all');
      }
    }
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

          <div className="item-head item">
            <span></span>
            <input type="text" className="newtarefa" placeholder="Create a new todo..."
              onKeyDown={(e) => addItem(e.keyCode)}
              onChange={(e) => setInput(e.target.value)}
              value={input} />
          </div>

          <div className="box">
            <div className="list">

              {items.map(dados => {
                return <ListItem
                  key={dados.id}
                  id={dados.id}
                  descricao={dados.descricao}
                  checked={dados.checked} />
              })}

            </div>

            <div className="item-foot">
              <div className="text-left foot-left">
                <h6 className="text-foot items-left">{count} items left</h6>
              </div>
              <div className="text-center foot-center">
                <h6 className={all} onClick={() => filter('')}>All</h6>
                <h6 className={active} onClick={() => filter('active')}>Active</h6>
                <h6 className={completed} onClick={() => filter('completed')}>Completed</h6>
              </div>
              <div className="text-right">
                <h6 className="text-foot" onClick={clearCompleted}>Clear Completed</h6>
              </div>
            </div>
          </div>

        </div>
      </Main>
    </>
  );
}