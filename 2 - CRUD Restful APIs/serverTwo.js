const mongoose = require("mongoose");
const employees = require("./employee");
const express = require('express');
const app = express();
const PORT = 3002;

app.use(express.json());

const url = "mongodb://localhost:27017/students";
mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", function () {
	console.log("MongoDB connection established successfully");
});

app.post('/books', async (req, res) => {
	const employee = await employees.insertMany(req.body);
	res.status(201).json(employee);
});

app.get('/books/:employeeId?', async (req, res) => {
	try {
		const { employeeId } = req.params;
		const employeeList = employeeId ?
			await employees.findOne({ employeeId }) :
			await employees.find({});
		res.status(201).json(employeeList);
	} catch (error) {
		res.status(500).send(`Something went wrong`);
	}
});

app.patch('/books', async (req, res) => {
	try {
		const employeeList = await employees.find({});
		return res.status(201).json(employeeList);
	} catch (error) {
		res.status(500).send(`Something went wrong`);
	}
});

app.delete('/books/:employeeId?', async (req, res) => {
	try {
		const { employeeId } = req.params;
		if(!employeeId) return res.status(400).send(`bookId is required to delete the book details.`);

		const employeeList = await employees.remove({ employeeId });
		res.status(204).json(employeeList);
	} catch (error) {
		res.status(500).send(`Something went wrong`);
	}
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
	console.log(`http://localhost:${PORT}`);
});
