// Création de l'application Express

import express from "express";

const app = express();

// Déclaration d'une route

const sampleEmployee = {
	name: {
		first: "Charlie",
		last: "Thompson",
	},
	email: "charlie.thompson@example.com",
	picture: {
		medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
	},
};

const getEmployees = (req, res) => {
	res.json({ result: sampleEmployee });
};

app.get("/api/employees", getEmployees);

// Ecoute du port

const port = 3310;

app.listen(port, () => {
	console.log(`Listerning app on port ${port}`);
});
