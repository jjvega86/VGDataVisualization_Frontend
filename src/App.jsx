import Header from "./components/Header";
import { Box, Container } from "@hope-ui/solid";
import NavBar from "./components/NavBar";
import SearchGames from "./components/SearchGames";

function App() {
  return (
    <>
      <NavBar />
      <Container centerContent>
        <Box>
          <Header />
          <SearchGames />
        </Box>
      </Container>
    </>
  );
}

export default App;
