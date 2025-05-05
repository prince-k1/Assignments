const getProduct = (req,res) => {
    res.send('Fetching all users');
};

const getProductById = (req,res) => {
    let id = +req.params.id;
    res.send(`Fetching user with ID: ${id}`);
}

const postProduct = (req,res) => {
    res.send('Adding a new user');
};

module.exports ={
    getProduct,
    getProductById,
    postProduct
}