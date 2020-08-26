// https://www.npmjs.com/package/mongoose-unique-validator

// npm install --save mongoose-unique-validator

const uniqueValidator = require("mongoose-unique-validator");

// it gives unique type in mangoes a reference so it is easy to find and faster

// Define your schema as normal.
var userSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true }, // like here
  email: { type: String, index: true, unique: true, required: true }, // like here
  password: { type: String, required: true },
});

// Apply the uniqueValidator plugin to userSchema.
userSchema.plugin(uniqueValidator);
