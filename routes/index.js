var express = require('express');
var router = express.Router();
var senzor = require('htu21d');
var device = "/dev/i2c-1";
var address = 0x40;

/* GET home page. */
router.get('/senzor', function(req, res, next) {
  
  var senzor = new senzor.Htu21d(device, address)
  var temp = senzor.temperature()
  var humid = senzor.humidity()
  res.send({humid, temp});
});

module.exports = router;
