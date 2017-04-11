var express = require('express');
var router = express.Router();
const knex = require('../knex')


/* GET home page. */
router.get('/', function(req, res, next) {
  knex('phonographs')
  .then(phone => {
    res.render('index', {phone})
  })
});

router.get('/:id', function(req, res, next) {
  let id = +req.params.id
  knex('phonographs')
  .where('id', id)
  .then(phone => {
    res.render('indexId', {phone})
  })
});

module.exports = router;
