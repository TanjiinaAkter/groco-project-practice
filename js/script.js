let searchFrom = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchFrom.classList.toggle("active");
  navBar.classList.remove("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
};

let shoppingCart = document.querySelector(".shopping-cart");

document.querySelector("#cart-btn").onclick = () => {
  shoppingCart.classList.toggle("active");
  navBar.classList.remove("active");
  searchFrom.classList.remove("active");
  loginForm.classList.remove("active");
};

let loginForm = document.querySelector(".login-form");

document.querySelector("#login-btn").onclick = () => {
  loginForm.classList.toggle("active");
  navBar.classList.remove("active");
  searchFrom.classList.remove("active");
  shoppingCart.classList.remove("active");
};

let navBar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navBar.classList.toggle("active");
  searchFrom.classList.remove("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
};

window.onscroll = () => {
  navBar.classList.remove("active");
  searchFrom.classList.remove("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
};



var swiper = new Swiper(".product-slider", {
  loop:true,
  spaceBetween: 20,
  autoplay: {
    delay:7500,
    disableOnInteraction:false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
      
    },
  },
});


var swiper = new Swiper(".review-slider", {
  loop:true,
  spaceBetween: 20,
  autoplay: {
    delay:7500,
    disableOnInteraction:false,
  },
  breakpoints: {
   0: {
      slidesPerView: 1,
     
    },
    768: {
      slidesPerView: 2,
     
    },
    1024: {
      slidesPerView: 3,
    
    },
  },
});

