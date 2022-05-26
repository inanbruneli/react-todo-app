import { Container } from "./components/Container";
import { ItemsProvider } from "./ItemsContext";
localStorage.setItem('items', JSON.stringify([]))

export function App() {
  return (
    <ItemsProvider >
      <Container />
    </ItemsProvider>
  );
}