//dependencies
const express = require("express");
const htmlRoutes = require("./routes/htmlRoutes");

//server set up
const app = express();
const PORT = process.envPORT || 8000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", htmlRoutes);

// Starts the server to begin listening
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
