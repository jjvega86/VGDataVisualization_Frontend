import Header from "./components/Header";
import { Container } from "@hope-ui/solid";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Container centerContent>
        <Header />
      </Container>
    </>
  );
}

export default App;
