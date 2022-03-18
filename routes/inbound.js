const { Router } = require("express");

const router = Router();

const inboundController = require('../controllers/inboundController');

router.use("/sms", inboundController.inboundSMS);

module.exports = router;