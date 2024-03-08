1. Set up React App:
  npx create-react-app giant-bomb-app
  cd giant-bomb-app
2. Install Axios:
  npm install axios

3. Run App
 npm start
 node server.js

#Explanation of work:
Built an application as per requirement to have search and rent using GiantBomb api.
This is very light weight application built using React.js. In the interest of time, I built 
only functionalities required rather than desining fancy UI.
Below are the components and their descriptions:

1. Search.js : Implemented search where a user can input search for game. Also an option for selection to rent a game after search.
2. Checkout.js : Checkout all the rented game and user can see all his checked out item on Checkout
3. GiantBombService.js: A service for API call.
4. server.js: to have express js server in place
5. Setup.proxy: having this service to bypass proxy and resolve CORS while talking to GiantBomb API
6. App.js: Integrates all component
7. SearchResult.js:  To Carry searched data between components
