import { createSignal } from "solid-js";
import { Input } from "@hope-ui/solid";

export default function SearchGames() {
  const [value, setValue] = createSignal("");
  const handleInput = (event) => setValue(event.target.value);

  return (
    <>
      <Input
        value={value()}
        onInput={handleInput}
        placeholder="Enter Games Search:"
        size="sm"
      />
    </>
  );
}
