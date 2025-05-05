const path = require('path');
const getProduct = (req,res) => {
    res.sendFile(path.join(__dirname,"..","views","product.html"));
};

const getProductById = (req,res) => {
    let id = +req.params.id;
    res.send(`Fetching user with ID: ${id}`);
}

const postProduct = (req,res) => {
    const data = req.body;
    // console.log(data);
    res.send({value: data.productName});
};

module.exports ={
    getProduct,
    getProductById,
    postProduct
}