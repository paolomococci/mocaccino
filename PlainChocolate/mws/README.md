# mocaccino MWS (Micro Web Server)

## before completing development
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
## and after completing the development
```
$ gdb -q ./mws
Reading symbols from ./mws...done.
(gdb) disass display_fatal_error_message
Dump of assembler code for function display_fatal_error_message:
   0x0000000000000aca <+0>:     push   %rbp
   0x0000000000000acb <+1>:     mov    %rsp,%rbp
   0x0000000000000ace <+4>:     sub    $0x120,%rsp
   0x0000000000000ad5 <+11>:    mov    %rdi,-0x118(%rbp)
   0x0000000000000adc <+18>:    mov    %fs:0x28,%rax
   0x0000000000000ae5 <+27>:    mov    %rax,-0x8(%rbp)
   0x0000000000000ae9 <+31>:    xor    %eax,%eax
   0x0000000000000aeb <+33>:    lea    -0x110(%rbp),%rax
   0x0000000000000af2 <+40>:    movabs $0x6c61746166202120,%rdx
   0x0000000000000afc <+50>:    movabs $0x203a726f72726520,%rcx
   0x0000000000000b06 <+60>:    mov    %rdx,(%rax)
   0x0000000000000b09 <+63>:    mov    %rcx,0x8(%rax)
   0x0000000000000b0d <+67>:    movb   $0x0,0x10(%rax)
   0x0000000000000b11 <+71>:    mov    -0x118(%rbp),%rcx
   0x0000000000000b18 <+78>:    lea    -0x110(%rbp),%rax
   0x0000000000000b1f <+85>:    mov    $0xef,%edx
   0x0000000000000b24 <+90>:    mov    %rcx,%rsi
   0x0000000000000b27 <+93>:    mov    %rax,%rdi
   0x0000000000000b2a <+96>:    callq  0x920 <strncat@plt>
   0x0000000000000b2f <+101>:   lea    -0x110(%rbp),%rax
   0x0000000000000b36 <+108>:   mov    %rax,%rdi
   0x0000000000000b39 <+111>:   callq  0x970 <perror@plt>
   0x0000000000000b3e <+116>:   mov    $0x1,%edi
   0x0000000000000b43 <+121>:   callq  0x990 <exit@plt>
End of assembler dump.

(gdb) disass dump_row_memory
Dump of assembler code for function dump_row_memory:
   0x0000000000000b4f <+0>:     push   %rbp
   0x0000000000000b50 <+1>:     mov    %rsp,%rbp
   0x0000000000000b53 <+4>:     sub    $0x20,%rsp
   0x0000000000000b57 <+8>:     mov    %rdi,-0x18(%rbp)
   0x0000000000000b5b <+12>:    mov    %esi,-0x1c(%rbp)
   0x0000000000000b5e <+15>:    movl   $0x0,-0x8(%rbp)
   0x0000000000000b65 <+22>:    jmpq   0xc44 <dump_row_memory+245>
   0x0000000000000b6a <+27>:    mov    -0x8(%rbp),%edx
   0x0000000000000b6d <+30>:    mov    -0x18(%rbp),%rax
   0x0000000000000b71 <+34>:    add    %rdx,%rax
   0x0000000000000b74 <+37>:    movzbl (%rax),%eax
   0x0000000000000b77 <+40>:    mov    %al,-0x9(%rbp)
   0x0000000000000b7a <+43>:    mov    -0x8(%rbp),%edx
   0x0000000000000b7d <+46>:    mov    -0x18(%rbp),%rax
   0x0000000000000b81 <+50>:    add    %rdx,%rax
   0x0000000000000b84 <+53>:    movzbl (%rax),%eax
   0x0000000000000b87 <+56>:    movsbl %al,%eax
   0x0000000000000b8a <+59>:    mov    %eax,%esi
   0x0000000000000b8c <+61>:    lea    0x3d5(%rip),%rdi        # 0xf68
   0x0000000000000b93 <+68>:    mov    $0x0,%eax
   0x0000000000000b98 <+73>:    callq  0x900 <printf@plt>
   0x0000000000000b9d <+78>:    mov    -0x8(%rbp),%eax
   0x0000000000000ba0 <+81>:    and    $0xf,%eax
   0x0000000000000ba3 <+84>:    cmp    $0xf,%eax
   0x0000000000000ba6 <+87>:    je     0xbb7 <dump_row_memory+104>
   0x0000000000000ba8 <+89>:    mov    -0x1c(%rbp),%eax
   0x0000000000000bab <+92>:    sub    $0x1,%eax
   0x0000000000000bae <+95>:    cmp    %eax,-0x8(%rbp)
   0x0000000000000bb1 <+98>:    jne    0xc40 <dump_row_memory+241>
   0x0000000000000bb7 <+104>:   movl   $0x0,-0x4(%rbp)
   0x0000000000000bbe <+111>:   jmp    0xbce <dump_row_memory+127>
   0x0000000000000bc0 <+113>:   mov    $0x9,%edi
   0x0000000000000bc5 <+118>:   callq  0x8b0 <putchar@plt>
   0x0000000000000bca <+123>:   addl   $0x1,-0x4(%rbp)
   0x0000000000000bce <+127>:   mov    -0x8(%rbp),%eax
   0x0000000000000bd1 <+130>:   not    %eax
   0x0000000000000bd3 <+132>:   and    $0xf,%eax
   0x0000000000000bd6 <+135>:   cmp    %eax,-0x4(%rbp)
   0x0000000000000bd9 <+138>:   jb     0xbc0 <dump_row_memory+113>
   0x0000000000000bdb <+140>:   lea    0x38c(%rip),%rdi        # 0xf6e
   0x0000000000000be2 <+147>:   mov    $0x0,%eax
   0x0000000000000be7 <+152>:   callq  0x900 <printf@plt>
   0x0000000000000bec <+157>:   mov    -0x8(%rbp),%eax
   0x0000000000000bef <+160>:   and    $0xfffffff0,%eax
   0x0000000000000bf2 <+163>:   mov    %eax,-0x4(%rbp)
   0x0000000000000bf5 <+166>:   jmp    0xc2e <dump_row_memory+223>
   0x0000000000000bf7 <+168>:   mov    -0x4(%rbp),%edx
   0x0000000000000bfa <+171>:   mov    -0x18(%rbp),%rax
   0x0000000000000bfe <+175>:   add    %rdx,%rax
   0x0000000000000c01 <+178>:   movzbl (%rax),%eax
   0x0000000000000c04 <+181>:   mov    %al,-0x9(%rbp)
   0x0000000000000c07 <+184>:   cmpb   $0x1f,-0x9(%rbp)
   0x0000000000000c0b <+188>:   jbe    0xc20 <dump_row_memory+209>
   0x0000000000000c0d <+190>:   cmpb   $0x7e,-0x9(%rbp)
   0x0000000000000c11 <+194>:   ja     0xc20 <dump_row_memory+209>
   0x0000000000000c13 <+196>:   movzbl -0x9(%rbp),%eax
   0x0000000000000c17 <+200>:   mov    %eax,%edi
   0x0000000000000c19 <+202>:   callq  0x8b0 <putchar@plt>
   0x0000000000000c1e <+207>:   jmp    0xc2a <dump_row_memory+219>
   0x0000000000000c20 <+209>:   mov    $0x2e,%edi
   0x0000000000000c25 <+214>:   callq  0x8b0 <putchar@plt>
   0x0000000000000c2a <+219>:   addl   $0x1,-0x4(%rbp)
   0x0000000000000c2e <+223>:   mov    -0x4(%rbp),%eax
   0x0000000000000c31 <+226>:   cmp    -0x8(%rbp),%eax
   0x0000000000000c34 <+229>:   jbe    0xbf7 <dump_row_memory+168>
   0x0000000000000c36 <+231>:   mov    $0xa,%edi
   0x0000000000000c3b <+236>:   callq  0x8b0 <putchar@plt>
   0x0000000000000c40 <+241>:   addl   $0x1,-0x8(%rbp)
   0x0000000000000c44 <+245>:   mov    -0x8(%rbp),%eax
   0x0000000000000c47 <+248>:   cmp    -0x1c(%rbp),%eax
   0x0000000000000c4a <+251>:   jb     0xb6a <dump_row_memory+27>
   0x0000000000000c50 <+257>:   nop
   0x0000000000000c51 <+258>:   leaveq 
   0x0000000000000c52 <+259>:   retq
End of assembler dump.

(gdb) disass main
Dump of assembler code for function main:
   0x0000000000000c8a <+0>:     push   %rbp
   0x0000000000000c8b <+1>:     mov    %rsp,%rbp
   0x0000000000000c8e <+4>:     push   %rbx
   0x0000000000000c8f <+5>:     sub    $0x458,%rsp
   0x0000000000000c96 <+12>:    mov    %fs:0x28,%rax
   0x0000000000000c9f <+21>:    mov    %rax,-0x18(%rbp)
   0x0000000000000ca3 <+25>:    xor    %eax,%eax
   0x0000000000000ca5 <+27>:    movl   $0x1,-0x44c(%rbp)
   0x0000000000000caf <+37>:    movl   $0x1,-0x454(%rbp)
   0x0000000000000cb9 <+47>:    mov    $0x0,%edx
   0x0000000000000cbe <+52>:    mov    $0x1,%esi
   0x0000000000000cc3 <+57>:    mov    $0x2,%edi
   0x0000000000000cc8 <+62>:    callq  0x9a0 <socket@plt>
   0x0000000000000ccd <+67>:    mov    %eax,-0x448(%rbp)
   0x0000000000000cd3 <+73>:    cmpl   $0xffffffff,-0x448(%rbp)
   0x0000000000000cda <+80>:    jne    0xce8 <main+94>
   0x0000000000000cdc <+82>:    lea    0x28f(%rip),%rdi        # 0xf72
   0x0000000000000ce3 <+89>:    callq  0xaca <display_fatal_error_message>
   0x0000000000000ce8 <+94>:    lea    -0x454(%rbp),%rdx
   0x0000000000000cef <+101>:   mov    -0x448(%rbp),%eax
   0x0000000000000cf5 <+107>:   mov    $0x4,%r8d
   0x0000000000000cfb <+113>:   mov    %rdx,%rcx
   0x0000000000000cfe <+116>:   mov    $0x2,%edx
   0x0000000000000d03 <+121>:   mov    $0x1,%esi
   0x0000000000000d08 <+126>:   mov    %eax,%edi
   0x0000000000000d0a <+128>:   callq  0x8c0 <setsockopt@plt>
   0x0000000000000d0f <+133>:   cmp    $0xffffffff,%eax
   0x0000000000000d12 <+136>:   jne    0xd20 <main+150>
   0x0000000000000d14 <+138>:   lea    0x265(%rip),%rdi        # 0xf80
   0x0000000000000d1b <+145>:   callq  0xaca <display_fatal_error_message>
   0x0000000000000d20 <+150>:   movw   $0x2,-0x440(%rbp)
   0x0000000000000d29 <+159>:   mov    $0x1f40,%edi
   0x0000000000000d2e <+164>:   callq  0x8e0 <htons@plt>
   0x0000000000000d33 <+169>:   mov    %ax,-0x43e(%rbp)
   0x0000000000000d3a <+176>:   movl   $0x0,-0x43c(%rbp)
   0x0000000000000d44 <+186>:   lea    -0x440(%rbp),%rax
   0x0000000000000d4b <+193>:   add    $0x8,%rax
   0x0000000000000d4f <+197>:   mov    $0x8,%edx
   0x0000000000000d54 <+202>:   mov    $0x0,%esi
   0x0000000000000d59 <+207>:   mov    %rax,%rdi
   0x0000000000000d5c <+210>:   callq  0x910 <memset@plt>
   0x0000000000000d61 <+215>:   lea    -0x440(%rbp),%rcx
   0x0000000000000d68 <+222>:   mov    -0x448(%rbp),%eax
   0x0000000000000d6e <+228>:   mov    $0x10,%edx
   0x0000000000000d73 <+233>:   mov    %rcx,%rsi
   0x0000000000000d76 <+236>:   mov    %eax,%edi
   0x0000000000000d78 <+238>:   callq  0x960 <bind@plt>
   0x0000000000000d7d <+243>:   cmp    $0xffffffff,%eax
   0x0000000000000d80 <+246>:   jne    0xd8e <main+260>
   0x0000000000000d82 <+248>:   lea    0x21f(%rip),%rdi        # 0xfa8
   0x0000000000000d89 <+255>:   callq  0xaca <display_fatal_error_message>
   0x0000000000000d8e <+260>:   mov    -0x448(%rbp),%eax
   0x0000000000000d94 <+266>:   mov    $0xa,%esi
   0x0000000000000d99 <+271>:   mov    %eax,%edi
   0x0000000000000d9b <+273>:   callq  0x940 <listen@plt>
   0x0000000000000da0 <+278>:   cmp    $0xffffffff,%eax
   0x0000000000000da3 <+281>:   jne    0xdb1 <main+295>
   0x0000000000000da5 <+283>:   lea    0x213(%rip),%rdi        # 0xfbf
   0x0000000000000dac <+290>:   callq  0xaca <display_fatal_error_message>
   0x0000000000000db1 <+295>:   movl   $0x10,-0x450(%rbp)
   0x0000000000000dbb <+305>:   lea    -0x450(%rbp),%rdx
   0x0000000000000dc2 <+312>:   lea    -0x430(%rbp),%rcx
   0x0000000000000dc9 <+319>:   mov    -0x448(%rbp),%eax
   0x0000000000000dcf <+325>:   mov    %rcx,%rsi
   0x0000000000000dd2 <+328>:   mov    %eax,%edi
   0x0000000000000dd4 <+330>:   callq  0x980 <accept@plt>
   0x0000000000000dd9 <+335>:   mov    %eax,-0x444(%rbp)
   0x0000000000000ddf <+341>:   cmpl   $0xffffffff,-0x444(%rbp)
   0x0000000000000de6 <+348>:   jne    0xdf4 <main+362>
   0x0000000000000de8 <+350>:   lea    0x1e9(%rip),%rdi        # 0xfd8
   0x0000000000000def <+357>:   callq  0xaca <display_fatal_error_message>
   0x0000000000000df4 <+362>:   movzwl -0x42e(%rbp),%eax
   0x0000000000000dfb <+369>:   movzwl %ax,%eax
   0x0000000000000dfe <+372>:   mov    %eax,%edi
   0x0000000000000e00 <+374>:   callq  0x950 <ntohs@plt>
   0x0000000000000e05 <+379>:   movzwl %ax,%ebx
   0x0000000000000e08 <+382>:   mov    -0x42c(%rbp),%eax
   0x0000000000000e0e <+388>:   mov    %eax,%edi
   0x0000000000000e10 <+390>:   callq  0x8d0 <inet_ntoa@plt>
   0x0000000000000e15 <+395>:   mov    %ebx,%edx
   0x0000000000000e17 <+397>:   mov    %rax,%rsi
   0x0000000000000e1a <+400>:   lea    0x1d7(%rip),%rdi        # 0xff8
   0x0000000000000e21 <+407>:   mov    $0x0,%eax
   0x0000000000000e26 <+412>:   callq  0x900 <printf@plt>
   0x0000000000000e2b <+417>:   mov    -0x444(%rbp),%eax
   0x0000000000000e31 <+423>:   mov    $0x0,%ecx
   0x0000000000000e36 <+428>:   mov    $0xe,%edx
   0x0000000000000e3b <+433>:   lea    0x1ee(%rip),%rsi        # 0x1030
   0x0000000000000e42 <+440>:   mov    %eax,%edi
   0x0000000000000e44 <+442>:   callq  0x8f0 <send@plt>
   0x0000000000000e49 <+447>:   lea    -0x420(%rbp),%rsi
   0x0000000000000e50 <+454>:   mov    -0x444(%rbp),%eax
   0x0000000000000e56 <+460>:   mov    $0x0,%ecx
   0x0000000000000e5b <+465>:   mov    $0x400,%edx
   0x0000000000000e60 <+470>:   mov    %eax,%edi
   0x0000000000000e62 <+472>:   callq  0x8a0 <recv@plt>
   0x0000000000000e67 <+477>:   mov    %eax,-0x44c(%rbp)
   0x0000000000000e6d <+483>:   jmp    0xec3 <main+569>
   0x0000000000000e6f <+485>:   mov    -0x44c(%rbp),%eax
   0x0000000000000e75 <+491>:   mov    %eax,%esi
   0x0000000000000e77 <+493>:   lea    0x1c2(%rip),%rdi        # 0x1040
   0x0000000000000e7e <+500>:   mov    $0x0,%eax
   0x0000000000000e83 <+505>:   callq  0x900 <printf@plt>
   0x0000000000000e88 <+510>:   mov    -0x44c(%rbp),%edx
   0x0000000000000e8e <+516>:   lea    -0x420(%rbp),%rax
   0x0000000000000e95 <+523>:   mov    %edx,%esi
   0x0000000000000e97 <+525>:   mov    %rax,%rdi
   0x0000000000000e9a <+528>:   callq  0xb4f <dump_row_memory>
   0x0000000000000e9f <+533>:   lea    -0x420(%rbp),%rsi
   0x0000000000000ea6 <+540>:   mov    -0x444(%rbp),%eax
   0x0000000000000eac <+546>:   mov    $0x0,%ecx
   0x0000000000000eb1 <+551>:   mov    $0x400,%edx
   0x0000000000000eb6 <+556>:   mov    %eax,%edi
   0x0000000000000eb8 <+558>:   callq  0x8a0 <recv@plt>
   0x0000000000000ebd <+563>:   mov    %eax,-0x44c(%rbp)
   0x0000000000000ec3 <+569>:   cmpl   $0x0,-0x44c(%rbp)
   0x0000000000000eca <+576>:   jg     0xe6f <main+485>
   0x0000000000000ecc <+578>:   mov    -0x444(%rbp),%eax
   0x0000000000000ed2 <+584>:   mov    %eax,%edi
   0x0000000000000ed4 <+586>:   mov    $0x0,%eax
   0x0000000000000ed9 <+591>:   callq  0x930 <close@plt>
   0x0000000000000ede <+596>:   jmpq   0xdb1 <main+295>
End of assembler dump.

(gdb) quit
```
Developing in procedural terms, free from objects, is simply sublime.
