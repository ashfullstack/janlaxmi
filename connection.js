var mysql = require("mysql");
var util = require("util");

var conn = mysql.createConnection({
    "host": "bsutls7gqwbxyfnqgovv-mysql.services.clever-cloud.com",
    "user": "uubqsthcv5mbyayb",
    "password": "tfc8PNxukG7FicPB2zBf",
    "database": "bsutls7gqwbxyfnqgovv"
})

var exe = util.promisify(conn.query).bind(conn);

module.exports = exe;
