const express = require("express");
const { getUser, getAllUsers, addUser, deleteUser, updateUser } = require("../controllers/Users");

const router = express.Router();

router.route("/").get(getAllUsers); // "localhost:6161/users" >> getAllUsers
router.route("/getuser").get(getUser); // "localhost:6161/users/get-user"
router.route("/adduser").post(addUser)
router.route("/deleteuser").delete(deleteUser)
router.route("/updateuser").patch(updateUser)
router.route("/updateusers").put(updateUser)






/*
router.get("/get-user", verifyAuthToken, userController.getUser);
router.post("/add-user", verifyAuthToken, userController.addUser);
router.delete("/delete-user", verifyAuthToken, userController.deleteUser);
router.patch("/update-user", verifyAuthToken, userController.updateUser);
router.put("/change-user", verifyAuthToken, userController.changeUser);
*/

module.exports = router;