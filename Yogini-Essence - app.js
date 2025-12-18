function scrollToProducts() {
  document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

function addToCart(product) {
  alert(product + ' har lagts i varukorgen!');
}

function handleSubmit(e) {
  e.preventDefault();
  alert('Tack för ditt meddelande! Vi hör av oss snart.');
  return false;
}
