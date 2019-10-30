var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:author_name', function(req, res, next) {

  let author_name = req.params.author_name

  res.send(`Hello ${author_name}`);
});

//Show all prayers posted by the user
router.get('/:author_name/prayers', function(req, res, next) {

  let author_name = req.params.author_name

  res.send(`Hello ${author_name}`);
});


//Show all prayer that the user has followed
router.get('/:author_name', function(req, res, next) {

  let author_name = req.params.author_name

  res.send(`Hello ${author_name}`);
});

//Able to view an organization 
router.get('/:author_name/org', function(req, res, next) {

  let author_name = req.params.author_name

  res.send(`Hello ${author_name}`);
});

//Update the information about an organization if the person is set as an organization admin
router.put('/:author_name/org', function(req, res, next) {

  let author_name = req.params.author_name

  res.send(`Hello ${author_name}`);
});

//Deletes all the information associated with this account, if this account holder is an organization administrator, a new person is necessary to be requested to the site admin
router.delete('/:author_name/delete', function(req, res, next) {

  let author_name = req.params.author_name

  res.send(`Hello ${author_name}`);
});

//updates user's information
router.put('/:author_name/edit', function(req, res, next) {

  let author_name = req.params.author_name

  res.send(`Hello ${author_name}`);
});

module.exports = router;
