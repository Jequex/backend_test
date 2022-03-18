const { Router } = require("express");

const router = Router();

router.use("/inbound", require('./inbound'));

router.use("/outbound", require('./outbound'));

router.use("/test", require('./test'));

module.exports = router;