document.addEventListener('DOMContentLoaded', () => {

    const content = document.getElementById('content');

    const shopLink = document.getElementById('shop-link');
    const addProductLink = document.getElementById('add-product-link');
    const contactusLink = document.getElementById('contactus-link');

    const loadShopPage = () => {
        content.innerHTML = `
            <h1>Products</h1>
            <ul id="product-list"></ul>
        `;
        axios.get('/products')
            .then(response => {
                const products = response.data;
                const productList = document.getElementById('product-list');
                products.forEach(product => {
                    const productItem = document.createElement('li');
                    productItem.classList.add('product');
                    productItem.innerHTML = `<h3>${product.name}</h3>
                    <p>Size: ${product.size}<br>
                    Description:${product.description}<br>
                    Price:${product.price}
                    </p>
                     <img src="/images/${product.photo}" alt="${product.photo}" style="max-width: 200px;">`;
                    productList.appendChild(productItem);
                });
            })
            .catch(error => console.error('Error fetching products:', error));
    };

    const loadAddProductPage = () => {
        content.innerHTML = `
            <h1>Add Product</h1>
            <form action="/admin/product" method="POST">
                <div class="form-controle">
                    <label>Title: <input type="text" name="tittle" required></label>
                
                    <label>Size: <input type="number" name="size" required></label>
                
                    <label>
                 Photo:<input type="file" name="photo" accept="image/*" required>
                     </label>
               
               <label> Derscription:<input type="text" name="description" required></label>

               <label>Price: <input type="number" name="price" required></label>
                </div>
                <button type="submit">Submit</button>
            </form>
        `;
    };

    const loadContactUsPage = () => {
        content.innerHTML = `
            <h1>Contact Us</h1>
            <form action="/success" method="POST">
                <div class="form-controle">
                    <label>Name: <input type="text" name="name" required></label>
                
                    <label>Phone: <input type="tel" name="phone" required></label>
                </div>
                <button type="submit">Submit</button>
            </form>
        `;
    };

    shopLink.addEventListener('click', loadShopPage);
    addProductLink.addEventListener('click', loadAddProductPage);
    contactusLink.addEventListener('click', loadContactUsPage);

    // Load the shop page by default
    loadShopPage();
});
