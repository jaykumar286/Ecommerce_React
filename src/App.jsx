import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
function App() {
  return (
    <>
      <Header color="light" light={true} expand="md" container="md"/>
      <Home/>
    </>
  );
}

export default App;
