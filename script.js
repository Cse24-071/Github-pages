
  document.querySelector(".dropdown-toggle").addEventListener("click", function () {
    document.querySelector(".dropdown-menu").classList.toggle("show");
  });

  

function addtoCart(productName, price) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({ name: productName, price: price });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(productName + " has been added to your cart.");
}

  function searchProducts(e) {
    e.preventDefault();
    const input = document.getElementById("searchInput").value.toLowerCase();
    const items = document.querySelectorAll(".product");
    let found = false;

    items.forEach(p => {
      const match = p.textContent.toLowerCase().includes(input);
      p.style.display = match ? "block" : "none";
      if (match) found = true;
    });

    document.getElementById("notFound").style.display = found ? "none" : "block";
  }


