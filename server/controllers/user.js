const User = require("../models/User");

module.exports = {
  createUser: async (req, res) => {
    try {
      if (await User.findOne({ username: req.body.username })) {
        return res
          .status(400)
          .json({ error: "Use with that username already exist" });
      }
      const user = new User(req.body);
      await user.save();
      res.status(201).json(user);
    } catch (err) {
      res.status(503).json({ error: err });
    }
  },
};
