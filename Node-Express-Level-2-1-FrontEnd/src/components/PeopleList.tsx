import React, { useEffect } from "react";

export interface Person {
  id: number;
  name: string;
  age: number;
  height: number;
}

const PeopleList = () => {
  const [people, setPeople] = React.useState<Person[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/people")
      .then((response) => response.json())
      .then((data) => {
        setPeople(data);
      })
      .catch((error) => {
        console.error("Error fetching people:", error);
      });
  }, []);

  return (
    <div>
      <h2>People</h2>
      <div className="card-grid">
        {people.map((p) => (
          <div className="card" key={p.id}>
            <strong>{p.name}</strong>
            <p>Age: {p.age}</p>
            <p>Height: {p.height}m</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeopleList;
