#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <arpa/inet.h>
#include <netinet/in.h>
#include <sys/socket.h>
#include <sys/stat.h>
#include <netdb.h>
#include <fcntl.h>

#define FALSE 0
#define TRUE !FALSE

#define PORT 8000
#define WEBROOT "./views"
#define MAX_CONNECTIONS 10

#define END_OF_LINE "\r\n"
#define END_OF_LINE_SIZE 2

int main(void) {
	// TODO
	return 0;
}
