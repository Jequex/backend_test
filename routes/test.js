const { Router } = require("express");

const router = Router();

const test = require('../controllers/testController');

router.use("/populateDb", test.populateDb);

module.exports = router;