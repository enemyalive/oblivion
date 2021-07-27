// АНИМАЦИЯ НАВИГАЦИИ

let navBack = document.querySelector(".nav__background");
let navPunkts = document.querySelector(".nav__punkts");
let navPunkt = document.querySelectorAll(".nav__punkts__btn");
let navIcon = document.querySelector(".nav__btn--icon");
let navBtn = document.querySelector(".nav__btn");

navBtn.addEventListener("click", function () {
	navBtn.classList.toggle("margin--nav3");
	navBack.classList.toggle("background--nav");
	navPunkts.classList.toggle("width--nav");

	for (let i = 0; i < navPunkt.length; i++) {
		navPunkt[i].classList.toggle("margin--nav");
	}

	for (let n = 0; n < navPunkt.length; n++) {
		navPunkt[n].onclick = function(e) {
			e.preventDefault();
			setTimeout(() => window.location = navPunkt[n].href, 1000);
			navPunkt[n].classList.toggle("margin--nav2");
		};
	}

	navIcon.classList.toggle("turn--nav");
});

// КНОПКА НАВЕРХ

let topBtn = document.querySelector(".top");

topBtn.onclick = function () {
  window.scrollTo(0, 0);
};

window.onscroll = function () { 
  if (window.pageYOffset > 400) {
    topBtn.style.display="flex"; 
    }
  else {
    topBtn.style.display="none";
  }
};

