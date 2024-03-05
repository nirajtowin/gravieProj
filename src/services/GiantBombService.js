// GiantBombService.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/api'; // Update with your server's URL

const GiantBombService = {
    searchGames: async ({ query, format, field_list, limit, page, resources, subscriber_only }) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/search`, {
                params: {
                    query,
                    format: format || 'json',
                    field_list,
                    limit: limit || 10,
                    page,
                    resources,
                    subscriber_only,
                },
            });

            // Check if the expected array is present in the response
            const resultsArray = response.data && response.data.results ? response.data.results : [];

            return resultsArray;
        } catch (error) {
            console.error('Error searching games:', error);
            return [];
        }
    },
    // Add more methods for handling other API requests if needed
};

export default GiantBombService;
