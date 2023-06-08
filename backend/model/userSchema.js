const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const validator = require("validator");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
firstname:{
    type: String,
    required: true,
},



lastname:{
  type: String,
  required: true,
},
  email: {
    type: String,
    unique: true,
    required: true,
    validator(value) {
      if (!validator.isEmail(value)) {
        throw new Error("email is invalid ");
      }
    },
  },
  password: {
    type: String,
    required: true,
  },
  //pass arry of obj
  tokens: [
    {
      token: {
        type: String,
        required: true,
    },
  },
],
});
//hashing password  - reg password save in encrypt
 userSchema.pre("save", async function (next) {
 if (this.isModified("password")) {
   this.password = await bcrypt.hash(this.password, 12);
}
next();
});


//generating token - login
userSchema.methods.generateAuthToken = async function () {
try {
  let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
  this.tokens = this.tokens.concat({ token: token });
  await this.save();
  return token;
} catch(err) {
  console.log(err);
}
};
// schema export
const User = mongoose.model("USER", userSchema);
module.exports = User;