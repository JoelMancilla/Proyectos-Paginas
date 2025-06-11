if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Carga imágenes/componentes
        observer.unobserve(entry.target);
      }
    });
  });
}

document.getElementById("lupa").addEventListener("click", function(){
    var caja = document.getElementById("Buscarbox")
    caja.classList.toggle("oculto")
})

function ContentVista(index) {
    const contents = document.querySelectorAll(".content"); 
    contents.forEach((e, i)=> {
     e.classList.toggle("active", i === index)
     })
}

const boxes = document.querySelectorAll(".Caja-circulos");
const menuContainer = document.querySelector(".menu-container");
const closeButton = document.querySelector(".close-window");
document.querySelector('.Caja-circulos').addEventListener('click', function() {
  // Reinicia las animaciones
  const boxes1 = document.querySelectorAll('.box');
  boxes1.forEach(box => {
    box.style.animation = 'none';
    void box.offsetWidth; // Trigger reflow
    box.style.animation = 'scaleUp 0.5s ease-out forwards';
  });
  
  // Añade animación al contenedor
  this.style.animation = 'pulse 0.5s ease';
  
  // Tu lógica existente para abrir el menú
  document.querySelector('.menu-container').classList.remove('hidden');
  this.classList.add('hidden');
});

boxes.forEach(box => {
  box.addEventListener("click", () => {
    menuContainer.classList.remove("hidden");
    document.querySelector(".Caja-circulos").classList.add("hidden");
  });
});



// salida menu flower

closeButton.addEventListener("click", () => {
  const menuFlower = document.querySelector('.menu-flower');
  
  menuFlower.classList.remove('animar'); 
  menuFlower.classList.add('salir');


  setTimeout(() => {
    menuContainer.classList.add("hidden");
    document.querySelector(".Caja-circulos").classList.remove("hidden");
    menuFlower.classList.remove('salir'); 
  }, 300); 
});

document.querySelector('.Caja-circulos').addEventListener('click', function() {
  document.body.classList.add("modal-open");
  document.querySelector('.menu-container').classList.remove('hidden');
  this.classList.add('hidden');
});

closeButton.addEventListener("click", () => {
  const menuFlower = document.querySelector('.menu-flower');
  menuFlower.classList.add('salir');
  
  setTimeout(() => {
    menuContainer.classList.add("hidden");
    document.querySelector(".Caja-circulos").classList.remove("hidden");
    menuFlower.classList.remove('salir');
    document.body.classList.remove("modal-open");
  }, 300);
});