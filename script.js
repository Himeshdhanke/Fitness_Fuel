
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
function placeorder() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return false;
    } else {
        alert('Proceeding to checkout...');
        return true;
    }};
    function validateForm() {
        const name = document.getElementById('name1').value;
        const age = document.getElementById('age').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const verificationMessage = document.getElementById('verificationMessage');
        
        const nameRegex = /^[A-Za-z]+$/;
        const ageRegex = /^[1-9][0-9]?$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // At least 8 characters, one letter and one number

        if (name === '' || age === '' || email === '' || password === '' || confirmPassword === '') {
            verificationMessage.textContent = 'Please fill out all fields.';
            return;
        }
        if (!nameRegex.test(name)) {
            verificationMessage.textContent = 'Name should be in alphabets only.';
            return;
        }
        if (!ageRegex.test(age)) {
            verificationMessage.textContent = 'Age should be a positive two-digit number.';
            return;
        }
        if (!emailRegex.test(email)) {
            verificationMessage.textContent = 'Please enter a valid email address.';
            return;
        }
        if (!passwordRegex.test(password)) {
            verificationMessage.textContent = 'Password should be at least 8 characters long and contain at least one letter and one number.';
            return;
        }
        if (password !== confirmPassword) {
            verificationMessage.textContent = 'Passwords do not match.';
            return;
        }
        
        verificationMessage.textContent = 'All details verified. You may proceed!';
    }    
    function validateForm2() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const verificationMessage = document.getElementById('verificationMessage');
        
        if (username === '' || password === '') {
            verificationMessage.textContent = 'Please fill out all fields!!!';
            return;
        }
        
        verificationMessage.textContent = 'All details verified. You may proceed!';
    }
