const bcrypt = require("bcryptjs");
const mongoose = require("../db");
const jwt = require('jsonwebtoken')

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 7,
  },
});

mongoose.set("useCreateIndex", true);

UserSchema.pre('save', async function(next) {
	const user = this;
	if (!user.isModified('password')) {
		return next();
	}
	user.password = await bcrypt.hash(user.password, 8);
});

UserSchema.statics.login = async (username, password) => {
  try {
    const user = await User.findOne({
      username: String(username),
    });
    if (await bcrypt.compare(password, user.password || "")) {
      return user;
    }
    throw new Error();
  } catch (error) {
    throw new Error(error);
  }
};

UserSchema.methods.generateAuthToken = function(){
  const {_id} = this
  return jwt.sign({
    _id
  },
  process.env.JWTkey, {
    algorithm: 'HS512',
    expiresIn: '12h'
  })
}

const User = mongoose.model("User", UserSchema);

module.exports = User;
