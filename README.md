# Practical Test Mercado Libre

This repository contains the frontend and backend services for a small application that interacts with the Mercado Libre API.

## Description

The application consists of three main components:

1. **Search Box**: Allows the user to search for products.
2. **Search Results**: Displays the search results, showing a list of up to 4 products.
3. **Product Details**: Provides detailed information about a selected product.

The application is built using the following technologies:

- **Frontend**: Next.js, TypeScript, SCSS
- **Backend**: Node.js, Express, TypeScript

## Features

- Search for products using the Mercado Libre API
- Display search results, including product details
- Navigate between the search results and product details pages

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/SantosBxb/test-mercado-libre.git
   ```

2. Navigate to the project directory:

   ```bash
   cd test-mercado-libre
   ```

3. Install dependencies for both the frontend and backend services:

   ```bash
   # Frontend
   cd frontend
   npm install

   # Backend
   cd ../backend
   npm install
   ```

4. Start the development servers:

   ```bash
   # Frontend
   cd frontend
   npm run dev

   # Backend
   cd ../backend
   npm run dev
   ```

5. Open your browser and visit:

   - Frontend: `http://localhost:3000`
   - Backend: `http://localhost:3001`

## Running the Production Version

For testing and evaluation purposes, it is recommended to run the production version of the application. To do this, follow these steps:

1. Build the frontend and backend services:

   ```bash
   # Frontend
   cd frontend
   npm run build

   # Backend
   cd ../backend
   npm run build
   ```

2. Start the production servers:

   ```bash
   # Frontend
   cd frontend
   npm start

   # Backend
   cd ../backend
   npm start
   ```

3. Open your browser and visit:

   - Frontend: `http://localhost:3000`
   - Backend: `http://localhost:3001`

The production version is optimized for performance and reliability, making it the preferred choice for testing and evaluating the application.

## Project Structure

The repository is divided into two main directories:

- **frontend**: Contains the code for the frontend service.
- **backend**: Contains the code for the backend service.

Each service has its own README.md file with more detailed information about its structure, dependencies, and usage.
