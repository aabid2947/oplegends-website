document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('/tebex/packages');
    const packages = await response.json();
    
    const container = document.getElementById('store-items');
    packages.data.forEach(pkg => {
      container.innerHTML += `
        <div class="store-item">
          <h3>${pkg.name}</h3>
          <p>$${pkg.price}</p>
          <button onclick="addToCart(${pkg.id})">Buy Now</button>
        </div>
      `;
    });
  });