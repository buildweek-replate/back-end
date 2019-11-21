const router = require('express').Router();

const Users = require('./users-model.js.js');
const restricted = require('../auth/restricted-middleware.js');
const checkRole = require('../auth/check-role-middleware.js');

router.get('/', restricted, checkRole('mero mero'), (req, res) => {
  Users.find()
    .then(users => {
      res.json({ loggedInUser: req.username, users });
    })
    .catch(err => res.send(err));
});

module.exports = router;
