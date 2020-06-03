const bcrypt = require("bcryptjs");
const mongoose = require("../db");

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

UserSchema.pre("save", async function(next) {
  // Hash the password before saving the user model
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }
  user.password = await bcrypt.hash(user.password, 8);
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
