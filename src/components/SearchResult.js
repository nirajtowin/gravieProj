import React from 'react';

const SearchResult = ({ game, onRent }) => {
    return (
        <div>
            <img src={game.image.thumb_url} alt={game.name} />
            <p>{game.name}</p>
            <p>{game.deck}</p>
            <button onClick={onRent}>Rent</button>
        </div>
    );
};

export default SearchResult;
