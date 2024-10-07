window.addEventListener("scroll", function() {
  let header = document.querySelector('header')
  header.classList.toggle('roll', window.scrollY > 0)
}
)

window.onscroll = function() {
  const scrollIndicator = document.querySelector('.scroll-indicator');
  const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPosition = window.scrollY;

  const scrollPercentage = (scrollPosition / scrollTotal) * 100;
  scrollIndicator.style.width = scrollPercentage + '%';
};