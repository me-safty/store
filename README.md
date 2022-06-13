# store
instal prettier steps:
1- "npm i -D prettier"
2- make .prettierrc file
3- put your fav format
4- put your script that start format in pakge.json
  "format": "prettier --write src/**/*.ts"

instal typescript steps:
1- npm i -D typescript
2- npm i -D ts-node @types/node
3- for make tsconfig.json file write in terminal 
  "npx tsc --init"
4- put script that start in pakge.json 
  "build": "npx tsc"
5- change "outdir": "./build", 
  "noImplicitAny": true,
  "rootDir": "./src",
6- put your script that start compile ts file to js and run js file in consle in pakge.json
  "start": "npm run build && node build/."

ESlint instal steps:
1- npm i -D eslint
2- npx eslint --init : for setup eslint
3- edir rules in eslintre.js file
  quotes: ["error", "double"],
  "no-console": 0 ,
  "no-var": "error",
  "prefer-const": "error"
4- put script that start in packge.json
  "lint": "eslint src/**/*.ts"
  "lint:f": "eslint src/**/*.ts --fix" to fix code
5- instal packges tht for eslint, pritter
  npm i -D eslint-config-prettier eslint-plugin-prettier
6- in .eslintre.js file add "prettier" in plugins and extends
  plugins: ["@typescript-eslint", "prettier"]
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],
7- add prettier to .eslintre.js in rule 
  "prettier/prettier": 2,