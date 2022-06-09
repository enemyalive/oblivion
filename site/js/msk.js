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

// ВЫБОР ПОСТА ДЛЯ ПРОСМОТРА

let imggl = document.querySelector(".main__section__blocks--imggl");
let textgl1 = document.querySelector(".text1");
let textgl2 = document.querySelector(".text2");
let textgl3 = document.querySelector(".main__section__blocks--marg");
let link = document.querySelector(".link");
let change = document.querySelectorAll(".container--img__focus");

let postone = document.querySelector(".postone");
let imgone = document.querySelector(".imgone");
let textone1 = document.querySelector(".textone1");
let textone2 = document.querySelector(".textone2");
let textone3 = document.querySelector(".textone3");
let linkone = document.querySelector(".linkone");
let changeone = document.querySelector(".changeone");

let posttwo = document.querySelector(".posttwo");
let imgtwo = document.querySelector(".imgtwo");
let texttwo1 = document.querySelector(".texttwo1");
let texttwo2 = document.querySelector(".texttwo2");
let texttwo3 = document.querySelector(".texttwo3");
let linktwo = document.querySelector(".linktwo");
let changetwo = document.querySelector(".changetwo");

let postthree = document.querySelector(".postthree");
let imgthree = document.querySelector(".imgthree");
let textthree1 = document.querySelector(".textthree1");
let textthree2 = document.querySelector(".textthree2");
let textthree3 = document.querySelector(".textthree3");
let linkthree = document.querySelector(".linkthree");
let changethree = document.querySelector(".changethree");

let postfour = document.querySelector(".postfour");
let imgfour = document.querySelector(".imgfour");
let textfour1 = document.querySelector(".textfour1");
let textfour2 = document.querySelector(".textfour2");
let textfour3 = document.querySelector(".textfour3");
let linkfour = document.querySelector(".linkfour");
let changefour = document.querySelector(".changefour");

let postfive = document.querySelector(".postfive");
let imgfive = document.querySelector(".imgfive");
let textfive1 = document.querySelector(".textfive1");
let textfive2 = document.querySelector(".textfive2");
let textfive3 = document.querySelector(".textfive3");
let linkfive = document.querySelector(".linkfive");
let changefive = document.querySelector(".changefive");

let postsix = document.querySelector(".postsix");
let imgsix = document.querySelector(".imgsix");
let textsix1 = document.querySelector(".textsix1");
let textsix2 = document.querySelector(".textsix2");
let textsix3 = document.querySelector(".textsix3");
let linksix = document.querySelector(".linksix");
let changesix = document.querySelector(".changesix");

let postseven = document.querySelector(".postseven");
let imgseven = document.querySelector(".imgseven");
let textseven1 = document.querySelector(".textseven1");
let textseven2 = document.querySelector(".textseven2");
let textseven3 = document.querySelector(".textseven3");
let linkseven = document.querySelector(".linkseven");
let changeseven = document.querySelector(".changeseven");

let posteight = document.querySelector(".posteight");
let imgeight = document.querySelector(".imgeight");
let texteight1 = document.querySelector(".texteight1");
let texteight2 = document.querySelector(".texteight2");
let texteight3 = document.querySelector(".texteight3");
let linkeight = document.querySelector(".linkeight");
let changeeight = document.querySelector(".changeeight");

let postnine = document.querySelector(".postnine");
let imgnine = document.querySelector(".imgnine");
let textnine1 = document.querySelector(".textnine1");
let textnine2 = document.querySelector(".textnine2");
let textnine3 = document.querySelector(".textnine3");
let linknine = document.querySelector(".linknine");
let changenine = document.querySelector(".changenine");

let postten = document.querySelector(".postten");
let imgten = document.querySelector(".imgten");
let textten1 = document.querySelector(".textten1");
let textten2 = document.querySelector(".textten2");
let textten3 = document.querySelector(".textten3");
let linkten = document.querySelector(".linkten");
let changeten = document.querySelector(".changeten");

let posteleven = document.querySelector(".posteleven");
let imgeleven = document.querySelector(".imgeleven");
let texteleven1 = document.querySelector(".texteleven1");
let texteleven2 = document.querySelector(".texteleven2");
let texteleven3 = document.querySelector(".texteleven3");
let linkeleven = document.querySelector(".linkeleven");
let changeeleven = document.querySelector(".changeeleven");

let posttwelve = document.querySelector(".posttwelve");
let imgtwelve = document.querySelector(".imgtwelve");
let texttwelve1 = document.querySelector(".texttwelve1");
let texttwelve2 = document.querySelector(".texttwelve2");
let texttwelve3 = document.querySelector(".texttwelve3");
let linktwelve = document.querySelector(".linktwelve");
let changetwelve = document.querySelector(".changetwelve");


