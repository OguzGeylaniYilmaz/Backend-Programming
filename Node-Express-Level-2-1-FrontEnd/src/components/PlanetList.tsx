import { useEffect, useState } from "react";

export interface Planet {
  id: number;
  name: string;
  climate: string;
  terrain: string;
}

const PlanetList = () => {
  const [planets, setPlanets] = useState<Planet[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/planets")
      .then((res) => res.json())
      .then(setPlanets)
      .catch(console.error);
  }, []);
  return (
    <div>
      <h2>Planets</h2>
      <div className="card-grid">
        {planets.map((p) => (
          <div className="card" key={p.id}>
            <strong>{p.name}</strong>
            <p>Climate: {p.climate}</p>
            <p>Terrain: {p.terrain}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanetList;
