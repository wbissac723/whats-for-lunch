const Joi = require('joi');
const mongoose = require('mongoose');


const userSchema = new moongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 40
  },
  tribe: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 25,
    unique: true
  }
});


const User = mongoose.model('User', userSchema, 'Users')

function validateUser(user) {
  const schema = {
    name: Joi.string().min(3).max(40).required(),
    tribe: Joi.string().min(4).max(25).required()
  }

  return Joi.validate(user, schema);
}


module.exports.User = User;
module.exports.validate = validateUser;
