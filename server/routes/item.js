const express = require("express");
const controller = require("../controllers/item");

const multer = require("multer");
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./src/assets/uploads");
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  },
});

const filter = (req, file, cb) => {
    if(file.mimetype === "image/jpeg" || file.mimetype === "image/png"){
        cb(null, true)
    }else{
        cb(null, false)
    }
}

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1042 * 5,
  },
  fileFilter: filter
});

const router = express.Router();

router.post("/", upload.single("image"), controller.addItem);
router.get('/', controller.getItems)

module.exports = router;
