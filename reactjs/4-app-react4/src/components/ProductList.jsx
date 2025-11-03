const ProductList = () => {
    const products = [
        { id: 1, name: 'OnePlus 15', price: '\u20b989999.99' },
        { id: 2, name: 'Laptop', price: '\u20b9112999.99' },
        { id: 3, name: 'Headphones', price: '\u20b97927.33' },
        { id: 4, name: 'Nikon Camera', price: '\u20b9321999.99' },
    ];
    return (
        <div>
            {
                products.map((prod) => (
                    <div key={prod.id}>
                        <blockquote>Product Name: {prod.name}</blockquote>
                        <blockquote>Price: {prod.price}</blockquote>
                    </div>
                ))
            }
        </div>
    );
};

export default ProductList;