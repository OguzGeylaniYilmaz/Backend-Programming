// @ts-nocheck
import express from "express";
import { IPerson } from "./models/IPerson";
import { IStarship } from "./models/IStarship";
import cors from "cors";

const app = express();
app.use(cors());
const port = 3000;

const people: IPerson[] = [
  { id: 1, name: "Luke Skywalker", age: 19, height: 1.8 },
  { id: 2, name: "Darth Vader", age: 45, height: 1.9 },
  { id: 3, name: "Leia Organa", age: 19, height: 1.7 },
  { id: 4, name: "Han Solo", age: 35, height: 1.8 },
  { id: 5, name: "Chewbacca", age: 200, height: 2 },
  { id: 6, name: "C-3PO", age: 50, height: 1.7 },
  { id: 7, name: "R2-D2", age: 50, height: 1.1 },
  { id: 8, name: "Obi-Wan Kenobi", age: 57, height: 1.8 },
  { id: 9, name: "Yoda", age: 900, height: 0.66 },
  { id: 10, name: "Padmé Amidala", age: 27, height: 1.65 },
];

const starships: IStarship[] = [
  {
    id: 1,
    name: "Millennium Falcon",
    model: "YT-1300",
    manufacturer: "Corellian Engineering Corporation",
  },
  {
    id: 2,
    name: "X-Wing",
    model: "T-65 X-wing starfighter",
    manufacturer: "Incom Corporation",
  },
  {
    id: 3,
    name: "TIE Fighter",
    model: "TIE/ln space superiority starfighter",
    manufacturer: "Sienar Fleet Systems",
  },
  {
    id: 4,
    name: "Star Destroyer",
    model: "Imperial-class Star Destroyer",
    manufacturer: "Kuat Drive Yards",
  },
  {
    id: 5,
    name: "Slave I",
    model: "Firespray-31-class patrol and attack craft",
    manufacturer: "Kuat Systems Engineering",
  },
  {
    id: 6,
    name: "A-Wing",
    model: "RZ-1 A-wing interceptor",
    manufacturer: "Alliance Underground Engineering",
  },
  {
    id: 7,
    name: "B-Wing",
    model: "B-wing starfighter",
    manufacturer: "Slayn & Korpil",
  },
  {
    id: 8,
    name: "Y-Wing",
    model: "BTL Y-wing starfighter",
    manufacturer: "Koensayr Manufacturing",
  },
  {
    id: 9,
    name: "Naboo N-1 Starfighter",
    model: "N-1 starfighter",
    manufacturer: "Theed Palace Space Vessel Engineering Corps",
  },
  {
    id: 10,
    name: "Jedi Starfighter",
    model: "Delta-7 Aethersprite-class light interceptor",
    manufacturer: "Theed Palace Space Vessel Engineering Corps",
  },
];

const planets = [
  { id: 1, name: "Tatooine", climate: "arid", terrain: "desert" },
  { id: 2, name: "Alderaan", climate: "temperate", terrain: "grasslands" },
  { id: 3, name: "Hoth", climate: "frozen", terrain: "ice caves" },
  { id: 4, name: "Dagobah", climate: "murky", terrain: "swamp" },
  { id: 5, name: "Bespin", climate: "temperate", terrain: "gas giant" },
  { id: 6, name: "Endor", climate: "temperate", terrain: "forests" },
  { id: 7, name: "Naboo", climate: "temperate", terrain: "grasslands" },
  { id: 8, name: "Kamino", climate: "rainy", terrain: "ocean" },
  { id: 9, name: "Geonosis", climate: "temperate", terrain: "rocky" },
  { id: 10, name: "Mustafar", climate: "hot", terrain: "lava fields" },
];

app.get("/people", (req, res) => {
  res.json(people);
});

app.get("/starships", (req, res) => {
  res.json(starships);
});

app.get("/planets", (req, res) => {
  res.json(planets);
});

app.post("/starships", express.json(), (req, res) => {
  const newStarship: IStarship = req.body;
  if (!newStarship.name || !newStarship.model || !newStarship.manufacturer) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  newStarship.id = starships.length
    ? starships[starships.length - 1].id + 1
    : 1;
  starships.push(newStarship);
  res.status(201).json(starships);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
