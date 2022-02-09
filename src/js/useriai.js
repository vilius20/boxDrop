// fetch('https://jsonplaceholder.typicode.com/users')
//   .then((data) => {
//     // console.log(data);
//     return data.json();
//   })
//   .then((all) => {
//     let dataUseriai = '';
//     all.map((values) => {
//       dataUseriai += `
//   <div>
//   <li>VARDAS: ${values.name} <br> SLAPYVARDIS: ${values.username} <br> EL.PAŠTAS: ${values.email} <br> <a class="delete-item" href="#"><i class="far fa-trash-alt"></i></a></li>
//   </div>
//       `;
//     });
//     document.querySelector('.lenta').innerHTML = dataUseriai;
//   });

// // Pašalinimas
// const sarasas = document.querySelector('.lenta');

// loadEventListeners();

// function loadEventListeners() {
//   sarasas.addEventListener('click', pasalinti);
// }

// function pasalinti(e) {
//   if (e.target.parentElement.classList.contains('delete-item')) {
//     e.target.parentElement.parentElement.remove();
//   }
// }

// ************************************************

let form = document.querySelector('#upload');
let file = document.querySelector('#file');
let app = document.querySelector('#app');

function logFile(e) {
  e.preventDefault();
  let str = e.target.result;
  let img = document.createElement('img');
  img.src = str;
  app.append(img);
  console.log(str);
}

function handleSubmit(e) {
  e.preventDefault();

  if (!file.value.length) return;

  let reader = new FileReader();

  reader.onload = logFile;

  reader.readAsDataURL(file.files[0]);
}

function logas(e) {
  e.preventDefault();
  console.log(logFile());
}

form.addEventListener('submit', logas);
