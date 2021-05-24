// varybels
const sun = document.getElementById('sun');
const moon = document.getElementById('moon');
const lit = document.getElementById('lit');
const ni = document.getElementById('ni');
const continer = document.getElementById('continer');
const todo = document.getElementById('todo');
const chec = document.getElementById('chec');
const text = document.getElementById('text');
const foter = document.getElementById('foter');
const conter = document.getElementById('conter');
const toto = document.querySelector('.toDoLest');
const toDev = document.querySelector('.toDo-dev');
const lest = document.querySelector('.lest');
//mornig fonctionalty
sun.addEventListener('click', () => {
	lit.classList.toggle('litt');
	ni.classList.toggle('nii');
	continer.style.backgroundColor = 'hsl(0, 0%, 98%)';
	todo.style.backgroundColor = 'hsl(0, 0%, 98%)';
	toDev.style.backgroundColor = 'hsl(0, 0%, 98%)';
	sun.classList.toggle('sunn');
	moon.classList.toggle('moonn');
});
//night fonctionalty
moon.addEventListener('click', () => {
	lit.classList.toggle('litt');
	ni.classList.toggle('nii');
	continer.style.backgroundColor = 'hsl(235, 21%, 11%)';
	todo.style.backgroundColor = 'hsl(237, 14%, 26%)';
	toDev.style.backgroundColor = 'hsl(237, 14%, 26%)';
	sun.classList.toggle('sunn');
	moon.classList.toggle('moonn');
});
// coblet todo evant
toto.addEventListener('click', (e) => {
	const item = e.target;
	const todo = item.parentElement;
	todo.classList.toggle('comb');
	todo.classList.remove('dev');
});
// deleting the todo
toto.addEventListener('dblclick', (e) => {
	e.target.parentElement.classList.toggle('del');
});
// adding the todo lest event
chec.addEventListener('click', todoFn);
// genirating the todo
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
// filter butons evant lestener
foter.addEventListener('click', filter);
// filter button functionalty
function filter(e) {
	const todos = toto.childNodes;
	todos.forEach(function(toto) {
		switch (e.target.value) {
			case 'All':
				//console.log('hy');
				toto.style.display = 'flex';
				break;
			case 'Completed':
				//console.log('yahhhh');
				if (toto.classList.contains('comb')) {
					//console.log('yahhhh');
					toto.style.display = 'flex';
				} else {
					toto.style.display = 'none';
				}
				break;
			case 'ClearCompleted':
				if (toto.classList.contains('comb')) {
					toto.remove();
				}
				break;
			case 'Active':
				if (toto.classList.contains('dev')) {
					toto.style.display = 'flex';
				} else {
					toto.style.display = 'none';
				}
				break;
		}
	});
}
//let conte = toto.length;
conte++;
//console.log(toto.length);

conter.innerHTML = conte;
