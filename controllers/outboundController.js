const client = require("../db");
const util = require("util");

const query = util.promisify(client.query).bind(client);

exports.outboundSMS = async (req, res) => {};