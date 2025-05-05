const getUser = (req,res) => {
    res.send('Fetch all users');
};

const getUserById = (req,res) => {
    let id = +req.params.id;
    res.send(`Fetching user with ID: ${id}`);
};

const postUser = (req,res) => {
    res.send('Add a new user');
};

module.exports = {
    getUser,
    getUserById,
    postUser
}