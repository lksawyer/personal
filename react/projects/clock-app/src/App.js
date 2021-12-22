import Container from "./components/Container/Container";
import Quote from "./components/Quote/Quote";
import Clock from "./components/Clock/Clock";
import Button from "./components/Button/Button";
import Expanded from "./components/Expanded/Expanded";

function App() {
  return (
    <>
      <Container>
        <Quote />
        <Clock />
        <Button />
        <Expanded />
      </Container>
    </>
  );
}

export default App;
