
    let cart = JSON.parse(localStorage.getItem('ashariCart')) || [];
    function addToCart(name, price) {
        cart.push({ name, price });
        localStorage.setItem('ashariCart', JSON.stringify(cart));
        document.getElementById('cart-count').textContent = cart.length;
        alert(name + " has been added to your cart.");
    }
    document.getElementById('cart-count').textContent = cart.length;

    