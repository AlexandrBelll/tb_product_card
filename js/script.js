document.addEventListener('DOMContentLoaded', () => {
  const radios = document.querySelectorAll('.product-card__input');
  const skuDisplay = document.querySelector('.js-product-sku');
  const priceDisplay = document.querySelector('.js-product-price');
  const oldPriceDisplay = document.querySelector('.js-product-old-price');

  radios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      if (e.target.checked) {
        
        const newSku = e.target.getAttribute('data-sku');
        const newPrice = e.target.getAttribute('data-price');
        const newOldPrice = e.target.getAttribute('data-old');

        if (skuDisplay) skuDisplay.textContent = newSku;
        if (priceDisplay) priceDisplay.textContent = newPrice;
        
        if (oldPriceDisplay) {
          if (newOldPrice) {
            oldPriceDisplay.textContent = newOldPrice;
            oldPriceDisplay.style.display = 'inline';
          } else {
            oldPriceDisplay.style.display = 'none';
          }
        }
      }
    });
  });
});
