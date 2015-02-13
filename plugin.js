squidRoot   = _currentPluginPath;
squidShared = squidRoot + "/shared";

devstep.on('configLoaded', function(config) {
  config
    .addLink('squid3:squid3.dev')
    .setEnv('http_proxy', 'http://squid3.dev:3128')
    .setEnv('https_proxy', 'http://squid3.dev:3128')
    .setEnv('no_proxy', 'localhost,127.0.0.0/8,::1,192.168.0.1,2000::/3,fc00::/8')
    .setEnv('HTTPS_PROXY_CERT', 'squid3.dev.crt')
    .addVolume(squidShared + '/certs/squid3.dev.crt:/usr/share/ca-certificates/squid3.dev.crt')
    .addVolume(squidRoot + '/proxy.sh:/etc/devstep/init.d/proxy.sh');
});
