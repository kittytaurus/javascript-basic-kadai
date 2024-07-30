const addBtn = document.getElementById('btn');
const parentElement = document.getElementById('text');

addBtn.addEventListener('click',() => {
  parentElement.textContent = 'ボタンをクリックしました';
});