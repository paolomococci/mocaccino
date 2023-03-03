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
