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
  - [Site features](#Site-features)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

### Site features

The page fetches data from: [TheaMealDB](https://www.themealdb.com/api.php)  
Users can:

- See recipes
- Search for recipes - User gets sugestions
- Find recipes by category
- Create lists with recipes
- Add recipes to favourites

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
