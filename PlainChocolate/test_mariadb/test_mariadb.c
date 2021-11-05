#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <mysql/mysql.h>
#include <mysql/mysqld_error.h>

static const char *c_host = "127.0.0.1";
static const char *c_username = "root";
static const char *c_password = "password";
static const char *c_port = "3306";
static const char *c_dbname = "testdb";

int main(void) {

	MYSQL *connection;
	connection = mysql_init(NULL);

	// TODO

	exit(EXIT_SUCCESS);
}
