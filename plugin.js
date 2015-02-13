squidRoot   = _currentPluginPath;
squidShared = squidRoot + "/shared";

devstep.on('configLoaded', function(config) {
  config
    .addLink('squid3:squid3.dev')
    .setEnv('http_proxy', 'http://squid3.dev:3128')
    .setEnv('https_proxy', 'http://squid3.dev:3128')
    .setEnv('HTTPS_PROXY_CERT', 'squid3.dev.crt')
    .addVolume(squidShared + '/certs/squid3.dev.crt:/usr/share/ca-certificates/squid3.dev.crt')
    .addVolume(squidRoot + '/proxy.sh:/etc/devstep/init.d/proxy.sh');
});
