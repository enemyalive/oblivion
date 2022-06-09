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

// НАВЕДЕНИЕ НА КРАСНЫЕ ТОЧКИ

let redcircleone = document.querySelector(".circleone");
let piccircleone = document.querySelector(".picone");

redcircleone.addEventListener("mouseover", function () {
	redcircleone.classList.toggle("hidden");
    piccircleone.classList.toggle("hidden");
});

redcircleone.addEventListener("mouseout", function () {
	redcircleone.classList.toggle("hidden");
    piccircleone.classList.toggle("hidden");
});

// -------------

let redcircletwo = document.querySelector(".circletwo");
let piccircletwo = document.querySelector(".pictwo");

redcircletwo.addEventListener("mouseover", function () {
 	redcircletwo.classList.toggle("hidden");
	piccircletwo.classList.toggle("hidden");
});

redcircletwo.addEventListener("mouseout", function () {
	redcircletwo.classList.toggle("hidden");
    piccircletwo.classList.toggle("hidden");
});

// -------------

let redcirclethree = document.querySelector(".circlethree");
let piccirclethree = document.querySelector(".picthree");

redcirclethree.addEventListener("mouseover", function () {
 	redcirclethree.classList.toggle("hidden");
	piccirclethree.classList.toggle("hidden");
});

redcirclethree.addEventListener("mouseout", function () {
	redcirclethree.classList.toggle("hidden");
    piccirclethree.classList.toggle("hidden");
});

// -------------

let redcirclefour = document.querySelector(".circlefour");
let piccirclefour = document.querySelector(".picfour");

redcirclefour.addEventListener("mouseover", function () {
 	redcirclefour.classList.toggle("hidden");
	piccirclefour.classList.toggle("hidden");
});

redcirclefour.addEventListener("mouseout", function () {
	redcirclefour.classList.toggle("hidden");
    piccirclefour.classList.toggle("hidden");
});

// НАВЕДЕНИЕ НА ХОББИ

let blockhockey = document.querySelector(".main__section__blocks__block3__hockey");
let pone = document.querySelector(".p-one");
let picone = document.querySelector(".pic-one");

blockhockey.addEventListener("mouseover", function () {
	picone.classList.toggle("hidden");
});

blockhockey.addEventListener("mouseout", function () {
	picone.classList.toggle("hidden");
});

// -------------

let blockfilms = document.querySelector(".main__section__blocks__block3__films");
let films = document.querySelector(".films");
let pictwo = document.querySelector(".pic-two");

blockfilms.addEventListener("mouseover", function () {
	films.style.padding=0;
	pictwo.classList.toggle("hidden");
});

blockfilms.addEventListener("mouseout", function () {
	pictwo.classList.toggle("hidden");
	films.style.padding='170px 0 0 0';
});

// -------------

let blockgames = document.querySelector(".main__section__blocks__block3__games");
let games = document.querySelector(".games");
let picthree = document.querySelector(".pic-three");

blockgames.addEventListener("mouseover", function () {
	games.style.padding=0;
	picthree.classList.toggle("hidden");
});

blockgames.addEventListener("mouseout", function () {
	picthree.classList.toggle("hidden");
	games.style.padding='80px 0 0 0';
});

// -------------

let blockcomics = document.querySelector(".main__section__blocks__block3__comics");
let pfour = document.querySelector(".p-four");
let picfour = document.querySelector(".pic-four");

blockcomics.addEventListener("mouseover", function () {
	picfour.classList.toggle("hidden");
});

blockcomics.addEventListener("mouseout", function () {
	picfour.classList.toggle("hidden");
});