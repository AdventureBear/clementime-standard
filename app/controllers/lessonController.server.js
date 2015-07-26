/**
 * Created by suzanne on 7/25/15.
 */
'use strict';

var Lesson = require('../models/lesson');

module.exports.list = function (req, res) {
  Lesson
    .find({})
    .sort({ '_id': 1 })
    .exec(function (err, results) {
      if (err) { throw err; }

      res.json(results);
    });
};

