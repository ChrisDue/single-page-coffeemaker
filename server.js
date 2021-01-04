const { response } = require("express");
const express = require("express");
const path = require("path");
const app = express();

// Middleware for pathing
app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));
// Default forwarding
app.get("/*", (req, res) => {
    res.sendFile(path.resolve("frontend", "index.html"));
})
// Set port to run on
const port = 8080;
app.listen(process.env.PORT || port, () => console.log("Server running on " + port + ", nice..."));

// API settings
app.use(express.json({ limit: '1mb' }));
// API Test triggern
app.post('/api', (request, response) => {
    console.log("Server: I got a request!");
    console.log(request.body);
    const data = request.body;
    response.json({
        message: 'HeLlOoO',
        status: 'SuCcEsS'
    });
});