// https://express-validator.github.io/docs/index.html
// npm install express-validator

const { body, validationResult } = require("express-validator");
// in the router
router.post(
  "/",
  fileUpload.single("image"),
  [
    // to check it is not empty
    check("title").not().isEmpty(),
    // to check the length
    check("description").isLength({ min: 5 }),
  ],
  placesControllers.createPlace
);

// also you must in the midleware catch the error
const creatPlaces = (req, res, next) => {
  // catch erorr
  const err = validationResult(req);
  if (!err.isEmpty()) {
    throw new HttpError("not valid enrty ", 422);
  }
