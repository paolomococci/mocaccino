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

void request_acceptance_message(int);
void handle_http_request(int, struct sockaddr_in *);
void handle_fatal_error(char *);

int get_filesize(int);
int send_a_line_to_socket(int, unsigned char *);
int receive_a_line_from_socket(int, unsigned char *);

int main(void) {

   int acceptance_socket_file_descriptor;
   int connected_socket_file_descriptor;
   int option_value = 1;

   struct sockaddr_in host_address;
   struct sockaddr_in client_address;

   socklen_t socket_in_address_size;

   host_address.sin_family = AF_INET;
   host_address.sin_port = htons(PORT);
   host_address.sin_addr.s_addr = INADDR_ANY;

   request_acceptance_message(PORT);

   while(TRUE) {
	// todo
   }
   exit(EXIT_FAILURE);
}

void request_acceptance_message(int port) {
	printf("nws accepting web requests on port %d\n", port);
}

void handle_http_request(
		int acceptance_socket_file_descriptor,
		struct sockaddr_in *p_client_address
	) {

   unsigned char *ucp_temp;
   unsigned char request[500];
   unsigned char resource[500];

   int file_descriptor;
   int length;

   length = receive_a_line_from_socket(
		   acceptance_socket_file_descriptor,
		   request
   );

   printf(
		   "got request from %s:%d \"%s\"\n",
		   inet_ntoa(p_client_address->sin_addr),
		   ntohs(p_client_address->sin_port),
		   request
   );
}

void handle_fatal_error(char *message) {

   char error_message[256];

   strcpy(error_message, "!!-> fatal error occurred ");
   strncat(error_message, message, 230);
   perror(error_message);

   exit(EXIT_SUCCESS);
}

int get_filesize(int file_descriptor) { return 0; }

int send_a_line_to_socket(
		int acceptance_socket_file_descriptor,
		unsigned char *buffer
	) { return 1; }

int receive_a_line_from_socket(
		int acceptance_socket_file_descriptor,
		unsigned char *ucp_destination_buffer
	) { return 0; }
