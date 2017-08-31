const config = {
  porta   : process.env.npm_package_config_port ? process.env.npm_package_config_port : 8080,
  appsdir : process.env.npm_package_config_appsdir ? process.env.npm_package_config_appsdir : "/srv/apps"
};

const express = require('express');

var app = express();

var server = app.listen(config.porta, function () {
  console.log(Date());
  console.log(process.env.npm_package_name, process.env.npm_package_version);
  console.log(JSON.stringify(config, null, 2));
});

app.get('/', function (req, resp) {
  var resposta = '<h2>' + process.env.npm_package_name + ' ' + process.env.npm_package_version + '</h2>';
  resposta += JSON.stringify(config, null, 2).replace(/\n/g, '<br>');
  resp.send(resposta);
});
