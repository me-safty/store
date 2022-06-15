# store
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

instal prettier steps:
1- "npm i -D prettier"
2- make .prettierrc file
3- put your fav format
4- put your script that start format in pakge.json
  "format": "prettier --write src/**/*.ts"

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

install jasmine
1- npm i -D jasmine
2- npm i -D @types/jasmine
3- npx jasmine init
4- in jasmine.json file change spec dir to your js file
  "spec_dir": "build",
5- in jasmine.json file change random to false
  "random": false
6- make in src folder dir tests and in it make indexSpec.ts file
7- npm i -D supertest
8- npm i -D @types/supertest
9- add test script
  "test": "npm run build && jasmine"
10- npm i -D jasmine-spec-reporter
11- make in src folder, make helpers dir, and in it make reporter.ts file
12- put typescript support code in reprter.ts file 
  you can find it in https://github.com/bcaudan/jasmine-spec-reporter/tree/673e22cd3b13732b421a25e862dbe887692ed345/examples/typescript 


install express framework
1- npm i express
2- npm i -D @types/express
