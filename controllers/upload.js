const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: path.join(__dirname + "./../images/"),
  filename: function (req, file, cb) {
    cb(null, "IMAGE-" + Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
}).single("myImage");

exports.upload = (req, res) => {
  upload(req, res, (err) => {
    if (!err) {
      res.send({
        data: req.file.filename,
      });
    } else {
      res.status(401).send({
        msg: err.message,
      });
    }
  });
};
