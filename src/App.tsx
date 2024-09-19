import "./style.css";
import ItemList from "./components/ItemList";
import Product from "./components/Product";
import ShoppingList from "./components/ShoppingList";
import StyleBox from "./components/StyleBox";
import WelcomeMessage from "./components/WelcomeMessage";

const App = () => {
  const termek = {
    name: "Thermonukleáris bomba",
    price: 0,
  };
  const tobbTermekek = [
    { name: "Apple", quantity: 5 },
    { name: "Banana", quantity: 3 },
    { name: "Orange", quantity: 2 },
];
  return (
    <div>
      <WelcomeMessage />
      <ItemList />
      <StyleBox />
      <Product {...termek}/>
      <ShoppingList props={tobbTermekek} />
    </div>
  );
};

export default App;
