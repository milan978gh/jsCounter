let count = 0;
const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');


btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (btn.classList.contains('decrease')) {
      count--;
    } else if (btn.classList.contains('increase')) {
      count++;
    } else {
      count = 0;
    }
    valueTextNColor();
  });
});


function valueTextNColor() {
  value.textContent = count;
  if (count < 0) {
    value.style.color = 'red';
  } else if (count > 0) {
    value.style.color = 'green';
  } else {
    value.style.color = '#102a42';
  }
}