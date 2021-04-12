#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>

#define FALSE 0
#define TRUE !FALSE

#define PORT 8000
#define WEBROOT "./view"

#define BUFFER_LENGTH 1024

struct ethernet_headers {
	// TODO
};

struct ip_headers {
	// TODO
};

struct tcp_headers {
	// TODO
};

void display_fatal_error_message(char *message) {
	char error_message[255];
	strcpy(error_message, " ! fatal error: ");
	strncat(error_message, message, 239);
	perror(error_message);
	exit(EXIT_FAILURE);
}

void error_checked_malloc_wrapper() {
	// TODO
}

void dump_row_memory(const unsigned char *buffer, const unsigned int length) {
	unsigned char byte;
	unsigned int external_index, internal_index;
	for(external_index = 0; external_index < length; external_index++) {
		byte = buffer[external_index];
		printf("%02x ", buffer[external_index]);
		if(((external_index % 16) == 15) || (external_index == length-1)) {
			for(internal_index = 0; internal_index < 15 - (external_index % 16); internal_index++) {
				printf("\t");
			}
			printf("   ");
			for(internal_index=(external_index - (external_index % 16)); internal_index <= external_index; internal_index++) {
				byte = buffer[internal_index];
				if((byte > 31) && (byte < 127)) {
					printf("%c", byte);
				} else {
					printf(".");
				}
			}
			printf("\n");
		}
	}
}

void handle_http_request() {
	// TODO
}

int send_string() {
	int outcome = 1;
	// TODO
	return outcome;
}

int receive_from_socket() {
	int outcome = 0;
	// TODO
	return outcome;
}

int get_filesize() {
	int size = 0;
	// TODO
	return size;
}

int main(void) {

	int status = 0;
	
	int acceptance_socket_file_descriptor, connected_socket_file_descriptor;
	int length_received = 1, yes = 1;
	struct sockaddr_in host_address, client_address;
	char buffer[BUFFER_LENGTH];
	socklen_t socket_length;

	if ((acceptance_socket_file_descriptor = socket(
			PF_INET,
			SOCK_STREAM,
			0
		)) == -1) {
		display_fatal_error_message("in the socket");
	}

	while(TRUE) {
		// TODO
	}

	return status;
}
