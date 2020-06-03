const User = require("../models/User");

module.exports = {
  test: async (req, res) => {
    res.send("Hello world");
  },
  createUser: async (req, res) => {
    try {
      if (await User.findOne({ username: req.body.username })) {
        return res
          .status(400)
          .json({ error: "Use with that username already exist" });
      }
      const user = new User(req.body);
      user.save();
      res.status(201).json(user);
    } catch (error) {
      res.status(503).json(error);
    }
  },
};
