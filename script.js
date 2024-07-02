document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('pricing-toggle');
    toggle.checked = false; 
    switchPricing();
});

function switchPricing() {
    const toggle = document.getElementById('pricing-toggle');
    if (toggle.checked) {
        document.getElementById('basic-price').innerText = '$19.99';
        document.getElementById('professional-price').innerText = '$24.99';
        document.getElementById('master-price').innerText = '$39.99';
    } else {
        document.getElementById('basic-price').innerText = '$199.99';
        document.getElementById('professional-price').innerText = '$249.99';
        document.getElementById('master-price').innerText = '$399.99';
    }
}



document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.pricing-card');

  cards.forEach(card => {
      card.addEventListener('click', function() {
          cards.forEach(c => c.classList.remove('active'));
          card.classList.add('active');

          if (window.innerWidth >= 768) {
              cards.forEach(c => c.style.transform = 'scale(1)');
              card.style.transform = 'scale(1.1)';
          }
      });
  });
});

window.addEventListener('resize', function() {
  const cards = document.querySelectorAll('.pricing-card');
  if (window.innerWidth < 768) {
      cards.forEach(card => card.style.transform = 'scale(1)');
  } else {
      const activeCard = document.querySelector('.pricing-card.active');
      if (activeCard) {
          cards.forEach(card => card.style.transform = 'scale(1)');
          activeCard.style.transform = 'scale(1.1)';
      }
  }
});
