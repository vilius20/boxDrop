let file = document.getElementById("myfile");
let columns = document.querySelectorAll(".column");

let arrImg = [];

file.onchange = () => {
  for (const key in file.files) {
    const element = file.files[key];
    if (element.type === "image/jpeg" || element.type === "image/png") {
      let parent_column = minParent(columns);

      let img = createImg(element.webkitRelativePath);

      arrImg[key] = img;

      parent_column.appendChild(img);
    }
  }

  let i = 0;
  let clearinter = setInterval(() => {
    arrImg[i].setAttribute("style", "display : initial");
    arrImg[i].classList.add("animated", "zoomIn");
    i++;

    i == arrImg.length ? clearInterval(clearinter) : undefined;
  }, 200);
};

function minParent(parentNode) {
  let arr = [];

  parentNode.forEach((element, i) => {
    arr[i] = element.children.length;
  });

  let min = Math.min.apply(null, arr);

  for (let i = 0; i < parentNode.length; i++) {
    if (parentNode[i].children.length == min) {
      return parentNode[i];
    }
  }
}

function createImg(imgsrc) {
  let img = document.createElement("img");
  img.setAttribute("src", imgsrc);
  img.className = "img";
  return img;.
}
