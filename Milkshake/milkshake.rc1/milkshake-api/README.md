# milkshake API project

## scaffolding

```shell
mkdir milkshake-api && cd milkshake-api && yarn init -y
nano package.json
touch .gitignore
touch README.md
touch .env.example
mkdir config && touch config/config.json && touch config/index.ts
yarn add @contentpi/lib
yarn add @graphql-tools/load-files
yarn add @graphql-tools/merge
yarn add @apollo/server
yarn add graphql
yarn add dotenv
yarn add express
yarn add jsonwebtoken
yarn add pg
yarn add pg-hstore
yarn add sequelize
yarn add ts-node
yarn add @types/node
yarn add husky -D
yarn add jest -D
yarn add prettier -D
yarn add sequelize-mock -D
yarn add ts-jest -D
yarn add ts-node-dev -D
yarn add typescript -D
yarn add eslint -D
yarn add @types/jsonwebtoken -D
touch .eslintignore
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
