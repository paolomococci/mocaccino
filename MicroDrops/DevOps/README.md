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

## useful commands in sql language

```text

```
