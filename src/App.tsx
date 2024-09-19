import "./style.css";
import ItemList from "./components/ItemList";
import Product from "./components/Produtc";
import ShoppingList from "./components/ShoppingList";
import StyleBox from "./components/StyleBox";
import WelcomeMessage from "./components/WelcomeMessage";

const App = () => {
  const termek = {
    name: "Thermonukleáris bomba",
    price: 0,
  };
  return (
    <div>
      <WelcomeMessage />
      <ItemList />
      <StyleBox />
      <Product {...termek}/>
      <ShoppingList />
    </div>
  );
};

export default App;
