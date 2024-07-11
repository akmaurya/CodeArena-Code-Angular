const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connection = require('./db');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Example endpoint
app.get('/api/items', (req, res) => {
    connection.query('SELECT * FROM users', (err, results) => {
        if (err) {
            console.error('Error fetching items:', err);
            res.status(500).send('Server error');
            return;
        }
        res.json(results);
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
