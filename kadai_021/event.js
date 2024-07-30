const addBtn = document.getElementById('btn');
const parentElement = document.getElementById('text');


addBtn.addEventListener('click',() => {
  setTimeout(()=>{ 
  parentElement.textContent = 'ボタンをクリックしました';
},2000);
});