postone.onclick = function () {
	imggl.src = imgone.src;
	textgl1.innerHTML = textone1.innerHTML;
	textgl2.innerHTML = textone2.innerHTML;
	textgl3.textContent = textone3.textContent;
	textgl3.classList.add("opacity");
	link.href = linkone.href;
	changeone.classList.remove("hidden");
	changetwo.classList.add("hidden");
	changethree.classList.add("hidden");
	changefour.classList.add("hidden");
	changefive.classList.add("hidden");
	changesix.classList.add("hidden");
	changeseven.classList.add("hidden");
	changeeight.classList.add("hidden");
	changenine.classList.add("hidden");
	changeten.classList.add("hidden");
	changeeleven.classList.add("hidden");
	changetwelve.classList.add("hidden");
	window.scrollTo(970, 970);
};

posttwo.onclick = function () {
	imggl.src = imgtwo.src;
	textgl1.innerHTML = texttwo1.innerHTML;
	textgl2.innerHTML = texttwo2.innerHTML;
	textgl3.textContent = texttwo3.textContent;
	textgl3.classList.remove("opacity");
	link.href = linktwo.href;
	changetwo.classList.remove("hidden");
	changeone.classList.add("hidden");
	changethree.classList.add("hidden");
	changefour.classList.add("hidden");
	changefive.classList.add("hidden");
	changesix.classList.add("hidden");
	changeseven.classList.add("hidden");
	changeeight.classList.add("hidden");
	changenine.classList.add("hidden");
	changeten.classList.add("hidden");
	changeeleven.classList.add("hidden");
	changetwelve.classList.add("hidden");
	window.scrollTo(970, 970);
};

postthree.onclick = function () {
	imggl.src = imgthree.src;
	textgl1.innerHTML = textthree1.innerHTML;
	textgl2.innerHTML = textthree2.innerHTML;
	textgl3.textContent = textthree3.textContent;
	textgl3.classList.remove("opacity");
	link.href = linkthree.href;
	changethree.classList.remove("hidden");
	changeone.classList.add("hidden");
	changetwo.classList.add("hidden");
	changefour.classList.add("hidden");
	changefive.classList.add("hidden");
	changesix.classList.add("hidden");
	changeseven.classList.add("hidden");
	changeeight.classList.add("hidden");
	changenine.classList.add("hidden");
	changeten.classList.add("hidden");
	changeeleven.classList.add("hidden");
	changetwelve.classList.add("hidden");
	window.scrollTo(970, 970);
};

postfour.onclick = function () {
	imggl.src = imgfour.src;
	textgl1.innerHTML = textfour1.innerHTML;
	textgl2.innerHTML = textfour2.innerHTML;
	textgl3.textContent = textfour3.textContent;
	textgl3.classList.remove("opacity");
	link.href = linkfour.href;
	changefour.classList.remove("hidden");
	changeone.classList.add("hidden");
	changetwo.classList.add("hidden");
	changethree.classList.add("hidden");
	changefive.classList.add("hidden");
	changesix.classList.add("hidden");
	changeseven.classList.add("hidden");
	changeeight.classList.add("hidden");
	changenine.classList.add("hidden");
	changeten.classList.add("hidden");
	changeeleven.classList.add("hidden");
	changetwelve.classList.add("hidden");
	window.scrollTo(970, 970);
};

postfive.onclick = function () {
	imggl.src = imgfive.src;
	textgl1.innerHTML = textfive1.innerHTML;
	textgl2.innerHTML = textfive2.innerHTML;
	textgl3.textContent = textfive3.textContent;
	textgl3.classList.remove("opacity");
	link.href = linkfive.href;
	changefive.classList.remove("hidden");
	changeone.classList.add("hidden");
	changetwo.classList.add("hidden");
	changethree.classList.add("hidden");
	changefour.classList.add("hidden");
	changesix.classList.add("hidden");
	changeseven.classList.add("hidden");
	changeeight.classList.add("hidden");
	changenine.classList.add("hidden");
	changeten.classList.add("hidden");
	changeeleven.classList.add("hidden");
	changetwelve.classList.add("hidden");
	window.scrollTo(970, 970);
};

postsix.onclick = function () {
	imggl.src = imgsix.src;
	textgl1.innerHTML = textsix1.innerHTML;
	textgl2.innerHTML = textsix2.innerHTML;
	textgl3.textContent = textsix3.textContent;
	textgl3.classList.remove("opacity");
	link.href = linksix.href;
	changesix.classList.remove("hidden");
	changeone.classList.add("hidden");
	changetwo.classList.add("hidden");
	changethree.classList.add("hidden");
	changefour.classList.add("hidden");
	changefive.classList.add("hidden");
	changeseven.classList.add("hidden");
	changeeight.classList.add("hidden");
	changenine.classList.add("hidden");
	changeten.classList.add("hidden");
	changeeleven.classList.add("hidden");
	changetwelve.classList.add("hidden");
	window.scrollTo(970, 970);
};

