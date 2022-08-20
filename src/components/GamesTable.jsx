import {
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  Tfoot,
} from "@hope-ui/solid";

import { For } from "solid-js";

const dummyData = [
  {
    id: 1,
    name: "Nintendogs",
    platform: "DS",
    year: 2005,
    genre: "Simulation",
    publisher: "Nintendo",
  },
  {
    id: 2,
    name: "Call of Duty: Black Ops II",
    platform: "X360",
    year: 2012,
    genre: "Shooter",
    publisher: "Activision",
  },
  {
    id: 3,
    name: "Grand Theft Auto V",
    platform: "PS3",
    year: 2013,
    genre: "Action",
    publisher: "Take-Two Interactive",
  },
];

export default function GamesTable() {
  return (
    <Table striped="odd" highlightOnHover>
      <TableCaption>All Games</TableCaption>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Platform</Th>
          <Th>Year</Th>
          <Th>Genre</Th>
          <Th>Publisher</Th>
        </Tr>
      </Thead>
      <Tbody>
        <For each={dummyData}>
          {(game) => (
            <Tr>
              <Td>{game.name}</Td>
              <Td>{game.platform}</Td>
              <Td numeric>{game.year}</Td>
              <Td>{game.genre}</Td>
              <Td>{game.publisher}</Td>
            </Tr>
          )}
        </For>
      </Tbody>
      <Tfoot>
        <Tr>
          <Th>Name</Th>
          <Th>Platform</Th>
          <Th>Year</Th>
          <Th>Genre</Th>
          <Th>Publisher</Th>
          <Th></Th>
        </Tr>
      </Tfoot>
    </Table>
  );
}
