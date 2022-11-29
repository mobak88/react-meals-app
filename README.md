# Food app

This project was bootstrapped with [ViteJs](https://vitejs.dev/).  
Vite is a lightning fast frontend build tool.

### `start`

Runs the app in the development mode.  
Open http://localhost:5173 to view it in the browser.  
Port can be changed in vite.config.js

```
npm run start
# or
yarn start
```

### `build`

Build production for deployment.

```
npm run build
# or
yarn build
```

### `preview`

Start a local web server that serves the built solution from ./dist.

```
npm run preview
# or
yarn preview
```

### Table of contents

- [Overview](#overview)
  - [Login](#login)
  - [Site features](#site-features)
- [My process](#my-process)
  - [Built with](#built-with)
- [Variables](#Variables)
  - [Base url](#base-url)
  - [Color scheme](#color-scheme)
  - [Endpoints](#endpoints)
- [Further development](#my-process)
  - [Backend](#backend)
  - [Frontend](#frontend)
  - [Socials](#socials)
- [Code style](#code-style)
  - [Style](#style)

## Overview

### Login

The app assumes the user already have created a user  
Username: test@test.com  
Password: 1234

### Site features

The app fetches data from: [TheaMealDB](https://www.themealdb.com/api.php)  
Users can:

- See recipes
- Search for recipes - User gets sugestions
- Find recipes by category
- Add/remove recipes to favourites
- See all liked recipes

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- CSS modules - Scoping CSS
- [React](https://reactjs.org/) - JS library
- [React router dom](https://reactrouter.com/en/main) - Navigational components
- Reusable components
- React hooks - useEffect, useState, useRef
- Custom hooks
- Context API - Share data between components without passing props
- React router dom dynamic pages - For recipes and categories
- Localstorage - Store logged in and liked

## Variables

### Base url

Base url can be found in .env file.

### Color scheme

Color scheme can be found in variables.css file as variables.

### Endpoints

Endpoints can be found as an object in endpoints.js

## Further development

### Backend

A CRUD backend where users can create profile, recipes and lists of recipes.

### Frontend

Create user, recipes, lists of recipes and share recipes.  
Recipe adjustments based on portions, meal planner and calorie count for each meal.

### Socials

I did not see a point in adding social media links that does not exist, they can easily be added at a further stage

## Code style

### Style

- ES6 syntax
- Camelcased function names, props and parameters
- Descriptive function names, prop names and parameters
- Destructuring props
- CSS naming with hyphens
- Export default for components
- Break down components when it makes sense or if it can be reused
