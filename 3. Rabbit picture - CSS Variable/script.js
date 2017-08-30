const inputs = document.querySelectorAll('.controls input');

function updating(){
const suffix =this.dataset.sizing || '';
document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);	
}

inputs.forEach( input => input.addEventListener('change', updating));
inputs.forEach( input => input.addEventListener('mousemove', updating));