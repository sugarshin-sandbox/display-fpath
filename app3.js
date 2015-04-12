var fs = require('fs');
var argv = process.argv;

function stats(path) {
  return new Promise(function(resolve, reject) {
    fs.stat(path, function(err, stats) {
      if (err) reject(err);
      resolve(stats);
    });
  });
}

function displayFpath(path, writeFilePath) {
  fs.readdir(path, function(err, data) {
    data.forEach(function(el, i) {
      var name = path + '/' + el;
      stats(name)
        .then(function(stats) {
          if (stats.isDirectory()) {
            displayFpath(name);
          } else {
            console.log(name);
          }
        })
        .catch(function(err) {
          return console.log('ERROR: \n' + err);
        });
    });
  });
}

function stdout(data) {
  console.log(data);
}

function writeFile(data, filePath) {
  fs.writeFile(filePath, data, function (err) {
    if (err) return console.log('File error: ' + err);
    console.log('Success!! => ' + filePath);
  });
}

displayFpath(argv[2]);
