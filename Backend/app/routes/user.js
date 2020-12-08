const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.get("/", userController.index);
router.post("/", userController.create);

module.exports = router;
