///Re intialzing these npm packages:
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const controllers = require("../controllers/ambController");
///The following routers is pointing to the endpoint of our infomation.
router.get("/", controllers.getAllAmbs);
router.post("/", controllers.postAmb);
router.get("/:ambId", controllers.getAmb);
router.delete("/:ambId", controllers.deleteAmb);
router.patch("/:ambId", controllers.updateAmb);

module.exports = router;
