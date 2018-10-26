var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
    userName:  {
        type: String,
        validate: {
            validator: function(v) {
              return /[a-z0-9]{20}/gi.test(v);
            },
            message: props => `${props.value} is not a valid First Name!`
          },
          required: [true, 'User Name Required']
      },
      
      firstName: {
        type: String,
        validate: {
          validator: function(v) {
            return /[a-z]/gi.test(v);
          },
          message: props => `${props.value} is not a valid First Name!`
        },
        required: [true, 'User First Name Required']
      },

    lastName:  {
        type: String,
        validate: {
          validator: function(v) {
            return /[a-z]/gi.test(v);
          },
          message: props => `${props.value} is not a valid Last Name!`
        },
        required: [true, 'User Last Name Required']
      },

    email:  {
        type: String,
        validate: {
          validator: function(v) {
            return /\S+@\S+.\S+/gi.test(v);
          },
          message: props => `${props.value} is not a valid Email!`
        },
        required: [true, 'User Email Required']
      }
})

module.exports = mongoose.model('User', UserSchema);
