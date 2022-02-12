## Activities from Typescript Course by B7web

## Comments
- install node
- add typescript globally
 - npm install -g typescript
- tsc src/script.ts --outDir public --noEmitOnError

### Module 3
## using watchMode
- tsc src/script.ts --outDir public -w

## generate the file tsconfig.json
- tsc --init 

- tsc -> verifica todo o projeto e gera os arquivos
- tsc -w -> monitora todos os arquivos

## file tsconfig.json - choosing which files to compile
"""
  "compilerOptions": {
    ...
    //lib [] default
    "lib": [
      "DOM",
      "DOM.Iterable",
      "ES6",
      "ScriptHost"
    ],
    "noUnusedLocals": true,                           /* Enable error reporting when a local variables aren't read. */
    "noUnusedParameters": true,                       /* Raise an error when a function parameter isn't read */
    "noImplicitReturns": true,                        /* Enable error reporting for codepaths that do not explicitly return in a function. */
    "rootDir": "./src",
    "outDir": "./public/assets/js",                                   
    "removeComments": true,
    //"noEmit": true,
    "noEmitOnError": true,
    ...
  }
  ,
  "exclude": [
    "src/outro.ts",
    "**/*.dev.ts",
    "node_modules"
  ],
  "include": [
    "src/*",
    "app.ts"
  ]
"""
