
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
import SearchPage from './components/SearchPage';
import CheckoutPage from './components/CheckoutPage';

const App = () => {
  // State to keep track of rented games
  const [rentedGames, setRentedGames] = useState([]);

  // Function to add a game to the rented games list
  const handleRent = (game) => {
    setRentedGames((prevRentedGames) => [...prevRentedGames, game]);
  };

  // Function to remove a game from the rented games list
  const handleReturn = (gameId) => {
    setRentedGames((prevRentedGames) =>
        prevRentedGames.filter((game) => game.id !== gameId)
    );
  };

  // Function to clear all rented games
  const handleClearRentedGames = () => {
    setRentedGames([]);
  };

  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Search</Link>
              </li>
              <li>
                <Link to="/checkout">Checkout</Link>
              </li>
            </ul>
          </nav>
          <Routes>  {
            <Route
                path="/"
                element={<SearchPage onRent={handleRent} />}  
            />
            <Route
                path="/checkout"
                element={  
                  <CheckoutPage
                      rentedGames={rentedGames}
                      onReturn={handleReturn}
                      onClear={handleClearRentedGames}
                  />
                }
            />
          </Routes>
        </div>
      </Router>
  );
};

export default App;


