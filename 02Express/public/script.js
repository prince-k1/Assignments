document.getElementById('productForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const productName = document.getElementById('product').value;

    axios.post('/add-product', { productName })
        .then(response => {
            document.getElementById('response').innerText = response.data.message;
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
