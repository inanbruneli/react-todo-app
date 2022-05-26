import { Container } from "./components/Container";
import { ItemsProvider } from "./ItemsContext";


export function App() {
  const itemsStart = localStorage.getItem('items');
  if (!itemsStart) localStorage.setItem('items', JSON.stringify([]));

  return (
    <ItemsProvider >
      <Container />
    </ItemsProvider>
  );
}