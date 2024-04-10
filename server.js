// Import required modules
const express = require("express");

// Create an Express application
const app = express();

// Define a route
app.get("/", (req, res) => {
  res.send("This is my backend application running on VPS");
});

// Set the server to listen on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
