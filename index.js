const changeH1 = function () {
  let h1 = document.querySelector("h1");
  h1.innerText = "Modified H1";
};

const changeBodyBg = function () {
  let body = document.querySelector("body");
  body.style.backgroundColor = "lightblue";
};

const changeAddress = function () {
  let address = document.getElementById("shop_address");
  address.innerText = "This is a fake address";
};

const addClass = function () {
  let anchor = document.getElementsByTagName("a");
  console.log(anchor);
  for (let i = 0; i < anchor.length; i++) {
    anchor[i].classList = "fake_class";
  }
};

const hideImage = function () {
  const img = document.getElementsByTagName("img");
  console.log(img);
  for (let i = 0; i < img.length; i++) {
    img[i].classList.toggle("hidden");
  }
};

const color = function () {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let rGB = "rgb(" + red + ", " + green + ", " + blue + ")";
  return rGB;
};

const randomColor = function () {
  let price = document.querySelectorAll(".price");
  console.log(price);
  let newColor = color();
  for (i = 0; i < price.length; i++) {
    price[i].style.color = newColor;
  }
};

const allDifferentRandomColor = function () {
  let price = document.querySelectorAll(".price");
  console.log(price);
  for (i = 0; i < price.length; i++) {
    let newColor = color();
    price[i].style.color = newColor;
  }
};
