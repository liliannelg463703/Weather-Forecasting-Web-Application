// Import necessary libraries
const express = require('express');
const bodyParser = require('body-parser');
const weatherForecastModel = require('./weatherForecastModel');

// Initialize the Express app
const app = express();
const port = 3000;

// Middleware for parsing JSON data
app.use(bodyParser.json());

// Define routes
app.get('/weather', async (req, res) => {
    try {
        const { location, timeframe } = req.query;
        // Call the function to get weather forecast
        const forecast = await weatherForecastModel.getForecast(location, timeframe);
        res.json({ forecast });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
