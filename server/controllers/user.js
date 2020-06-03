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
  loginUser: async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await User.login(username, password);
      if (!user) {
        return res.status(404).json({ error: "Username doesnt exist" });
      }
      const token = await user.genJWT();
      if (!token) {
        return res.status(503).json({ error: "Failed to create jwt token" });
      }
      res
        .status(200)
        .cookie("token", token, {
          expires: new Date(Date.now),
        })
        .json(user);
    } catch (err) {
      console.log(err);
      res.status(503).json({ error: err });
    }
  },
};
