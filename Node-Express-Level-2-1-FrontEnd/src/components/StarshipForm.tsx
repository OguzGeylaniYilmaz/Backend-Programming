import { useState } from "react";

interface StarShipForm {
  name: string;
  model: string;
  manufacturer: string;
}

const StarShipForm = () => {
  const [starship, setStarship] = useState<StarShipForm>({
    name: "",
    model: "",
    manufacturer: "",
  });

  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setStarship((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null); // Reset error state on new submission
    try {
      fetch("http://localhost:3000/starships", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(starship),
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="form-container">
      <h2 className="form-title">New Starship</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            value={starship.name}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="model">Model</label>
          <input
            id="model"
            name="model"
            value={starship.model}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="manufacturer">Manufacturer</label>
          <input
            id="manufacturer"
            name="manufacturer"
            value={starship.manufacturer}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <button type="submit" className="form-button">
          Create
        </button>
        {error && <p className="form-error">{error}</p>}
      </form>
    </section>
  );
};

export default StarShipForm;
