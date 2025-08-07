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

### useParams

- it is used to get id from url.
- must full colan use pannanum in url. (contanct/:id)

- Page not found path="\*" itha use pannanum
- \*--> any path (else)
- route match agalana _ ithu url value eduthukum. ex: incase user type wrong url _ get la url value and redirect (404-Page not found) developer set this.

- wcag certificate
- AA and AAA certificate
- git lence is used to check commits and their changes.

# Day4

### Git (2007)

- Git is a distributed system
- Git --> Source Control Management / Version Control System.
- Git Developed By Linus Torvalds. He also developed Linux.
- git log --oneline
- git log --all
- git log -1 ==> last commit only it will show.
- git checkout (commit id)
- git checkout - ==> It is used to back to leatest master branch. Normally Head and Master both are in same place.
- git status
- git diff ==> enna change agi irukunu pakkum
- git commit -m "all good"
- git reset --soft HEAD~1 ==> delete leatest one commit. It means head la irunthu keela one commit target panni delete pannum. but it shows what will change.
- git reset --hard HEAD~1 ==> Hard --> delete without backup.
- git push -f ==> delete online master also. Dont use unwantedly.
- git rebesh
- git add file path --> files move to stage area
- git add -p ==> one file ah single single line ah stage pannalam

- git have 3 areas ==> working area, staging area, commit

#### Anthony fuu slidev, vite, vitepress creator. also vue contributor.

## Redirection

- **event Bubbling** Interview question

- sibling to sibling data share pannanum na data va common parent ku lift pannanum.
- intha technic name lifiting the state up.

### useNavigate()

- +1 --> one step Forward
- -1 --> one step Backward
- It is also used navigate to page

- Re-concilation is the Data updated to Virtural-Dom to Real-Dom process name
- react-chartjs-2.js.org
