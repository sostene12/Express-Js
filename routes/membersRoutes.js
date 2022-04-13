const { Router } = require("express");
const members = require("../members");
const uuid = require("uuid");

const route = Router();

// get all members
route.get("/", (req, res) => {
  res.json(members);
});

// get single member
route.get("/:id", (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));
  if (found) {
    res.json(members.filter((member) => member.id == req.params.id));
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});

// creating a member
route.post("/", (req, res) => {
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: "active",
  };
  if (!newMember.name || !newMember.email) {
    return res.status(400).json({ msg: "please include name and email" });
  }
  members.push(newMember);
  res.status(200).json(members);
});

// update mamber
route.get("/:id", (req, res) => {
  // check if the member exists
  const found = members.some((member) => member.id === parseInt(req.params.id));
  if (found) {
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});

module.exports = route;
