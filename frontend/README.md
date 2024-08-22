# Meli Frontend

## Description

This is the frontend service of the application, built using Next.js, TypeScript, and various other components and utilities. The styling is implemented using SCSS.

## Features

- Search functionality to search for products
- Display of search results, including product details
- Navigation between search results and product details

## Technologies Used

- **Next.js**: A React framework for building server-rendered and statically-exported React applications.
- **TypeScript**: A superset of JavaScript that adds optional static typing.
- **React**: A JavaScript library for building user interfaces.
- **SCSS**: A CSS preprocessor that provides advanced features and functionalities for organizing and writing styles.
- **Jest**: A JavaScript testing framework for unit testing.

## Getting Started

1. Install dependencies:

   ```
   npm install
   ```

2. (Optional) Create a .env file in the root directory with the following environment variables:

   ```
   NEXT_PUBLIC_API_URL=http://localhost:3001
   ```

   If the .env file is not provided, the application will use the default values (NEXT_PUBLIC_API_URL=http://localhost:3001).

3. Start the development server:

   ```
   npm run dev
   ```

4. Open your browser and visit `http://localhost:3000` to see the application.

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm start`: Starts the production server.
- `npm run lint`: Runs the linter to check for code errors and stylistic issues.
- `npm test`: Runs the tests using Jest.
