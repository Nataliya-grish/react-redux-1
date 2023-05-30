import "./App.css";
import ServiceAddList from "./components/ServiceAddList";
import ServiceList from "./components/ServiceList";
import ServiceFilter from "./components/ServiceFilter";

function App() {
  return (
    <>
      <ServiceAddList />
      <ServiceList />
      <ServiceFilter />
    </>
  );
}

export default App;
