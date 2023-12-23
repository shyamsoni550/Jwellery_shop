function sortProducts(order) {
     let products = document.querySelectorAll('.product');
     // Sort products based on price (ascending or descending)
     products.sort((a, b) => {
       const priceA = parseFloat(a.querySelector('p').textContent.replace('$', ''));
       const priceB = parseFloat(b.querySelector('p').textContent.replace('$', ''));
       return order === 'asc' ? priceA - priceB : priceB - priceA;
     });
     // Update DOM with sorted products
     document.querySelector('.products').appendChild(...products);
   }
   
   // Add event listeners to sort buttons
   document.getElementById('sortAsc').addEventListener('click', () => sortProducts('asc'));
   document.getElementById('sortDesc').addEventListener('click', () => sortProducts('desc'));
   