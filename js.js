/* ================= MOBILE MENU ================= */

function toggleMenu() {

    const menu =
        document.getElementById("navLinks");

    menu.classList.toggle("show");

}


/* ================= ADD TO CART ================= */

function addCart(product) {

    alert(
        "✅ " +
        product +
        " added to your cart!"
    );

}


/* ================= SEARCH PRODUCTS ================= */

function searchProducts() {

    const input =
        document.getElementById("searchInput");

    const search =
        input.value.toLowerCase();

    const products =
        document.querySelectorAll(".product-card");

    products.forEach(function(product) {

        const text =
            product.innerText.toLowerCase();

        if (text.includes(search)) {

            product.style.display = "block";

        } else {

            product.style.display = "none";

        }

    });

}


/* ================= CONTACT FORM ================= */

function sendMessage(event) {

    event.preventDefault();

    alert(
        "✅ Thank you! Your message has been submitted."
    );

    event.target.reset();

}