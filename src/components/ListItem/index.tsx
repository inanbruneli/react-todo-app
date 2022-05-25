
import { itemsContext } from "../../ItemsContext";
import { useContext } from 'react';

interface ItemProps {
  id: number;
  descricao: string;
  checked: boolean;
}

export function ListItem({ descricao, checked, id }: ItemProps) {
  const classes = checked ? 'item div-selected' : 'item';
  const { items } = useContext(itemsContext);
  const { setItems } = useContext(itemsContext);
  const { setCount } = useContext(itemsContext);

  function handleCheck() {
    let newItems = [];
    for (let item of items) {
      if (item.id == id) item.checked = !checked;
      newItems.push(item)
    }

    setItems(newItems);
    setCount(newItems.filter(item => !item.checked).length);
    localStorage.setItem('items', JSON.stringify(newItems));
  }

  return (
    <div className={classes} onClick={handleCheck}>
      <span className={checked ? 'selected' : ''}>

      </span>
      <label>{descricao}</label>
      <input type="checkbox" className='item-input' />
    </div>
  )
}