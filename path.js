// npm install --save path

// The path module provides utilities for working with file and directory paths.

const path = require("path");

/* The path.join() method joins all given path segments
together using the platform-specific separator as a delimiter*/
app.use("/uploads/images", express.static(path.join("uploads", "images")));

// The path.resolve() method resolves a sequence of paths or path segments into an absolute path.
res.sendFile(path.resolve(__dirname, "./frontend/build", "index.html"));
