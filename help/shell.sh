# stack: nodejs, express, graphql, apollo-server-express.

# start package
npm init

# start tsconfig
npx tsc --init --rootDir src --outDir build --lib dom,es6 --module commonjs --target es6 --removeComments --resolveJsonModule true

# pro dep
npm install express graphql ncp http graphql-import-node compression cors lodash typescript graphql-tools graphql-playground-middleware-express apollo-server-express

# dev dep
npm install @types/compression @types/express @types/cors @types/lodash @types/node @types/graphql -D

# package.json
"scripts": {
    "start": "node build/server.js",
    "build": "tsc -p . && ncp src/schema build/schema",
    "start:dev": "npm run build:dev",
    "build:dev": "nodemon 'src/server.ts' --exec 'ts-node' src/server.ts -e ts,json,graphql"
},