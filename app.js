const sun = document.getElementById('sun');
const moon = document.getElementById('moon');
const lit = document.getElementById('lit');
const ni = document.getElementById('ni');
const continer = document.getElementById('continer');
const todo = document.getElementById('todo');
const chec = document.getElementById('chec');
const text = document.getElementById('text');
const foter = document.getElementById('foter');
const toto = document.querySelector('.toDo-lest');
const toDev = document.querySelector('.toDo-dev');
const lest = document.querySelector('.lest');

sun.addEventListener('click', () => {
	lit.classList.toggle('litt');
	ni.classList.toggle('nii');
	continer.style.backgroundColor = 'hsl(0, 0%, 98%)';
	todo.style.backgroundColor = 'hsl(0, 0%, 98%)';
	toDev.style.backgroundColor = 'hsl(0, 0%, 98%)';
	sun.classList.toggle('sunn');
	moon.classList.toggle('moonn');
});
moon.addEventListener('click', () => {
	lit.classList.toggle('litt');
	ni.classList.toggle('nii');
	continer.style.backgroundColor = 'hsl(235, 21%, 11%)';
	todo.style.backgroundColor = 'hsl(237, 14%, 26%)';
	toDev.style.backgroundColor = 'hsl(237, 14%, 26%)';
	sun.classList.toggle('sunn');
	moon.classList.toggle('moonn');
});
toto.addEventListener('click', (e) => {
	const item = e.target;
	const todo = item.parentElement;
	todo.classList.toggle('comb');
});
toto.addEventListener('dblclick', (e) => {
	e.target.parentElement.classList.toggle('del');
});
chec.addEventListener('click', todoFn);
/*let va = todo.value;
	text.innerHTML = va;
	todo.value = '';*/

function todoFn(e) {
	//e.preventDefault();
	const newDev = document.createElement('div');
	const newLi = document.createElement('li');
	newDev.classList.add('dev');
	newLi.classList.add('lest');
	newDev.appendChild(newLi);
	toto.appendChild(newDev);
	newLi.innerHTML = todo.value;
	todo.value = '';
}
foter.addEventListener('click', filter);
function filter(e) {
	const todos = toto.childNodes;
	todos.forEach(function(dev) {
		switch (e.target.value) {
			case 'all':
				todo.style.display = 'flex';
				break;
			case 'Active':
				//console.log('yahhhh');
				if (todo.classList.contains('comb')) {
					//console.log('yahhhh');
					todo.style.display = 'flex';
				} else {
					todo.style.visibility = 'hidden';
				}
				break;
		}
	});
}
