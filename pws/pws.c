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
#define MAX_CONNECTIONS 20

#define END_OF_LINE "\r\n"
#define END_OF_LINE_SIZE 2

void request_acceptance_message(int);
void handle_http_request(int, struct sockaddr_in *);
void handle_fatal_error(char *);

int get_filesize(int);
int send_a_line_to_socket(int, unsigned char *);
int receive_a_line_from_socket(int, unsigned char *);

int main(void) {
	// TODO
   while(TRUE) {
	// todo
   }
   exit(EXIT_FAILURE);
}

void request_acceptance_message(int port) {}

void handle_http_request(
		int acceptance_socket_file_descriptor,
		struct sockaddr_in *p_client_address
	) {}
