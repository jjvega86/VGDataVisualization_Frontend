import Header from "./components/Header";
import { Box, Container } from "@hope-ui/solid";
import NavBar from "./components/NavBar";
import SearchGames from "./components/SearchGames";
import GamesTable from "./components/GamesTable";

function App() {
  return (
    <>
      <NavBar />
      <Container centerContent>
        <Box>
          <Header />
          <SearchGames />
        </Box>
        <Box marginTop="2rem">
          <GamesTable />
        </Box>
      </Container>
    </>
  );
}

export default App;
