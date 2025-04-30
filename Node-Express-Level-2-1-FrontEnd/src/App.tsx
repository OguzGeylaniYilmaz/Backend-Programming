import "./App.css";
import PeopleList from "./components/PeopleList";
import PlanetList from "./components/PlanetList";
import StarshipsList from "./components/StarshipsList";

function App() {
  return (
    <div>
      <PeopleList />
      <StarshipsList />
      <PlanetList />
    </div>
  );
}

export default App;
