# React + TypeScript + Vite

craeted this project using `npm create vite@latest`

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json", "./tsconfig.app.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react] (https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Using Bootstrap in React

- Install `npm install bootstrap@latest`
- Import bootstrap.css in main.tsx like `import "bootstrap/dist/css/bootstrap.css";`

## React Tutorials

- Official Website `https://react.dev/learn`
- Youtube Codevolution
- Basic `https://www.youtube.com/watch?v=SqcY0GlETPk`
- Basic to Advance `https://www.youtube.com/watch?v=cd3P3yXyx30`
- React Hooks `https://www.youtube.com/watch?v=LlvBzyy-558`
- A React component for playing a variety of URLs `https://github.com/cookpete/react-player`
