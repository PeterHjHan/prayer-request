var express = require('express');
var router = express.Router();

//
router.get('/:type_id', function(req, res, next) {
  let type_id = req.params.type_id
  res.send(`THIS IS THE TYPES~~~ ${type_id}`);
});

module.exports = router;
