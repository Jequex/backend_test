const { Router } = require("express");

const router = Router();

const outboundController = require('../controllers/outboundController');

router.use("/sms", outboundController.outboundSMS);

module.exports = router;