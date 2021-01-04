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
app.listen(process.env.PORT || 8080, () => console.log("Server running, nice..."));

// API settings
app.use(express.json({ limit: '1mb' }));
app.post('/api', (request, response) => {
    console.log("I got a request!");
    console.log(request.body);
    const data = request.body;
    response.json({
        status: 'success',
        message: 'Erm, hi?'
    });
});