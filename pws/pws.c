#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <netdb.h>

#define FALSE 0
#define TRUE !FALSE

#define PORT 8000
#define WEBROOT "./view"

#define BUFFER_LENGTH 1024

#define ETHERNET_ADDRESS_LENGTH 6

#define TCP_FIN   0x01
#define TCP_SYN   0x02
#define TCP_RST   0x04
#define TCP_PUSH  0x08
#define TCP_ACK   0x10
#define TCP_URG   0x20

int main(void) {
	// TODO
	return 0;
}
