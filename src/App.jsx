import "./App.css";
import Header from "./components/Header/Header";
import MainRoutes from "./routes/MainRoutes";

function App() {
  return (
    <>
      <Header color="light" light={true} expand="md" container="md"/>
      <MainRoutes/>
    </>
  );
}

export default App;
