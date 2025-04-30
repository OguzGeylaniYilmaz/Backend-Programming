import { useEffect, useState } from "react";

export interface StarShip {
  id: number;
  name: string;
  model: string;
  manufacturer: string;
}

export default function StarshipsList() {
  const [starships, setStarships] = useState<StarShip[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/starships")
      .then((res) => res.json())
      .then(setStarships)
      .catch(console.error);
  }, []);

  return (
    <div>
      <h2>Starships</h2>
      <div className="card-grid">
        {starships.map((s) => (
          <div className="card" key={s.id}>
            <strong>{s.name}</strong>
            <p>Model: {s.model}</p>
            <p>Manufacturer: {s.manufacturer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
