const express = require ("express");
const router = express.Router();

app.post("/", async (req, res) => {
  let { name, email, password } = req.body;
  let newUser = new User({ name: name, email: email, password: password });
  await newUser.save();     //will add data into user collection
  res.send("User Added");
})

app.get("/", async (req, res) => {
  let allusers = await User.find();
  res.send(allusers)
})

app.get("/:id"), async (req, res) => {
  let { id } = req.params;
  let oneuser = await User.findById(id);
  res.send(oneuser);
}

module.exports = router;

//we cant use listen method on routes except that everything can run on api