postseven.onclick = function () {
	imggl.src = imgseven.src;
	textgl1.innerHTML = textseven1.innerHTML;
	textgl2.innerHTML = textseven2.innerHTML;
	textgl3.textContent = textseven3.textContent;
	textgl3.classList.remove("opacity");
	link.href = linkseven.href;
	changeseven.classList.remove("hidden");
	changeone.classList.add("hidden");
	changetwo.classList.add("hidden");
	changethree.classList.add("hidden");
	changefour.classList.add("hidden");
	changefive.classList.add("hidden");
	changesix.classList.add("hidden");
	changeeight.classList.add("hidden");
	changenine.classList.add("hidden");
	changeten.classList.add("hidden");
	changeeleven.classList.add("hidden");
	changetwelve.classList.add("hidden");
	window.scrollTo(970, 970);
};

posteight.onclick = function () {
	imggl.src = imgeight.src;
	textgl1.innerHTML = texteight1.innerHTML;
	textgl2.innerHTML = texteight2.innerHTML;
	textgl3.textContent = texteight3.textContent;
	textgl3.classList.remove("opacity");
	link.href = linkeight.href;
	changeeight.classList.remove("hidden");
	changeone.classList.add("hidden");
	changetwo.classList.add("hidden");
	changethree.classList.add("hidden");
	changefour.classList.add("hidden");
	changefive.classList.add("hidden");
	changesix.classList.add("hidden");
	changeseven.classList.add("hidden");
	changenine.classList.add("hidden");
	changeten.classList.add("hidden");
	changeeleven.classList.add("hidden");
	changetwelve.classList.add("hidden");
	window.scrollTo(970, 970);
};

postnine.onclick = function () {
	imggl.src = imgnine.src;
	textgl1.innerHTML = textnine1.innerHTML;
	textgl2.innerHTML = textnine2.innerHTML;
	textgl3.textContent = textnine3.textContent;
	textgl3.classList.remove("opacity");
	link.href = linknine.href;
	changenine.classList.remove("hidden");
	changeone.classList.add("hidden");
	changetwo.classList.add("hidden");
	changethree.classList.add("hidden");
	changefour.classList.add("hidden");
	changefive.classList.add("hidden");
	changesix.classList.add("hidden");
	changeseven.classList.add("hidden");
	changeeight.classList.add("hidden");
	changeten.classList.add("hidden");
	changeeleven.classList.add("hidden");
	changetwelve.classList.add("hidden");
	window.scrollTo(970, 970);
};

postten.onclick = function () {
	imggl.src = imgten.src;
	textgl1.innerHTML = textten1.innerHTML;
	textgl2.innerHTML = textten2.innerHTML;
	textgl3.textContent = textten3.textContent;
	textgl3.classList.remove("opacity");
	link.href = linkten.href;
	changeten.classList.remove("hidden");
	changeone.classList.add("hidden");
	changetwo.classList.add("hidden");
	changethree.classList.add("hidden");
	changefour.classList.add("hidden");
	changefive.classList.add("hidden");
	changesix.classList.add("hidden");
	changeseven.classList.add("hidden");
	changeeight.classList.add("hidden");
	changenine.classList.add("hidden");
	changeeleven.classList.add("hidden");
	changetwelve.classList.add("hidden");
	window.scrollTo(970, 970);
};

posteleven.onclick = function () {
	imggl.src = imgeleven.src;
	textgl1.innerHTML = texteleven1.innerHTML;
	textgl2.innerHTML = texteleven2.innerHTML;
	textgl3.textContent = texteleven3.textContent;
	textgl3.classList.remove("opacity");
	link.href = linkeleven.href;
	changeeleven.classList.remove("hidden");
	changeone.classList.add("hidden");
	changetwo.classList.add("hidden");
	changethree.classList.add("hidden");
	changefour.classList.add("hidden");
	changefive.classList.add("hidden");
	changesix.classList.add("hidden");
	changeseven.classList.add("hidden");
	changeeight.classList.add("hidden");
	changenine.classList.add("hidden");
	changeten.classList.add("hidden");
	changetwelve.classList.add("hidden");
	window.scrollTo(970, 970);
};

posttwelve.onclick = function () {
	imggl.src = imgtwelve.src;
	textgl1.innerHTML = texttwelve1.innerHTML;
	textgl2.innerHTML = texttwelve2.innerHTML;
	textgl3.textContent = texttwelve3.textContent;
	textgl3.classList.remove("opacity");
	link.href = linktwelve.href;
	changetwelve.classList.remove("hidden");
	changeone.classList.add("hidden");
	changetwo.classList.add("hidden");
	changethree.classList.add("hidden");
	changefour.classList.add("hidden");
	changefive.classList.add("hidden");
	changesix.classList.add("hidden");
	changeseven.classList.add("hidden");
	changeeight.classList.add("hidden");
	changenine.classList.add("hidden");
	changeten.classList.add("hidden");
	changeeleven.classList.add("hidden");
	window.scrollTo(970, 970);
};