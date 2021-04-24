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

   if ((acceptance_socket_file_descriptor = socket(
		   PF_INET,
		   SOCK_STREAM,
		   0
   	   )) == -1) {}

   if (setsockopt(
		   acceptance_socket_file_descriptor,
		   SOL_SOCKET,
		   SO_REUSEADDR,
		   &option_value,
		   sizeof(int)
   	   ) == -1) {}

   memset(&(host_address.sin_zero), '\0', 8);

   if (bind(
		   acceptance_socket_file_descriptor,
		   (struct sockaddr *)&host_address,
		   sizeof(struct sockaddr)
   	   ) == -1) {}

   if (listen(
		   acceptance_socket_file_descriptor,
		   MAX_CONNECTIONS
   	   ) == -1) {}

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

   ucp_temp = strstr(request, " HTTP/");

   if(ucp_temp == NULL) {
      printf(" NOT HTTP!\n");
   } else {
      *ucp_temp = 0;
      ucp_temp = NULL;
      if(strncmp(request, "GET ", 4) == 0) {
         ucp_temp = request + 4;
      }
      if(strncmp(request, "HEAD ", 5) == 0) {
         ucp_temp = request + 5;
      }
      if(ucp_temp == NULL) {
         printf("\tUNKNOWN REQUEST!\n");
      } else {
         if (ucp_temp[strlen(ucp_temp) - 1] == '/') {
            strcat(ucp_temp, "test.html");
         }
         strcpy(resource, WEBROOT);
         strcat(resource, ucp_temp);
         file_descriptor = open(resource, O_RDONLY, 0);
         printf("\topening \'%s\'\t", resource);
         if(file_descriptor == -1) {
            printf(" 404 Not Found\n");
            send_a_line_to_socket(
            		acceptance_socket_file_descriptor,
					"HTTP/1.0 404 NOT FOUND\r\n"
            );
            send_a_line_to_socket(
            		acceptance_socket_file_descriptor,
					"server: nws\r\n\r\n"
            );
            send_a_line_to_socket(
            		acceptance_socket_file_descriptor,
					"<html><head><title>404 Not Found</title></head>"
            );
            send_a_line_to_socket(
            		acceptance_socket_file_descriptor,
					"<body><h2>URL not found</h2></body></html>\r\n"
            );
         } else {
            printf(" 200 OK\n");
            send_a_line_to_socket(
            		acceptance_socket_file_descriptor,
					"HTTP/1.0 200 OK\r\n"
            );
            send_a_line_to_socket(
            		acceptance_socket_file_descriptor,
					"server: nws\r\n\r\n"
            );
            if(ucp_temp == request + 4) {
               if( (length = get_filesize(file_descriptor)) == -1) {
                  handle_fatal_error(
                		  "when trying to retrieve the size of the resource"
                  );
               }
               if( (ucp_temp = (unsigned char *) malloc(length)) == NULL) {
                  handle_fatal_error(
                		  "when trying to allocating memory for reading the resource"
                  );
               }
               read(file_descriptor, ucp_temp, length);
               send(acceptance_socket_file_descriptor, ucp_temp, length, 0);
               free(ucp_temp);
            }
            close(file_descriptor);
         }
      }
   }

   shutdown(acceptance_socket_file_descriptor, SHUT_RDWR);
}

void handle_fatal_error(char *message) {

   char error_message[256];

   strcpy(error_message, "!!-> fatal error occurred ");
   strncat(error_message, message, 230);
   perror(error_message);

   exit(EXIT_SUCCESS);
}

int get_filesize(int file_descriptor) {

   struct stat stat_struct;

   if(fstat(file_descriptor, &stat_struct) == -1) {
      return -1;
   }
   return (int) stat_struct.st_size;
}

int send_a_line_to_socket(
		int acceptance_socket_file_descriptor,
		unsigned char *buffer
	) {

   int sent_bytes;
   int bytes_to_send;

   bytes_to_send = strlen(buffer);

   while(bytes_to_send > 0) {
      sent_bytes = send(
    		  acceptance_socket_file_descriptor,
			  buffer,
			  bytes_to_send,
			  0
      	  );
      if(sent_bytes == -1)
         return 0;
      bytes_to_send -= sent_bytes;
      buffer += sent_bytes;
   }

   return 1;
}

int receive_a_line_from_socket(
		int acceptance_socket_file_descriptor,
		unsigned char *ucp_destination_buffer
	) {

   unsigned char *ucp_temp;

   int end_of_line_matched = 0;

   ucp_temp = ucp_destination_buffer;

   while(recv(
		   acceptance_socket_file_descriptor,
		   ucp_temp,
		   1,
		   0
   ) == 1) {
      if(*ucp_temp == END_OF_LINE[end_of_line_matched]) {
         end_of_line_matched++;
         if(end_of_line_matched == END_OF_LINE_SIZE) {
            *(ucp_temp + 1 - END_OF_LINE_SIZE) = '\0';
            return strlen(ucp_destination_buffer);
         }
      } else {
         end_of_line_matched = 0;
      }
      ucp_temp++;
   }

   return 0;
}
