import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import "./App.css";
import ThemeContextProvider from "./Context/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Header />
        <Content />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
