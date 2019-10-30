const express = require('express');
const router = express.Router();

const prayerControler = require('../controller/prayer');

//Retrieves all prayers
router.get('/', function(req, res, next) {
  res.send('HELLO WORLD This is the Prayer');
});

//Retrieves a Single Prayer Id
router.get('/:prayer_id', (req,res) => {
  let prayer_id  = req.params.prayer_id;
});

//Updates an existing a Single Prayer Id
router.put('/:prayer_id', (req,res) => {
  let prayer_id  = req.params.prayer_id;
});

//Allows logged in user to Follow a prayer so they can help with prayer as well
router.put('/:prayer_id/follow', (req, res) => {
  let prayer_id = req.params.prayer_id;
});

//creates a new prayer when the form is submitted
router.post('/new', (req, res) => {
  let data = req.body;

  console.log("POST CALLED");

  prayerControler.createPrayer(data);
});

router.delete(':prayer_id/delete', (req, res) => {
  //deletes a prayer request, only could be completed when logged in and confirmed
  //destructive method, requires additional confirmation
  let prayer_id = req.params.prayer_id;

  if( confirm('Do you want to delete this item?') ) {
    console.log('YES');
  }
})




module.exports = router;
