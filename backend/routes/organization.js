var express = require('express');
var router = express.Router();

/* GET a list of All registered Organization. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// GET a list of All prayers/members of the organization
router.get('/:organization_id', function(req, res, next) {
  let organization_id = req.params.organization_id;

  res.send('respond with a resource');
});

module.exports = router;
