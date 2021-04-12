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

void dump_row_memory(const unsigned char *buffer, const unsigned int length) {
	unsigned char byte;
	unsigned int index0, index1;
	for(index0 = 0; index0 < length; index0++) {
		byte = buffer[index0];
		printf("%02x ", buffer[index0]);
		if(((index0 % 16) == 15) || (index0 == length-1)) {
			for(index1 = 0; index1 < 15 - (index0 % 16); index1++) {
				printf("\t");
			}
			printf("   ");
			for(index1=(index0-(index0%16)); index1 <= index0; index1++) {
				byte = buffer[index1];
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

int main(int argc, char **argv) {
	int status = 0;
	// TODO
	return status;
}
