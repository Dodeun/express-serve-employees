// Création de l'application Express

import express from "express";
import cors from "cors";

const app = express();

app.use(cors({ origin: ["http://localhost:5173"] }));

// Déclaration d'une route

const sampleEmployee = {
	name: {
		first: "Bobby",
		last: "Brown",
	},
	email: "bobby.brown@example.com",
	picture: {
		medium: "https://randomuser.me/api/portraits/med/men/41.jpg",
	},
};

const getEmployees = (req, res) => {
	res.json({ results: [sampleEmployee] });
};

app.get("/api/employees", getEmployees);

// Ecoute du port

const port = 3310;

app.listen(port, () => {
	console.log(`Listerning app on port ${port}`);
});
