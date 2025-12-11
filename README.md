🍽️ Restaurant Finder
A simple Node.js + Express + MySQL backend that allows adding restaurants and searching restaurants by dish name and price range.

Production Link: https://restaurant-finder-mros.onrender.com/

🚀 Features
Add a new restaurant with dish details
Search restaurants by:
Dish name
Minimum–maximum price
MySQL database integration
RESTful API design

Tech Stack
Node.js
Express.js
MySQL2
dotenv

Project Structure
.
├── server.js
├── db_config.js
├── controller
│   └── restaurant.controller.js
└── route
    └── restaurant.route.js


Environment Variables are assigned to configure database and server and are present in .env for security purpose

db_config.js file is used to setup the MySQL database with the environment variables

Running the Project
1. Install dependencies: npm init
2. Start the server: npm start
3. Local Server will run at: http://localhost:3000 || http://localhost:3001

Database Schema
CREATE TABLE restaurant (
  id INT AUTO_INCREMENT PRIMARY KEY,
  restaurantName VARCHAR(255),
  city VARCHAR(255),
  dishName VARCHAR(255),
  dishPrice INT,
  orderCount INT
);

API Endpoints
1. POST /add-restaurant
   {
  "restuarantName": "A2B",
  "city": "Bengaluru",
  "dishName": "Masala Dosa",
  "dishPrice": 150,
  "orderCount": 30
}
Response:
{
  "success": true,
  "message": "data added successfully",
  "data": { ... }
}

2. Search Restaurants
GET /search?dishName=Pizza&minPrice=100&maxPrice=300
Response:
{
  "success": true,
  "status": 200,
  "restaurants": [ ... ]
}
























