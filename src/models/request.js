const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RequestSchema = Schema({
  title: String,
  userid: String,
  providername: String,
  requestdate: String,
  category: String,
  rating: String,
  description: String,
  status: {
  type: Boolean,
  default: false
  }
});

module.exports = mongoose.model('requests', RequestSchema);
