# devstep-squid3-ssl

A plugin for automatically configuring [Devstep containers](http://fgrehm.viewdocs.io/devstep) created by its [CLI]](https://github.com/fgrehm/devstep-cli) to use a Squid3 caching proxy with SSL enabled in order to reduce the time taken during the dependencies installation process.

## Installation

```sh
mkdir -p $HOME/devstep/plugins
git clone https://github.com/fgrehm/devstep-squid3-ssl.git $HOME/devstep/plugins/squid3-ssl
```

## Usage

First you'll need to start the [Squid3 container](https://github.com/fgrehm/squid3-ssl-docker) making use of the [provided bash script](start-container):

```sh
$HOME/devstep/plugins/squid3-ssl/start-container
```

Then every time you create containers with the `devstep` command, it will be set up to use the caching proxy.

## More information

http://fgrehm.viewdocs.io/devstep/cli/plugins
