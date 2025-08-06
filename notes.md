## React Day 2

- Package.json Scripts -->
  - "dev": "vite", ==> Application run pannum
- "lint": "eslint .",
  - Errors iruka illaiyanu read panni sollu
- "build": "vite build"
  - Production level code
  - Aglification code dist folder kudukum.
  - And minification pannum
  - BackWard Compactable
- "preview": "vite preview"
  - Dist folder la irunthu Build panna file ah preview panni pakka ithu use agum
- Dependencies Graf
- eslint.config.js --> AirBnB

  - it desiding style of coding.Team code style enforce panna use agum.
  - ex: unused codes

- github --> Netlify --> npm run build --> dist folder --> creates .com

### Two types of imports and exports

1. Named Imports --> use Curly brackets {}
2. Default Imports --> cannot use curly Brackets {}. Because it is imports only one component.
3. Named Export --> Multiple exports (recommend)
4. Default Export --> One per file

- JSX rule - only one parent element
- React fragments <>... </>

#### Terminal command

- hmr ---> Hot Module Reload

- CI/ CD ==> Contineous Integration / Contineous Deployment
- Parent to child data transform panna Props use pannanum
- onClick --> setState --> State Update aguthu --> Component Rerender agum
- Component => F(S) --> Function of State

# Day 3

### Condition Rendering

```jsx
{
  like > 10 ? <h1>Awesome</h1> : <h1>Cool</h1>;
}
```
