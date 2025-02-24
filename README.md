## Overview

The Recipe Finder App is a Next.js application that allows users to search for recipes based on a query, cuisine type, and preparation time. It fetches recipes from the Spoonacular API and displays detailed information for each recipe.

-Home page:
![Home page](/public/README/HomePage.png)

-Recipes page:
![Recipes page](/public/README/RecipesPage.png)

-Recipe page:
![Recipe page](/public/README/RecipePage.png)

## Architecture:

- [Next.js](https://nextjs.org/docs) framework for building a performant, SSR-based application.
- [Tailwind CSS](https://tailwindcss.com/docs) for styling and responsive design.
- [Spoonacular API](https://spoonacular.com/food-api/docs) for retrieving recipe data.
- [ESLint](https://eslint.org/docs/latest/) & [Prettier](https://prettier.io/docs/) for maintaining clean and consistent code.

## Getting Started

1.Install dependencies:

```bash
npm install
```

2.Build the project

Run Development Mode

```bash
npm run dev
```

or Run in Production Mode

```bash
npm run build
npm start
```

3.Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Code Quality & Linting:

- Run ESLint to check for errors:

```bash
npm run lint
```

- Run Prettier to format the code:

```bash
npm run format
npm run format:fix
```
