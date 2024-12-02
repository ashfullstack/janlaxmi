var mysql = require("mysql");
var util = require("util");

var conn = mysql.createConnection({
    "host": "bczrbgke3y2vll6mgtkq-mysql.services.clever-cloud.com",
    "user": "u1kt78ilgzbzncrr",
    "password": "Mpnv7aECJZwzvNKu3kfZ",
    "database": "bczrbgke3y2vll6mgtkq"
})

var exe = util.promisify(conn.query).bind(conn);

module.exports = exe;
