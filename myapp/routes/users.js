let express = require('express');
var router = express.Router();
let user = require('../table/userTable');
let mysql = require('../config/mysql');
/* GET users listing. */
router.get('/', function(req, res, next) {
  let userSelect = user.select('id',2)
  let b = mysql.query(userSelect,function (err,rows) {
    console.log('陈庆')
    console.log(err,rows)
    res.send(rows);
  })
});

module.exports = router;
