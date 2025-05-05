const getCart = (req,res) => {
    let id = +req.params.id;
    res.send(`Fetching cart for the user with ID: ${id}`);
};

const postCart = (req,res) => {
    let id = +req.params.id;
    res.send(`Adding product to cart for user with ID: ${id}`);
};

module.exports = {
    getCart,
    postCart
}