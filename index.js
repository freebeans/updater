const config = {
  porta: process.env.npm_package_config_port ? process.env.npm_package_config_port : 8080,
  appsdir: process.env.npm_package_config_appsdir ? process.env.npm_package_config_appsdir : "/srv/apps",
  tempdir: process.env.npm_package_config_tempdir ? process.env.npm_package_config_tempdir : "/tmp/apps"
};

const fs = require('fs');
const express = require('express');
const fileupload = require('express-fileupload');

console.log(Date());
console.log(process.env.npm_package_name, process.env.npm_package_version);
console.log(JSON.stringify(config, null, 2));

fs.access(config.appsdir, fs.constants.W_OK, (err) => {
  if (err) {
    console.error("Impossível escrever em", config.appsdir);
    process.exit(0);
  } else {
    fs.access(config.tempdir, fs.constants.W_OK, (err) => {
      if (err) {
        console.error("Impossível escrever em", config.tempdir);
        process.exit(0);
      } else {
        main();
      }
    });
  }
});

function main() {
  var app = express();
  app.use(fileupload());

  var server = app.listen(config.porta, function() {
    console.log("servidor inicializado");
  });

  app.get('/', function(req, resp) {
    resp.sendFile(__dirname + "/public/index.html");
  });

  app.post('/upload', function(req, resp) {
    var file = req.files.file;  // TODO: ter certeza de que o front-end só aceitará um arquivo
    file.mv(config.tempdir + '/' + file.name, function (err) {
      if(err){
        console.error(err);
      }
      console.log("atualização recebida:", file.name);
      console.log("salvo em", config.tempdir + '/' + file.name);
      resp.send("Analisando...");
    });
  });

}
