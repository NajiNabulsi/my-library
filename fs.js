// https://nodejs.org/api/fs.html

/**Asynchronously removes a file or symbolic link. No arguments other than a possible exception are given to the completion callback. */
//(unlink)
fs.unlink(req.file.path, (err) => {
  console.log(err);
});

// Assuming that 'path/file.txt' is a regular file.
fs.unlink("path/file.txt", (err) => {
  if (err) throw err;
  console.log("path/file.txt was deleted");
});
