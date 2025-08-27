const getProduct = (req, res) => {
    res.send('Fetching all products');
};

const postProduct = (req, res) => {
    res.send('Adding a new product');
};

const getProductById = (req, res) => {
    res.send(`Fetching product with ID: ${req.params.id}`);
};

module.exports = {
    getProduct,
    postProduct,
    getProductById
}