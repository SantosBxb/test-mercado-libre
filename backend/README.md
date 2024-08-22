# Meli Backend Service

## Description

This is the backend service of the application, built using Node.js, Express, and TypeScript. It provides the API endpoints for the frontend to interact with the Mercado Libre API.

## Features

- Provides the following API endpoints:
  - `/api/items?q=:query`: Fetches search results from the Mercado Libre API and returns the data in the required format.
  - `/api/items/:id`: Fetches the details of a specific product from the Mercado Libre API and returns the data in the required format.

## Technologies Used

- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express**: A web application framework for Node.js.
- **TypeScript**: A superset of JavaScript that adds optional static typing.
- **Axios**: A popular HTTP client used for making API requests.
- **Jest**: A JavaScript testing framework for unit testing.

## Getting Started

1. Install dependencies:

   ```
   npm install
   ```

2. (Optional) Create a .env file in the root directory with the following environment variables:

   ```
   PORT=3001
   MERCADO_LIBRE_API=https://api.mercadolibre.com
   ```

   If the .env file is not provided, the application will use the default values (PORT=3001 and MERCADO_LIBRE_API=https://api.mercadolibre.com).

3. Start the development server:

   ```
   npm run dev
   ```

4. The backend service will be running on `http://localhost:3001`.

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm start`: Starts the production server.
- `npm run test`: Runs the tests using Jest.
- `npm run coverage`: Generates a code coverage report.
