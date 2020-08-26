// https://mongoosejs.com/docs/
// npm install mongoose
// mongodb+srv://backend :Vm0sKWKUfHkJj5Ci@cluster0.5vjdf.mongodb.net/backendtest?retryWrites=true&w=majority
const mongoose = require("mongoose");

findById();
// Finds a single document by its _id field.
const placeId = req.params.pid;
Modle = await Modle.findById(placeId);

find();
// find all the document and return an array
Place.find({ creator: userId });
// you can use find() in several ways
Place.find({}, "email name"); // 1 this way
Place.find({}, "-password"); // 2 this way
Place.find({}, "email password"); // 1 this way

save(); // to push into the DB
Place.save();

remove(); // delet form the DB
place.remove();

populate("Modle");
// make links between schema and another
userWithPlaces = await User.findById(userId).populate("Modle");

// *********
// deal with data in mongoDB
try {
  // create object from statrtsession
  const sess = await mongoose.startSession();

  // startTransaction() :
  //  let you execute multiple operations in isolation and potentially
  // undo all the operations if one of them fails.
  sess.startTransaction();

  // Saves this document by inserting a new document into the database
  await createdPlace.save({ session: sess });

  // doc.nums.push(5); // Add 5 to the end of the array
  user.places.push(createdPlace);
  await user.save({ session: sess });
  // Once the transaction is committed, the write operation becomes
  // visible outside of the transaction.
  await sess.commitTransaction();
} catch (err) {
  const error = new HttpError("Creating place failed, please try again.", 500);
  return next(error);
}
// *********

// *********
// established a connection
mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PW}@cluster0-jtuqz.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => app.listen(3000)) // connect to local host
  .catch((err) => console.log("err happened in db connection!", err));
// *********

// ****
userScheama.virtual("password");
// Virtuals are document properties that you can get and set but that do not get persisted to MongoDB
// define a schema
var personSchema = new Schema({
  name: {
    first: String,
    last: String,
  },
});

// compile our model
var Person = mongoose.model("Person", personSchema);

// create a document
var axl = new Person({
  name: { first: "Axl", last: "Rose" },
});
console.log(axl.name.first + " " + axl.name.last); // Axl Rose
// *****
