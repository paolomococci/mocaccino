# milkshake API

## scaffolding

```shell
mkdir milkshake-api && cd milkshake-api && touch .gitignore
nano .gitignore
npm init --yes
nano package.json
touch README.md
touch .env.example
mkdir config && touch config/config.json && touch config/index.ts
npm install @contentpi/lib
npm install @graphql-tools/load-files
npm install @graphql-tools/merge
npm install @apollo/server
npm install graphql
npm install dotenv
npm install express
npm install jsonwebtoken
npm install pg
npm install pg-hstore
npm install sequelize
npm install ts-node
npm install @types/node
npm install react
npm install -D husky
npm install -D jest
npm install -D prettier
npm install -D sequelize-mock
npm install -D ts-jest
npm install -D ts-node-dev
npm install -D typescript
npm install -D eslint
npm install -D @babel/eslint-parser
npm install -D @babel/preset-react
npm install -D eslint-plugin-react
npm install -D standard
npm install -D eslint-plugin-testing-library
npm install -D eslint-plugin-jest
npm install -D tslint-react-recommended
npm install -D eslint-config-standard
npm install -D eslint-plugin-babel
npm install -D eslint-plugin-import
npm install -D eslint-plugin-jsx
npm install -D eslint-plugin-node
npm install -D eslint-plugin-promise
npm install -D babel-plugin-flow-to-typescript
npm install -D @types/jsonwebtoken
touch .eslintignore
touch .eslintrc.js
touch global.d.ts
touch tsconfig.json
mkdir src && touch src/index.ts
mkdir src/graphql && mkdir src/graphql/resolvers
touch src/graphql/resolvers/index.ts
touch src/graphql/resolvers/user.ts
mkdir src/graphql/types
touch src/graphql/types/index.ts
touch src/graphql/types/Scalar.graphql
touch src/graphql/types/User.graphql
mkdir src/models && touch src/models/index.ts && touch src/models/User.ts
mkdir src/lib && touch src/lib/auth.ts && touch src/lib/jwt.ts
mkdir src/types && touch src/types/index.ts && touch src/types/interfaces.ts && touch src/types/types.ts
```
