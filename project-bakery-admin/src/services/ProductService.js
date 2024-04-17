import axios from 'axios';

const API_URL = 'http://localhost:3000/products';

const ProductService = {

    getProducts: async () => {
        const response = await axios.get(API_URL);
        return response.data;
    },
    addProduct: async (product) => {
        const response = await axios.post(API_URL, product);
        return response.data;
    },
    updateProduct: async (product) => {
        const response = await axios.put(`${API_URL}/${product.id}`, product);
        return response.data;
    },
    deleteProduct: async (productId) => {
        await axios.delete(`${API_URL}/${productId}`);
    },
};

export default ProductService;