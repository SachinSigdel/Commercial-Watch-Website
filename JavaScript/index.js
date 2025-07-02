var counter = document.getElementById('counter'); // getting the counter element from html
counter = 1;

// decreases the counter by 1 and updates the counter id in html
function decreaseAmount() {
    counter--;
    document.getElementById('counter').innerHTML = counter;
    // sellable products shouldn't be less than or equals to 0.
    if(counter <= 0) {
        alert("Quantity should be 1 or more!");
            document.getElementById('counter').innerHTML = 1;
        }
}

// increases the counter by 1 and updates the counter id in html
function increaseAmount() {
    counter++;
    document.getElementById('counter').innerHTML = counter;
}

// checks if the elements in form are empty or not.
function validateForm() {
    var yourName = document.forms['review']['yourName'].value; // getting fname from form tag in html
    var yourReview = document.forms['review']['yourReview'].value; // getting lname from form tag in html
    if(yourName=='' || yourReview=='') {
        alert("Fields cannot be empty!"); 
    }
    else {
        alert("Thank you for the review!");
    }
}

const cartCounter = document.getElementById("cartCounter");
        const addToCartButton = document.getElementById("addToCart");

        // Load cart count from local storage
        let cartCount = localStorage.getItem("cartCount") ? parseInt(localStorage.getItem("cartCount")) : 0;
        updateCartDisplay();

        // Add to cart event
        addToCartButton.addEventListener("click", function () {
            cartCount++;
            localStorage.setItem("cartCount", cartCount); // Store in local storage
            updateCartDisplay();
            alert("Product added to cart!");
        });

        // Function to update cart display
        function updateCartDisplay() {
            cartCounter.innerText = cartCount;
            cartCounter.style.display = cartCount > 0 ? "block" : "none";
        }