import { createContext, useState, ReactNode, useEffect, SetStateAction, Dispatch } from "react";

interface ItemProps {
  descricao: string;
  checked: boolean;
  id: number;
}

interface ItemsProviderProps {
  children: ReactNode;
}

interface ItemsData {
  items: ItemProps[];
  setItems: React.Dispatch<React.SetStateAction<ItemProps[]>>;
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}

export const itemsContext = createContext<ItemsData>(
  {} as ItemsData
);

export function ItemsProvider({ children }: ItemsProviderProps) {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState<ItemProps[]>([]);

  useEffect(() => {
    const newitems: ItemProps[] = JSON.parse(localStorage.getItem('items') || '');

    setItems(newitems);
    setCount(newitems.filter(item => !item.checked).length);
  }, []);

  return (
    <itemsContext.Provider value={{ items, setItems, count, setCount }}>
      {children}
    </itemsContext.Provider>
  )
}