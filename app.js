/*!
 * @license display-fname
 * (c) sugarshin
 * License: MIT
 */

var fs = require('fs');
var glob = require('glob');
var argv = process.argv;

function stdout(data) {
  console.log(data);
}

function writeFile(data, filePath) {
  fs.writeFile(filePath, data, function (err) {
    if (err) return console.log('File error: ' + err);
    console.log('Success!! => ' + filePath);
  });
}

function displayFname(path, writeFileName) {
  glob(path + '/**/*', function(err, files) {
    var data = files.map(function(el, i) {
      if (!fs.statSync(el).isDirectory()) return el;
    }).filter(function(el, i) {
      if (el) return el;
    }).join('\n');

    if (writeFileName) {
      writeFile(data, writeFileName);
    } else {
      stdout(data);
    }
  });
}

displayFname(argv[2], argv[3]);
