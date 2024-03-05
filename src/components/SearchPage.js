import React, { useState, useEffect } from 'react';
import GiantBombService from '../services/GiantBombService';

const SearchPage = ({ onRent }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const searchGames = async () => {
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

    const handleRent = (game) => {
        onRent(game);
    };

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



