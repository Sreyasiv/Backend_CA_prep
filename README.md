# Backend_CA_prep


Backend web development practice question
📝 Practice Task: Employee Portal Authentication System


🧩 Objective:
Build a simple authentication system using Express.js and JWT where employees can log in and access a protected dashboard route.

📌 Requirements:
1. User Login Route Implementation (/login) –
Create a POST /login route.


Accept employeeId and password in the request body.


Validate against a hardcoded employeeId and password (e.g., "emp001", "password123").


If valid, generate a JWT token with:


Expiry of 10 minutes


Payload should contain { employeeId }


Return the token as a response.


2. JWT Generation & Payload Handling –
Use jsonwebtoken to create the JWT.


Ensure proper structure and inclusion of employeeId in the payload.


Use process.env.JWT_SECRET for secret key (store in .env file).


3. Protected Route Implementation (/dashboard) 
Create a GET /dashboard route.


Validate the JWT from the Authorization header (Bearer <token>).


If the token is valid:


Return a welcome message: "Welcome to your dashboard, employee: <employeeId>"


If the token is invalid or missing:


Return a 401 Unauthorized response.


4. Code Quality & Best Practices 
Use modular structure:


Separate JWT helper functions (generateToken, verifyToken) into a utility file.


Store secret keys in .env (never hardcode).


Handle errors gracefully (e.g., try/catch).


Use meaningful variable names and clean, commented code.
