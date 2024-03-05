
import React, { useState } from 'react';

const CheckoutPage = ({ rentedGames, onCheckout }) => {
    const [customerName, setCustomerName] = useState('');
    const [checkoutSuccess, setCheckoutSuccess] = useState(false);

    const handleCheckout = () => {
        if (customerName && rentedGames.length > 0) {
            // Assuming onCheckout is an asynchronous function
            onCheckout(customerName, rentedGames)
                .then(() => {
                    setCheckoutSuccess(true);
                })
                .catch((error) => {
                    console.error('Checkout failed:', error);
                    // Handle error scenarios if needed
                });
        } else {
            // Display a message if customer name or rented games are not provided
            console.error('Customer name or rented games not provided');
        }
    };

    // Disable the button if customer name is not provided or no games are rented
    const isButtonDisabled = !customerName || rentedGames.length === 0;

    return (
        <div>
            <h2>Checkout</h2>
            <div>
                <label>Customer Name: </label>
                <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                />
            </div>
            <div>
                <h3>Rented Games:</h3>
                <ul>
                    {rentedGames.map((game) => (
                        <li key={game.id}>
                            <div>
                                <img src={game.image.thumb_url} alt={game.name} />
                                <p>{game.name} - {game.deck}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            {checkoutSuccess ? (
                <p>Checkout Successful!</p>
            ) : (
                <button onClick={handleCheckout} disabled={isButtonDisabled}>
                    Checkout
                </button>
            )}
        </div>
    );
};

export default CheckoutPage;



