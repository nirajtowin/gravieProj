import React, { useState, useEffect } from 'react';
import GiantBombService from '../services/GiantBombService';
// Define the SearchPage component
const SearchPage = ({ onRent }) => {

// State to manage the search term input
const [searchTerm, setSearchTerm] = useState('');
// State to store the search results
    const [searchResults, setSearchResults] = useState([]);
// Function to search games using the GiantBomb API
    const searchGames = async () => {
        // Call the searchGames function from the GiantBombService
        const results = await GiantBombService.searchGames({
            query: searchTerm,
            format: 'json',
            field_list: 'name,image,deck',
            limit: 50,
            page: 1,
            resources: 'game',
            subscriber_only: false,
        });

        setSearchResults(results);
    };
    
// Function to handle renting a game
    const handleRent = (game) => {
        onRent(game);
    };
// Render the SearchPage component
    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={searchGames}>Search</button>
            {searchResults.map((game) => (
                <div key={game.id}>
                    <img src={game.image.thumb_url} alt={game.name} />
                    <p>{game.name}</p>
                    <p>{game.deck}</p>
                    <button onClick={() => handleRent(game)}>Rent</button>
                </div>
            ))}
        </div>
    );
};

export default SearchPage;



