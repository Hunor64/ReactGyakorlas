import ItemList from "./components/ItemList";
import StyleBox from "./components/StyleBox";
import WelcomeMessage from "./components/welcomeMessage";
const App = () => {
  return (
    <div>
      <WelcomeMessage />
      <ItemList />
      <StyleBox />
    </div>
  );
};

export default App;
