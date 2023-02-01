import express, { json } from "express";
// import usersData from "../Data/usersData.js";
import bodyParser from "body-parser";
import { v4 as uuid } from "uuid";
const router = express.Router();

let usersData = [
  {
    id: "6bdd3d85-4903-402d-975d-79eab921f008",
    firstName: "joey",
    lastName: "tribiani",
    age: 33,
    gender: "Male",
  },
  {
    id: "e819233e-3c72-4fdd-b832-93b0501aa992",
    firstName: "chandler",
    lastName: "bing",
    age: 35,
    gender: "Male",
  },
  {
    id: "09c179b5-1e37-443d-b560-10d352fc7b10",
    firstName: "Saurbh",
    lastName: "Gupta",
    age: 40,
    gender: "Male",
  },
];

// ----------------------------------------------------- Create New User
router.get("/", (req, res) => {
  res.send(usersData);
});
// ----------------------------------------------------- Get Specific User
router.get("/:id", function (req, res) {
  let userFind = usersData.find((item) => {
    return item.id === parseInt(req.params.id);
  });
  if (userFind) {
    res.status(200).json(userFind);
  } else {
    res.sendStatus(404);
  }
});
// ----------------------------------------------------- Create New User
router.post("/register", (req, res) => {
  let data = req.body;
  const newUser = { id: uuid(), ...req.body };
  console.log("data", data);
  usersData.push(newUser);
  res.send(newUser);
});

// ------------------------------------------------------------- PUT /  Update User

router.put("/update/:id", (req, res) => {
  const { id } = req.params;

  const findUser = usersData.find((user) => {
    return user.id == id;
  });

  const findIndex = usersData.findIndex((user) => user.id == id);

  let updatedUser = { id, ...req.body };
  usersData.splice(findIndex, 1, updatedUser);

  console.log(findIndex);
  res.send(usersData);
});
// ------------------------------------------------------------- PATCH / Update Specific

router.patch("/update/:id", (req, res) => {
  const userId = req.params.id;
  const { firstName, lastName, age, gender } = req.body;

  const searchedUser = usersData.find((user) => {
    return user.id === userId;
  });

  if (firstName) {
    searchedUser.firstName = firstName;
  }
  if (lastName) {
    searchedUser.lastName = lastName;
  }
  if (age) {
    searchedUser.age = age;
  }
  if (gender) {
    searchedUser.gender = gender;
  }
  console.log(searchedUser);
  res.send(usersData);
});

// -------------------------------------------------------------- DELETE / delete user
router.delete("/delete/:id", (req, res) => {
  let ID = req.params.id;

  let findUser = usersData.find((user) => {
    return user.id === ID;
  });

  if (findUser) {
    usersData.splice(findUser, 1);
    res.send(`User with id '${ID}' removed from the database`);
  } else {
    res.send("user not found");
  }
});

export default router;
