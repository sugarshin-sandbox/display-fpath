/*!
 * @license display-fname
 * (c) sugarshin
 * License: MIT
 */

var fs = require('fs');
var glob = require('glob');
var argv = process.argv;

function displayFname(path, writeFilePath) {
  glob(path + '/**/*', function(err, files) {
    if (err) return console.log(err);
    var data = files.filter(function(el, i) {
      if (!fs.statSync(el).isDirectory()) return el;
    }).join('\n');

    if (writeFilePath) {
      writeFile(data, writeFilePath);
    } else {
      stdout(data);
    }
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

displayFname(argv[2], argv[3]);
