const data = require("../db/index");

const getAllUsers = (req, res) => {
    if (data) {
        return res.status(200).send(data)
    }
    else {
        res.status(404).send("Users arent found.")
    }
}

const getUser = (req, res) => {
    const body = req.body; //body'de id lazım.
    const user = data.find(user => body.id == user.id);
    if (user) return res.status(200).send(user)
    else return res.status(404).send("User is not found");
}

const addUser = (req, res) => {
    const newUser = {
        id: data.length + 1,
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        country: req.body.country,
        region: req.body.region
    };
    data.push(newUser)
    return res.status(200).send(newUser)
}

const deleteUser = (req, res) => {
    const id = req.body.id; //id alalım
    const user = data.findIndex(user => id == user.id);
    if (user > -1) {
        data.splice(user, 1)
        return res.status(200).send({
            message: `${id} is deleted`,
            userObject: data,
            statusCode: 200
        })
    } else {
        res.status(404).send("User is not found")
    }
}

const updateUser = (req, res) => {
    const id = req.body.id;
    const userIndex = data.findIndex(user => id == user.id);
    if (userIndex > -1 ) {
        data[userIndex] = {
            ...data[userIndex],
            ...req.body,
        }
        return res.status(200).send(`${id} is updated.`)
    } else {
        res.status(404).send("User is not found")
    }
}

module.exports = {
    getUser,
    getAllUsers,
    addUser,
    deleteUser,
    updateUser
}