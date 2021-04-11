#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>

#define PORT 8000
#define WEBROOT "./view"

struct ethernet_headers {
	// TODO
};

struct ip_headers {
	// TODO
};

struct tcp_headers {
	// TODO
};

void display_fatal_error_message() {
	// TODO
}

void error_checked_malloc_wrapper() {
	// TODO
}

void dump_row_memory() {
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

void handle_http_request() {
	// TODO
}

int main(int argc, char **argv) {
	int status = 0;
	// TODO
	return status;
}
