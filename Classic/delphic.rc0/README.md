# delphic project

Brainstorming web application.

## scaffolding

```shell
composer create-project laravel/laravel delphic.rc0
cd delphic.rc0
composer require laravel/breeze --dev
php artisan breeze:install
```

Select framework React when prompted, then continue:

```shell
php artisan migrate:fresh
php artisan schema:dump
```

## it's time to develop brainstorming features

Now I will develop the functionality of the application in question that will allow users to register and share their ideas.

```shell
php artisan make:model -mrc Prospect
php artisan make:test ProspectFeatureTest
php artisan make:test ProspectUnitTest --unit
php artisan make:policy ProspectPolicy --model=Prospect
```

## after modifying the migration file related to table prospect

```shell
php artisan migrate:refresh --path=database/migrations/2023_03_03_101711_create_prospects_table.php
php artisan schema:dump
```

## now it's time to develop the user interface

```shell
mkdir resources/js/Pages/Prospects
touch resources/js/Pages/Prospects/Index.jsx
touch resources/js/Components/Prospect.jsx
```
