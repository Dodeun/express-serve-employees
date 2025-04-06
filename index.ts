// Création de l'application Express

import express from "express";
import cors from "cors";

const app = express();
const port = 3310;

app.use(cors({ origin: ["http://localhost:5173"] }));

// Déclaration d'une route

const sampleEmployees = [
	{
		name: { first: "Bobby", last: "Brown" },
		email: "bobby.brown@example.com",
		picture: { medium: "https://randomuser.me/api/portraits/med/men/41.jpg" },
	},
	{
		name: { first: "Alice", last: "Smith" },
		email: "alice.smith@example.com",
		picture: { medium: "https://randomuser.me/api/portraits/med/women/52.jpg" },
	},
	{
		name: { first: "John", last: "Doe" },
		email: "john.doe@example.com",
		picture: { medium: "https://randomuser.me/api/portraits/med/men/22.jpg" },
	},
	{
		name: { first: "Emma", last: "Johnson" },
		email: "emma.johnson@example.com",
		picture: { medium: "https://randomuser.me/api/portraits/med/women/75.jpg" },
	},
	{
		name: { first: "James", last: "Williams" },
		email: "james.williams@example.com",
		picture: { medium: "https://randomuser.me/api/portraits/med/men/32.jpg" },
	},
	{
		name: { first: "Sophia", last: "Martinez" },
		email: "sophia.martinez@example.com",
		picture: { medium: "https://randomuser.me/api/portraits/med/women/33.jpg" },
	},
	{
		name: { first: "David", last: "Rodriguez" },
		email: "david.rodriguez@example.com",
		picture: { medium: "https://randomuser.me/api/portraits/med/men/12.jpg" },
	},
	{
		name: { first: "Olivia", last: "Lee" },
		email: "olivia.lee@example.com",
		picture: { medium: "https://randomuser.me/api/portraits/med/women/28.jpg" },
	},
	{
		name: { first: "Michael", last: "Gonzalez" },
		email: "michael.gonzalez@example.com",
		picture: { medium: "https://randomuser.me/api/portraits/med/men/3.jpg" },
	},
	{
		name: { first: "Isabella", last: "Hernandez" },
		email: "isabella.hernandez@example.com",
		picture: { medium: "https://randomuser.me/api/portraits/med/women/19.jpg" },
	},
	{
		name: { first: "Liam", last: "Perez" },
		email: "liam.perez@example.com",
		picture: { medium: "https://randomuser.me/api/portraits/med/men/15.jpg" },
	},
	{
		name: { first: "Mia", last: "Wilson" },
		email: "mia.wilson@example.com",
		picture: { medium: "https://randomuser.me/api/portraits/med/women/44.jpg" },
	},
];

const getEmployees = (req, res) => {
	res.json({ results: sampleEmployees });
};

app.get("/api/employees", getEmployees);

// Ecoute du port

app.listen(port, () => {
	console.log(`Listerning app on port ${port}`);
});
