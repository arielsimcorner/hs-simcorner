function sortProducts(sortBy) {
    var productsContainer = document.getElementById('carousel_one');
    var products = Array.from(productsContainer.getElementsByClassName('grid__item'));

    switch (sortBy) {
          case 'price-low-to-high':
            // Sorting by price as before
            products.sort(function (a, b) {
              var priceA = parseFloat(a.querySelector('.sale-price').textContent.replace(/[^\d.-]/g, ''));
              var priceB = parseFloat(b.querySelector('.sale-price').textContent.replace(/[^\d.-]/g, ''));
              return priceA - priceB;
            });
            break;

          case 'price-high-to-low':
            // Sorting by price as before
            products.sort(function (a, b) {
              var priceA = parseFloat(a.querySelector('.sale-price').textContent.replace(/[^\d.-]/g, ''));
              var priceB = parseFloat(b.querySelector('.sale-price').textContent.replace(/[^\d.-]/g, ''));
              return priceB - priceA;
            });
            break;

          case 'title-a-z':
            // Sorting by title A-Z
            products.sort(function (a, b) {
              var titleA = a.querySelector('.grid-product__title').textContent.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
              var titleB = b.querySelector('.grid-product__title').textContent.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
              return titleA.localeCompare(titleB);
            });
            break;

          case 'title-z-a':
            // Sorting by title Z-A
            products.sort(function (a, b) {
              var titleA = a.querySelector('.grid-product__title').textContent.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
              var titleB = b.querySelector('.grid-product__title').textContent.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
              return titleB.localeCompare(titleA);
            });
            break;

          case 'default':
          default:
            products.sort(function (a, b) {
              var titleA = a.querySelector('.grid-product__title').textContent.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
              var titleB = b.querySelector('.grid-product__title').textContent.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
              return titleA.localeCompare(titleB);
            });
            break;
        }

    // Append the sorted products back to the container
    products.forEach(function (product) {
      productsContainer.appendChild(product);
    });
  }