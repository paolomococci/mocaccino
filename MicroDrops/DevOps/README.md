# micro-drops_db

From within the directory where the Dockerfile is, you can run the following commends:

```shell
docker build --tag mariadb_micro-drops_image .
docker image ls
docker run -d --name micro-drops_db -e MYSQL_ROOT_PASSWORD=p455w0rd -p 3306:3306 mariadb_micro-drops_image
docker ps --all
docker stop container_id
docker start container_id
```

## useful commands in SQL language

```text
CREATE OR REPLACE DATABASE micro_drops_db;
CREATE USER IF NOT EXISTS username@localhost IDENTIFIED BY 'password';
SELECT PASSWORD('password');
GRANT ALL PRIVILEGES ON *.* TO 'username'@'localhost' IDENTIFIED BY PASSWORD 'hash_returned_from_the_previous_command';
FLUSH PRIVILEGES;
SHOW GRANTS FOR 'username';
```
