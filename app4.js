var fs = require('fs');
var co = require('co');
var argv = process.argv;

var displayFpath = co.wrap(function* (path) {
  var dir = yield readdir(path);
  var pathData = yield getStats(dir);
  pathData.forEach(function(el, i) {
    if (el.stat.isDirectory()) {
      displayFpath(el.path);
    } else {
      console.log(el.path);
    }
  });
});

displayFpath(argv[2]);

function readdir(path) {
  return new Promise(function(resolve, reject) {
    fs.readdir(path, function(err, data) {
      if (err) reject('ERROR: \n' + err);
      resolve({data: data, path: path});
    });
  });
}

function getStats(pathData) {
  return Promise.all(
    pathData.data.map(function(el, i) {
      return _stats(pathData.path + '/' + el);
    })
  );
}

function _stats(path) {
  return new Promise(function(resolve, reject) {
    fs.stat(path, function(err, stat) {
      if (err) reject(err);
      resolve({stat: stat, path: path});
    });
  });
}
