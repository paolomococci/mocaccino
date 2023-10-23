# HOWTO_util_shell_command

## how to view data and time

```shell
date
```

### how to set date and time

```shell
sudo date --set 1998-11-02
sudo date --set 21:08:00
```

## how to use ip instead of ifconfig

```shell
sudo ip a
```

## how to use composer

### to update

```shell
composer self-update
```

## how to use scp

### from laptop to server

```shell
scp HOWTO_enable_apache2_https.md username@192.168.X.X:/home/username/Downloads
```

### from server to laptop

```shell
scp username@192.168.X.X:/home/username/Documents/HOWTO_enable_apache2_https.md .
```

## how to update node.js

```shell
sudo npm cache clean -f
sudo npm install -g n
sudo n stable
```

## how to update angular

```shell
ng v
sudo npm uninstall -g @angular/cli
sudo npm install -g @angular/cli@latest
```

## how to update

```shell
sudo npm install -g npm@latest
```
