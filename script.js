
        let cart = [];

        function updateCart() {
            const cartItemsList = document.getElementById('cart-items');
            const totalPriceElement = document.getElementById('total-price');
            cartItemsList.innerHTML = '';
            let totalPrice = 0;
            cart.forEach(item => {
                const li = document.createElement('li');
                li.innerHTML = `${item.name} - ₹${item.price} 
                                <button onclick="removeFromCart('${item.name}')">Remove</button>`;
                cartItemsList.appendChild(li);
                totalPrice += item.price;
            });
            totalPriceElement.textContent = totalPrice;
        }

        function addToCart(productName, productPrice) {
            const item = { name: productName, price: parseFloat(productPrice) };
            cart.push(item);
            updateCart();
        }

        function removeFromCart(productName) {
            cart = cart.filter(item => item.name !== productName);
            updateCart();
        }

        const addToCartButtons = document.querySelectorAll('.addtocart');
        addToCartButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const productName = event.target.getAttribute('data-product');
                const productPrice = event.target.getAttribute('data-price');
                addToCart(productName, productPrice);
            });
        });

        document.getElementById('checkout').addEventListener('click', () => {
            if (cart.length === 0) {
                alert('Your cart is empty!');
            } else {
                alert('Proceeding to checkout...');
            }
        });

