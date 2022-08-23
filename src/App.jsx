import Header from "./conponents/Header.jsx";
import Button from "./conponents/Button.jsx";
import List from "./conponents/List.jsx";
import Item from "./conponents/Item.jsx";

function App() {
  return (
    <>
      <Header />
      <Button text="Submit" type="submit" danger />
      <Button text="Click!" type="button" />
      <Button text="Reset" type="reset" />
      <Button text="No danger" type="button" danger={false} />
      <List color="papayawhip">
        <Item name="Bulbasur" />
        <Item name="Charmander" />
        <Item name="Squirtle" />
      </List>
      <List color="skyblue">
        <Item name="Bulbasur" />
        <Item name="Charmander" />
        <Item name="Squirtle" />
      </List>
    </>
  );
}

export default App;
