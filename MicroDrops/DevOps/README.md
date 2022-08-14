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
CREATE USER IF NOT EXISTS micro_drops@localhost IDENTIFIED BY 'your_password';
SELECT PASSWORD('your_password');
GRANT ALL PRIVILEGES ON *.* TO 'micro_drops'@'localhost' IDENTIFIED BY PASSWORD 'hash_returned_from_the_previous_command_including_asterisk';
FLUSH PRIVILEGES;
SHOW GRANTS FOR 'micro_drops';
```

### or you can use the following set of commands

```text
CREATE OR REPLACE DATABASE micro_drops_db;
CREATE OR REPLACE USER micro_drops@localhost IDENTIFIED BY 'your_password';
SELECT PASSWORD('your_password');
GRANT ALL PRIVILEGES ON *.* TO 'micro_drops'@'localhost' IDENTIFIED BY PASSWORD 'hash_returned_from_the_previous_command_including_asterisk';
FLUSH PRIVILEGES;
SHOW GRANTS FOR 'micro_drops';
```
