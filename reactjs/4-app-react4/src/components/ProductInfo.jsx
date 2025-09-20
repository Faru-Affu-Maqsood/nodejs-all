const ProductInfo = () => {
    const product = {
        name: "Laptop",
        price: 1200,
        availability: "In Stock"
    };

    return (
        <div>
            <h3>Product Name: {product.name}</h3>
            <p>Price: &#x20b9;{product.price}</p>
            <p>Availability: {product.availability}</p>
        </div>
    );
};

export default ProductInfo;