const sun = document.getElementById('sun');
const moon = document.getElementById('moon');
const lit = document.getElementById('lit');
const ni = document.getElementById('ni');
const continer = document.getElementById('continer');

sun.addEventListener('click', () => {
	lit.classList.toggle('litt');
	ni.classList.toggle('nii');
	continer.style.backgroundColor = 'hsl(0, 0%, 98%)';
	sun.classList.toggle('sunn');
	moon.classList.toggle('moonn');
});
moon.addEventListener('click', () => {
	lit.classList.toggle('litt');
	ni.classList.toggle('nii');
	continer.style.backgroundColor = 'hsl(235, 21%, 11%)';
	sun.classList.toggle('sunn');
	moon.classList.toggle('moonn');
});
