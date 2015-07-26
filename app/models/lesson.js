/**
 * Created by suzanne on 7/25/15.
 */
// app/models/lesson.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var LessonSchema   = new Schema({
  coachName: String,
  clientName: String,
  lessonDate: {type: Date, default: Date.now},
  notes: String
});

module.exports = mongoose.model('Lesson', LessonSchema);