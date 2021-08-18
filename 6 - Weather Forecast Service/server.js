const express = require('express');
const request = require('request');
const config = require('./config');
const app = express();

app.use(express.json());

app.get("/weatherForecast", (req, res) => {
	const { location } = req.query;

	if(!location){
		return res.status(400).json({
			success: false,
			error: 'No location found to forecast',
			message: 'Please pass a location in the query to forecast'
		})
	}

	const options = {
		'method': 'GET',
		'url': `http://api.weatherstack.com/current?access_key=${config.apiKey}&query=${location}`,
		json: true,
	};

	request(options, function (error, response) {
		if (error) throw new Error(error);
		const { location, current } = response.body;
		res.status(200).json({
			location,
			current
		})
	});
});

app.listen(config.PORT, () => {
	console.log(`Server running on port ${config.PORT}`);
	console.log(`http://localhost:${config.PORT}`);
});
