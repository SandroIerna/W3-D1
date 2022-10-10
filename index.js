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
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return (color = red + ", " + green + ", " + blue);
  console.log(rGB);
};

const randomColor = function () {
  let price = document.querySelectorAll(".price");
  console.log(price);
  let newColor = color();
  for (i = 0; i < price.length; i++) {
    price[i].style.color = newColor;
  }
};
