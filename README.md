# MERN Stack User Authentication

This is a full stack web application built using the MERN (MongoDB, Express.js, React, Node.js) stack. The application allows users to register and login, 
featuring a home page for unauthenticated users, a login page, a registration page, and a welcome dashboard for authenticated users.

## Features

- User Registration
- User Login
- Protected Dashboard for Authenticated Users
- Notifications for User Actions

## Technologies Used

### Frontend

- React
- React Router
- Axios
- React Hot Toast
- Vite

### Backend

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (JSON Web Token)
- Bcrypt
- Cookie Parser
- CORS
- Dotenv

## Getting Started

### Prerequisites

- Node.js and npm
- MongoDB

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/arslansalyana/user-auth.git
   cd user-auth
   ```

2. **Backend Setup:**

   ```bash
   cd server
   npm install
   ```

   Create a `.env` file in the `server/config` directory and add the following:

   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

3. **Frontend Setup:**

   ```bash
   cd ../client
   npm install
   ```

### Running the Application

1. **Start the Backend Server:**

   ```bash
   cd server
   npm start
   ```

2. **Start the Frontend Development Server:**

   ```bash
   cd ../client
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:3000`.

## Project Structure

```plaintext
user-auth/
|-- server/
|   |-- config/
|   |   |-- db.js
|   |   |-- config.env
|   |-- controllers/
|   |   |-- authController.js
|   |-- models/
|   |   |-- User.js
|   |-- routes/
|   |   |-- authRoutes.js
|   |-- index.js
|   |-- package.json
|-- client/
|   |-- public/
|   |-- src/
|   |   |-- components/
|   |   |   |-- Home.js
|   |   |   |-- Login.js
|   |   |   |-- Register.js
|   |   |   |-- Dashboard.js
|   |   |-- App.js
|   |   |-- index.js
|   |-- package.json
|   |-- vite.config.js
|-- README.md
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
