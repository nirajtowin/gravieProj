// server.js

const express = require('express');
const cors = require('cors'); // Import the cors middleware
const axios = require('axios');

const app = express();
const port = 3001;

app.use(cors());

// Replace 'YOUR_GIANT_BOMB_API_KEY' with your actual Giant Bomb API key
const GIANT_BOMB_API_KEY = '***********************';

app.use(express.json());

app.get('/api/search', async (req, res) => {
    try {
        const { format, field_list, limit, page, query, resources, subscriber_only } = req.query;

        const response = await axios.get('https://www.giantbomb.com/api/search/', {
            params: {
                api_key: GIANT_BOMB_API_KEY,
                format: format || 'json',
                field_list,
                limit: limit || 10,
                page,
                query,
                resources,
                subscriber_only,
            },
        });

        res.json(response.data);
    } catch (error) {
        console.error('Error proxying request:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
