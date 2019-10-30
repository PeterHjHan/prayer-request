var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //Retrieves all prayers
  res.send('HELLO WORLD This is the Prayer');
});

router.get('/:prayer_id', async (req,res) => {
  //Retrieves a Single Prayer Id
  let prayer_id  = req.params.prayer_id;
});

router.put('/:prayer_id', async (req,res) => {
  //Updates an existing a Single Prayer Id
  let prayer_id  = req.params.prayer_id;
});

router.put('/:prayer_id/follow', async (req, res) => {
  //Allows logged in user to Follow a prayer so they can help with prayer as well
  let prayer_id = req.params.prayer_id;
});

router.post('/new', async (req, res) => {
  //creates a new prayer when the form is submitted
  let data = req.body;

  console.log(data);
});

router.delete(':prayer_id/delete', async (req, res) => {
  //deletes a prayer request, only could be completed when logged in and confirmed
  //destructive method, requires additional confirmation
  let prayer_id = req.params.prayer_id;

  if( confirm('Do you want to delete this item?') ) {
    console.log('YES');
  }
})




module.exports = router;
