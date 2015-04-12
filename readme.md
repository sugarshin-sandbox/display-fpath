# display-fpath

Display file path pattern

```zsh
node app1.js directory/path/to
node app2.js directory/path/to
node app3.js directory/path/to

# directory/path/to/file1.txt
# directory/path/to/file2.txt
# directory/path/to/dir/file.txt
# directory/path/to/dir/dir2/file.txt
```

write file

```zsh
node app.js1 directory/path/to filename.txt

# Success!! => filename.txt
```

## deps

* app1.js
  * [glob](https://github.com/isaacs/node-glob)
* app2.js
  * [recursive-readdir](https://github.com/jergason/recursive-readdir)
* app3.js
  * No deps
