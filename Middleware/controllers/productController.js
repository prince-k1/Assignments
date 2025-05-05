const path = require('path');
const getProduct = (req,res) => {
    res.sendFile(path.join(__dirname,"..","views","product.html"));
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