import "./App.css";
import PeopleList from "./components/PeopleList";
import PlanetList from "./components/PlanetList";
import StarShipForm from "./components/StarshipForm";
import StarshipsList from "./components/StarshipsList";

function App() {
  return (
    <div>
      <PeopleList />
      <StarShipForm />
      <StarshipsList />
      <PlanetList />
    </div>
  );
}

export default App;
