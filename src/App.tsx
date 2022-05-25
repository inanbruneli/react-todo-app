import { Container } from "./components/Container";
import { ItemsProvider } from "./ItemsContext";

export function App() {
  return (
    <ItemsProvider >
      <Container />
    </ItemsProvider>
  );
}