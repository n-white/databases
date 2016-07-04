var models = require('../models');

module.exports = {

  messages: {
    get: function (req, res) {
      // console.log('test')
      models.messages.get(function(err, results) {
        if (err) { console.log('error'); }
        res.json(results);
      });
    },
    post: function (req, res) {
      
      var params = [req.body.text, req.body.username, req.body.roomname];
      // console.log(params);
      models.messages.post(params, function(err, results) {

        if (err) {  console.log('error'); }
        res.sendStatus(201);
      });
    }
  },

  users: {
    get: function (req, res) {
      models.users.get(function(err, results) {
        if (err) {  console.log('error'); }
        res.json(results);
      });
    },
    post: function (req, res) {
      var params = [req.body.username];
      models.users.post(params, function(err, results) {
        if (err) {  console.log('error'); }
        res.sendStatus(201);
      });
    }
  }
};

