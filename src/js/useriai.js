import {
  getPosts,
  deletePost,
  getPost,
  createPost,
  patchPost,
} from './userHelper.js';

getPosts()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

fetch('https://jsonplaceholder.typicode.com/users')
  .then((data) => {
    // console.log(data);
    return data.json();
  })
  .then((all) => {
    let dataUseriai = '';
    all.map((values) => {
      dataUseriai += ` 
  <div>
  <li>VARDAS: ${values.name} <br> SLAPYVARDIS: ${values.username} <br> EL.PAŠTAS: ${values.email} <br> <a class="delete-item" href="#"><i class="far fa-trash-alt"></i></a></li>
  </div>
      `;
    });
    document.querySelector('.lenta').innerHTML = dataUseriai;
  });

// Pašalinimas
const sarasas = document.querySelector('.lenta');

loadEventListeners();

function loadEventListeners() {
  sarasas.addEventListener('click', pasalinti);
}

function pasalinti(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    e.target.parentElement.parentElement.remove();
  }
}
