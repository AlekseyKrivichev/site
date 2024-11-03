// scripts.js
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    document.body.style.opacity = '0';
    setTimeout(() => {
      window.location.href = this.getAttribute('onclick').match(/'([^']+)'/)[1];
    }, 500); // Время задержки соответствует времени анимации исчезновения
  });
});
