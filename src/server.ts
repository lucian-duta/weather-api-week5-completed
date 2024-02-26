// Import the express module, which is a function that when called, creates a new Express application.
import express from 'express';

// Import the weatherRoute module from the file 'weatherRoute.js' located in the './routes' directory.
// This module is expected to export an Express Router object configured for weather-related routes.

// Call the express function to create a new Express application. This app object encapsulates all the functionality
// to define routes and listen for incoming requests.
const app = express();

// Define a constant for the port number. This is the network port where our server will listen for incoming HTTP requests.
const PORT = 3000;

// Middleware to parse incoming requests with JSON payloads. This line adds a piece of middleware to the Express app
// that automatically parses JSON formatted request bodies and makes the parsed data available under the req.body property.
app.use(express.json());

// Start listening for incoming connections on the defined PORT. The app.listen method takes a port number and a callback
// function that is executed once the server starts listening. In this case, it prints a message to the console indicating
// that the server is running and listening for requests.
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
