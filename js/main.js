let count = 0;
const value = document.getElementById('value');
const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');
const increase = document.querySelector('.increase');


decrease.addEventListener("click", () => {
  count--;
  valueColorNText();
});
reset.addEventListener("click", () => {
  count = 0;
  valueColorNText();
});
increase.addEventListener("click", () => {
  count++;
  valueColorNText();
});


function valueColorNText() {
  value.textContent = count;
  if (count < 0) {
    value.style.color = 'red';
  } else if (count > 0) {
    value.style.color = 'green';
  } else {
    value.style.color = '#102a42';
  }
}