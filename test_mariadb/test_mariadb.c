#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <mysql/mysql.h>
#include <mysql/my_global.h>
#include <mysql/my_config.h>
#include <mysql/my_byteorder.h>
#include <mysql/mysqld_error.h>

int main(void) {

	MYSQL *connection_to_database = mysql_init(NULL);

	if(connection_to_database == NULL) {
		// TODO
		exit(EXIT_FAILURE);
	}

	if(mysql_real_connect(
			connection_to_database,
			"localhost",
			"root",
			"password",
			NULL,
			0,
			NULL,
			0
	)) {
		// TODO
		exit(EXIT_FAILURE);
	}

	if(mysql_query(
			connection_to_database,
			"CREATE DATABASE test_mariadb"
	)) {
		// TODO
		exit(EXIT_FAILURE);
	}

	mysql_close(connection_to_database);

	exit(EXIT_SUCCESS);
}
