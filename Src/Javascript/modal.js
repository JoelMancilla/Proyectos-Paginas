

const cards = document.querySelectorAll(".card");

// Agregar eventos de clic a cada tarjeta
cards.forEach(card => {
  card.addEventListener("click", () => {
// Obtener el ID 
    const cardId = card.getAttribute("data-id");
    const modal = document.getElementById(`modal-${cardId}`);

// Mostrar el modal
    if (modal) {
      modal.style.display = "flex";
    }
  });
});
// Cerrar modal 
const closeButtons = document.querySelectorAll(".close-modal");

closeButtons.forEach(button => {
  button.addEventListener("click", (event) => {
    // Cerrar el modal 
    const modal = event.target.closest(".modal");
    if (modal) {
      modal.style.display = "none";
    }
    const modalc = event.target.closest(".modal");
    if (modalc) {
      modalc.style.display = "none";
    }
  });
});
// Cerrar modal al hacer clic fuera del contenido
const modals = document.querySelectorAll(".modal");

modals.forEach(modal => {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
    
  });
});

// Modal USER

const openModalUser = document.getElementById("openModalUser");
const modalc = document.getElementById('modalc');
openModalUser.addEventListener('click', () => {
  modalc.style.display = 'flex';
});


const closeButtons1 = document.querySelectorAll(".close");

closeButtons1.forEach(button => {
  button.addEventListener("click", (event) => {
    // Cerrar el modal más cercano
    const modalc = event.target.closest(".modalc");
    if (modalc) {
      modalc.style.display = "none";
    }
  });
});

// validaciones 
const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');


form.addEventListener('submit', (e) => {
  e.preventDefault();

  let isValid = true;

  //  nombre
  if (!nameInput.value.trim() || !/^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/.test(nameInput.value)) {
    nameError.textContent = 'El nombre es obligatorio y solo puede contener letras.';
    nameError.style.display = 'block';
    isValid = false;
  } else {
    nameError.style.display = 'none';
  }

  // Gmail
  if (!emailInput.value.trim() || !/^[a-z0-9._%+-]+@gmail\.com$/.test(emailInput.value)) {
    emailError.textContent = 'Por favor ingresa un Gmail válido.';
    emailError.style.display = 'block';
    isValid = false;
  } else {
    emailError.style.display = 'none';
  }

  //  contraseña
  if (!passwordInput.value.trim() || passwordInput.value.length < 8) {
    passwordError.textContent = 'La contraseña debe tener al menos 8 caracteres.';
    passwordError.style.display = 'block';
    isValid = false;
  } else {
    passwordError.style.display = 'none';
  }

  // Cartel De validacion
  if (isValid) {
    alert(`Bienvenido, ${nameInput.value.trim()}!`);
    form.reset(); // Limpia el formulario
    modalc.style.display = "none";
  }
});

// Modal Rejister cupon
const openR = document.getElementById('Open-rejister1');
const modal1 = document.getElementById('modalt');
openR.addEventListener('click', () => {
  modal1.style.display = 'flex';
});

// const form1 = document.getElementById('form1');
// const nameInput1 = document.getElementById('name1');
// const emailInput1 = document.getElementById('email1');
// const passwordInput1 = document.getElementById('password1');
// const nameError1 = document.getElementById('nameError1');
// const emailError1 = document.getElementById('emailError1');
// const passwordError1 = document.getElementById('passwordError1');


// form1.addEventListener('submit', (e) => {
//   e.preventDefault();

//   let isValid = true;

//   // Validación del nombre
//   if (!nameInput1.value.trim() || !/^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/.test(nameInput1.value)) {
//     nameError1.textContent = 'El nombre es obligatorio y solo puede contener letras.';
//     nameError1.style.display = 'block';
//     isValid = false;
//   } else {
//     nameError1.style.display = 'none';
//   }

//   // Validación del Gmail
//   if (!emailInput1.value.trim() || !/^[a-z0-9._%+-]+@gmail\.com$/.test(emailInput1.value)) {
//     emailError1.textContent = 'Por favor ingresa un Gmail válido.';
//     emailError1.style.display = 'block';
//     isValid = false;
//   } else {
//     emailError1.style.display = 'none';
//   }

//   // Validación de la contraseña
//   if (!passwordInput1.value.trim() || passwordInput1.value.length < 8) {
//     passwordError1.textContent = 'La contraseña debe tener al menos 8 caracteres.';
//     passwordError1.style.display = 'block';
//     isValid = false;
//   } else {
//     passwordError1.style.display = 'none';
//   }

//   // Si todas las validaciones son correctas
//   if (isValid) {
//     alert(`Bienvenido, ${nameInput1.value.trim()}!`);
//     form1.reset(); // Limpia el formulario
//   }
// });









