# mocaccino MWS (Micro Web Server)

## how to
```
$ meson setup build
$ cd build
$ meson compile
$ ./mws
$ gdb -q ./mws
(gdb) list
(gdb) disass main
Dump of assembler code for function main:
   0x00000000000005fa <+0>:     push   %rbp
   0x00000000000005fb <+1>:     mov    %rsp,%rbp
   0x00000000000005fe <+4>:     mov    %edi,-0x14(%rbp)
   0x0000000000000601 <+7>:     mov    %rsi,-0x20(%rbp)
   0x0000000000000605 <+11>:    movl   $0x0,-0x4(%rbp)
   0x000000000000060c <+18>:    mov    -0x4(%rbp),%eax
   0x000000000000060f <+21>:    pop    %rbp
   0x0000000000000610 <+22>:    retq   
End of assembler dump.
...
(gdb) quit
$ cd ..
$ rm -R build
```
