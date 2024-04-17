import { useState } from "react";

function useCart() {
    const [cart, setCart] = useState(() => {
        // Lấy giỏ hàng từ localStorage nếu có, hoặc trả về một mảng rỗng
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

}

export default useCart;
