import Background from "./components/Background/Background";
import Quote from "./components/Quote/Quote";
import Clock from "./components/Clock/Clock";
import Expanded from "./components/Expanded/Expanded";
import Layout from "./components/Layout/Layout";
import Button from "./components/Button/Button";

function App() {
  return (
    <>
      <Background />
      <Layout>
        <Quote />
        <Clock />
        <Expanded />
      </Layout>
    </>
  );
}

export default App;
