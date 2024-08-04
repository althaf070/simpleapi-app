import axios from 'axios';
import { useState } from 'react';

const ProductForm = () => {
    // State variables for form inputs
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/products', {
                name,
                quantity,
                price,
                image, // If you're handling image uploads
            });
            console.log('Product created:', response.data);
            // Optionally, reset form fields after successful submission
            setName('');
            setQuantity(0);
            setPrice(0);
            setImage(null);
        } catch (error) {
            console.error('Error creating product:', error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            
            <input
                type="text"
                placeholder="Product Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="number"
                placeholder="quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
            />
            <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            
            <button type="submit">Create Product</button>
        </form>
    );
};

export default ProductForm;
