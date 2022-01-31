// Modules
// script import, module import, separate methods import
// import { getValues, mapArray } from "./modules/helpers.js";

const objArray = [
  { name: "Apple", weight: 50, type: "fruit" },
  { name: "Orange", weight: 75, type: "fruit" },
  { name: "Pear", weight: 100, type: "fruit" },
  { name: "Banana", weight: 125, type: "fruit" },
  { name: "Cherry", weight: 150, type: "berry" },
  { name: "Mango", weight: 175, type: "fruit" },
  { name: "Cucumber", weight: 200, type: "vegetable" },
];

const images = [];

// console.log(getValues(objArray, 'name'));
// console.log(mapArray(objArray, 'type'));

// DOM - Document Object Model, BOM - Browser Object Model
// getElementById
// innerHTML
// addEventListener

// document.getElementById('file').addEventListener('change', function () {
//   console.log(this.files);
// })

// ****************************
// const render = (arr) => {
//   let content = '';
//   arr.forEach((image) => {
//     content += `
//       <div class="image-item">
//         <div class="image" style="background-image: url(${image.path})"></div>
//         <p>${image.name}</p>
//         <p>${image.size}</p>
//       </div>
//     `
//   })
//   document.getElementById('content').innerHTML = content;
// }

// render(images);

document.getElementById("uploadBtn").addEventListener("click", function () {
  const images2 = [];
  for (let i = 0; i < document.getElementById("file")?.files.length; i++) {
    const element = document.getElementById("file")?.files[i];
    console.log(element.name);
    images2.push({
      name: element.name,
      size: element.size,
      path: URL.createObjectURL(element),
    });
  }
  render(images2);
});
// ****************************

const render = (arr) => {
  arr?.forEach((element) => {
    const imageItem = document.createElement("div");
    const image = document.createElement("div");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    p1.textContent = element.name;
    p2.textContent = element.size;
    imageItem.className = "image-item";
    image.className = "image";
    image.setAttribute("style", `background-image: url(${element.path})`);
    imageItem.appendChild(image);
    imageItem.appendChild(p1);
    imageItem.appendChild(p2);
    document.getElementById("content").appendChild(imageItem);
  });
};

render(images);

document.getElementById("removeChild").addEventListener("click", function () {
  document
    .getElementById("content")
    .removeChild(document.getElementById("content").childNodes[0]);

  // const imageItem = document.createElement('div');
  // imageItem.textContent = 'test';
  // document.getElementById('content').replaceChild(imageItem, document.getElementById('content').childNodes[1]);
});
// textContent
// createElement
// setAttribute
// removeAttribute
// removeChild
// appendChild
// replaceChild

// Failu ikelimas
// Parasyti funkcija atskirame modulyje kuri konvertuos bitus i megabaitus
// Kai failai rendirinasi persiraso size
