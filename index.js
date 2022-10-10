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

const randomColor = function () {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  let price = document.getElementsByClassName("price");
  for (i = 0; i < price.length; i++) {
    console.log(price[i]);
  }
};

// const randomColor = function () {
//     const randomColor = Math.floor(Math.random() * 16777215).toString(16);
//     let price = document.getElementsByTagName("td");
//     for (i = 0; i < price.length; i++) {
//       console.log(price[3]);
//     }
//   };
