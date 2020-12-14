/*
 * @Author: TerryMin
 * @Date: 2020-09-15 11:11:56
 * @LastEditors: TerryMin
 * @LastEditTime: 2020-09-15 11:31:54
 * @Description: file not
 */

var mongodb = require('./mongodb');
var Schema = mongodb.mongoose.Schema;
var MovieSchema = new Schema({
  name: String,
  alias: [String],
  publish: Date,
  create_date: { type: Date, default: Date.now },
  images: {
    coverSmall: String,
    coverBig: String,
  },
  source: [{
    source: String,
    link: String,
    swfLink: String,
    quality: String,
    version: String,
    lang: String,
    subtitle: String,
    create_date: { type: Date, default: Date.now }
  }]
});
var Movie = mongodb.mongoose.model("Movie", MovieSchema);
var MovieDAO = function () { };

MovieDAO.prototype.findByIdAndUpdate = function (obj, callback) {
  var _id = obj._id;
  delete obj._id;
  Movie.findOneAndUpdate(_id, obj, function (err, obj) {
    callback(err, obj);
  })
}

MovieDAO.prototype.findByName = function (name, callback) {
  Movie.findOne({ name: name }, function (err, obj) {
    callback(err, obj);
  })
}

module.exports = new MovieDAO();