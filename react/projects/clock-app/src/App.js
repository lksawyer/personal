import Container from "./components/Container/Container";
import Quote from "./components/Quote/Quote";
import Clock from "./components/Clock/Clock";
import Button from "./components/Button/Button";

function App() {
  return (
    <>
      <Container>
        <Quote />
        <Clock />
        <Button />
      </Container>
    </>
  );
}

export default App;
