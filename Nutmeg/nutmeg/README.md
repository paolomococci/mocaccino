# nutmeg

Angular 14.2.1

## scaffolding

```shell
ng new nutmeg -S -g --routing --style=sass --skip-install
```

## install

```shell
npm install
```

## I install Angular Material to this template

```shell
ng add @angular/material
```

## I add main component

```shell
ng g c components/main
```

## I add navbar component

```shell
ng g c components/navbar
```

## I add kind component

```shell
ng g c components/kind
```

## I add search component

```shell
ng g c components/search
```

## I add detail component

```shell
ng g c components/detail
```

## I add helper module

```shell
ng g m modules/helper
```

# I add Kind interface

```shell
ng g i models/Kind --type=model
```

## I add kind service

```shell
ng g s services/kind
```

## I add data service

```shell
ng g s services/data
```

## I add message service

```shell
ng g s services/message
```

## mimic communication with the backend

At this point, for the sole purpose of development, I have chosen to simulate the connection with a remote server.

### I install angular-in-memory-web-api

```shell
npm i angular-in-memory-web-api
```

## serve

```shell
ng serve -o
```
