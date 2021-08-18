const express = require('express');
const app = express();
const PORT = 3001;
 
app.get("/", (req, res) => {
	res.status(200).json({
		message: `Hi I'm Raghava Reddy. This is a simple server created.`
	})
});

app.get("/name", (req, res) => {
	res.status(200).send(`Raghava Reddy`);
});

app.get("/email", (req, res) => {
	res.status(200).send(`kodalaraghavareddy@gmail.com`);
});

app.get("/age", (req, res) => {
	res.status(200).send('24');
});

app.get("/bio", (req, res) => {
	res.status(200).json({
		name: 'Raghava Reddy',
		email: 'kodalaraghavareddy@gmail.com',
		age: 24
	})
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
	console.log(`http://localhost:${PORT}`);
});
