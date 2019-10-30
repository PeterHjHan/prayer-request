var express = require('express');
var router = express.Router();

//This is the main dashboard for the admin
router.get('/', function(req, res, next) {
  let type_id = req.params.type_id
  res.send(`THIS IS THE TYPES~~~ ${type_id}`);
});

//Deletes a prayer due to violation of terms and services
router.delete('/:prayer_id/delete', function(req, res, next) {
  let prayer_id = req.params.prayer_id;
});

//View all the datas listed for ALL organizations
router.get('/org', function(req, res, next) {

});

//Creates a new organization upon request and assigns administrators
router.post('/org/new', function(req, res, next) {

});

//Get Full details of the organization (address, members, member list, number of prayers)
router.get('/org/:organization_id', function(req, res, next) {
  let organization_id = req.params.organization_id;

});

//Updates the Organization's information (back up in case organization's assigned admins can't take the handle)
router.put('/org/:organization_id', function(req, res, next) {
  let organization_id = req.params.organization_id;
});

//Deletes an organization, VERY HEAVY CONSEQUENCES, DOUBLE CONFIRM IF POSSIBLE
router.delete('/org/:organization_id/delete', function(req, res, next) {
  let organization_id = req.params.organization_id;
});



module.exports = router;
