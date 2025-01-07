const express = require('express');
const app = express();
const port = 5000;

// Middleware to parse JSON requests
app.use(express.json());

// Serve a static welcome page
app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Welcome</title>
            </head>
            <body>
                <h1>Welcome to My Node.js App!</h1>
                <p>This app is running on port ${port}.</p>
                <p>Try accessing <code>/api/message</code> for a sample API response.</p>
            </body>
        </html>
    `);
});

// A sample API endpoint
app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from the API!' });
});

// A POST endpoint to echo back user input
app.post('/api/echo', (req, res) => {
    const { input } = req.body;
    if (!input) {
        return res.status(400).json({ error: 'Please provide an input.' });
    }
    res.json({ echoed: input });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


// Test Commit
