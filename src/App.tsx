import "./style.css";
import ItemList from "./components/ItemList";
import Product from "./components/Produtc";
import ShoppingList from "./components/ShoppingList";
import StyleBox from "./components/StyleBox";
import WelcomeMessage from "./components/WelcomeMessage";

const App = () => {
  return (
    <div>
      <WelcomeMessage />
      <ItemList />
      <StyleBox />
      <Product />
      <ShoppingList />
    </div>
  );
};

export default App;
