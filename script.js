const nuevoTitulo = document.createElement('h1');
nuevoTitulo.addEventListener('click', function() {
    this.style.color = 'orange';
    this.innerHTML = 'prueba'; 
}); 

document.body.appendChild(nuevoTitulo);

// Agrega un encabezado en el que se pueda hacer clic y que cambie el color de la fuente a marrón
const nuevoEncabezado = document.createElement('h2');
nuevoEncabezado.textContent = 'Haz clic para cambiar el color';
nuevoEncabezado.addEventListener('click', function() {
    this.style.color = 'brown';
});

document.body.appendChild(nuevoEncabezado);
