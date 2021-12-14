// Example...
// Avoid using jquery if possible.
$(document).ready(() => {
  console.log('Index page');
  const form = document.querySelector("#main-form");
  const btn = document.querySelector(".button")
  form.addEventListener('submit', () => {
    btn.classList.toggle("button--loading")
  })
});
