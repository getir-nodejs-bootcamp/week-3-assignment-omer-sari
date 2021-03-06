const express = require("express");
const { getUser, getAllUsers, addUser, deleteUser, updateUser } = require("../controllers/Users");

const router = express.Router();

router.route("/").get(getAllUsers); // "localhost:6161/users" >> getAllUsers
router.route("/getuser").get(getUser); // "localhost:6161/users/get-user"
router.route("/adduser").post(addUser)
router.route("/deleteuser").delete(deleteUser)
router.route("/updateuser").patch(updateUser)
router.route("/updateusers").put(updateUser)

module.exports = router;