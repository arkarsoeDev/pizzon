// preloader
$(window).on("load", function () {
	$(".loader-container").fadeOut(500, function () {
		this.remove();
	});
});
// owl carousel
$(document).ready(function () {
	$(".owl-carousel").owlCarousel();
});
var owl = $("#chef");
owl.owlCarousel({
	items: 4,
	loop: true,
	margin: 30,
	autoplay: true,
	nav: false,
	dots: false,
	autoplayTimeout: 4000,
	autoplayHoverPause: true,
	responsiveClass: true,
	responsive: {
		0: {
			items: 1,
			nav: false,
			dots: true,
		},
		768: {
			items: 3,
			nav: false,
		},
		1000: {
			items: 4,
			nav: false,
		}
	}
});
var owl2 = $("#c-review");
owl2.owlCarousel({
	autoplay: true,
	items: 1,
	dots: true,
	loop: true,
	autoplayHoverPause: true,
	animateOut: "animate__slideOutUp",
	animateIn: "animate__slideInUp",
	autoplayTimeout: 2000,
	margin: 30,
	mouseDrag: true,
});
var owl3 = $("#home-showcase");
owl3.owlCarousel({
	items: 1,
	loop: true,
	margin: 0,
	autoplay: true,
	nav: false,
	dots: false,
	autoplayTimeout: 500000,
	autoplaySpeed: 500,
	autoplayHoverPause: true,
	slideTransition: 'linear',
	responsiveClass: true,
	responsive: {
		0: {
			items: 1,
			nav: false,
			dots: true,
		},
		768: {
			items: 1,
			nav: false,
			dots: false,
		},
		992: {
			items: 1,
			nav: false,
			dots: false,
		}
	}
});
// nav toggler
$(".navbar-toggler").click(function () {
	if ($(".navbar-collapse").hasClass("show")) {
		$(".nav-menu-icon").removeClass("fa-times").addClass("fa-bars")
	} else {
		$(".nav-menu-icon").removeClass("fa-bars").addClass("fa-times")
	}
})
// owl navigator
owlNavigator('.chef__right', '.chef__left', owl);
owlNavigator('.home__right', '.home__left', owl3);

function owlNavigator(right, left, name) {
	// Go to the next item
	$(right).click(function () {
		name.trigger('next.owl.carousel');
	})
	// Go to the previous item
	$(left).click(function () {
		name.trigger('prev.owl.carousel', [300]);
	})
}
// cart sm show
$('#cartDropdownSm').on('click', function () {
	$('.header__cart-dropdown-content-sm')[0].classList.toggle('d-block');
	console.log("hello")
	$('.header__shopping-icon-sm')[0].classList.toggle('shop-icon-color');
})
$('#cartPhoneSm').on('click', function () {
	$('.header__phone-icon-sm')[0].classList.toggle('phone-icon-color');
})
// header dropdown
dropdown("#header__dropdown", ".header__dropdown-content");
dropdown("#header__cart-dropdown", ".header__cart-dropdown-content");

function dropdown(key, content) {
	$(key)[0].onmouseover = function () {
		$(content)[0].classList.add("d-lg-block")
	}
	$(key)[0].onmouseout = function () {
		$(content)[0].classList.remove("d-lg-block")
	}
}
$("#headerDropdownBtnSm").on("click", function () {
	// icon change
	if ($(".header__menu-list_sm").hasClass("d-block")) {
		$(".menu-expand-icon").removeClass("fa-minus").addClass("fa-plus")
	} else {
		$(".menu-expand-icon").removeClass("fa-plus").addClass("fa-minus")
	}
	$(".header__menu-list_sm")[0].classList.toggle("d-block");
	var menu = $(".header__dropdown-content_sm")[0];
	console.log(menu)
	if (menu.style.maxHeight) {
		menu.style.maxHeight = null;
	} else {
		menu.style.maxHeight = menu.scrollHeight + "px";
	}
})
// menu list button
var all, salads, drinks, pasta, burgers, deserts, pizza;
all = [1, 2, 3, 4, 7, 8];
salads = [7];
drinks = [3];
pasta = [8];
burgers = [7, 3, 8];
deserts = [3, 2];
pizza = [1, 3, 4];
// menu1 list button
var all1, salads1, drinks1, pasta1, burgers1, deserts1, pizza1;
all1 = [1, 2, 3, 6, 7, 8];
salads1 = [1, 2];
drinks1 = [3, 6, 7];
pasta1 = [8, 9];
burgers1 = [10];
deserts1 = [9, 11];
pizza1 = [1, 2, 3];
// menu2 list button
var all2, salads2, drinks2, pasta2, burgers2, deserts2, pizza2;
all2 = [12, 13, 14, 15, 16, 17];
salads2 = [12];
drinks2 = [14, 17, 15];
pasta2 = [14, 15];
burgers2 = [16];
deserts2 = [16, 13];
pizza2 = [14, 15, 12];
var menuBoxArr = [all, salads, drinks, pasta, burgers, deserts, pizza];
var menu1BoxArr = [all1, salads1, drinks1, pasta1, burgers1, deserts1, pizza1];
var menu2BoxArr = [all2, salads2, drinks2, pasta2, burgers2, deserts2, pizza2];
menuFill(all);
menu1Fill(all1);
menu2Fill(all2);
$(".menu__tap-click").click(function (e) {
	menuClickExecute(e, this, '.menu-container', menuFill, menuBoxArr);
});
$(".menu1__tap-click").click(function (e) {
	menuClickExecute(e, this, '.menu1__card-container', menu1Fill, menu1BoxArr);
});
$(".menu2__tap-click").click(function (e) {
	menuClickExecute(e, this, '.menu2__card-container', menu2Fill, menu2BoxArr);
});

function menuClickExecute(e, addClass, container, fill, menuArr) {
	removeMenuClass();
	addClass.classList.add("menu__menu-tap-item_active");
	$(container).empty();
	fill(menuArr[e.target.id])
}

function menuFill(menuBox) {
	for (var i = 0; i < menuBox.length; i++) {
		$("#menuContainer").append(`
    <div class="col-12 col-md-4 col-lg-3 d-flex flex-column align-items-center my-3 animate__animated animate__fadeIn">
      <a href="#"><img src="img/menu-${menuBox[i]}.png" class="menu__menu-item" alt=""></a>
    <div class="menu__menu-item__caption text-center mt-3 mt-md-4">
      <h4 class="text-uppercase font-weight-lighter menu__menu-item__header mb-0 mb-md-3">margherita pizza</h4>
      <p class="menu__menu-item__description mb-md-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
      <span class="text-lightwarning menu__menu-item__price">$20.50</span>
    </div>
    `);
	}
}

function menu1Fill(menuBox) {
	for (var i = 0; i < menuBox.length; i++) {
		$("#menu1Container").append(`
    <div class="col-12 col-md-4">
        <div class="menu1__item mt-4 animate__animated animate__fadeIn">
            <div class="menu1__item__img-container">
                <a href="#"><img src="img/menu-1/list-${menuBox[i]}.jpg" alt=""></a>
            </div>
            <div class="menu1__item__des  m-3">
                <p class="menu1__item__title mb-1">barbecue</p>
                <ul class="menu1__item__ingredient mb-1">
                    <li>Chicken</li>
                    <li>Olive Oil</li>
                    <li>Salt</li>
                </ul>
                <p class="menu1__item__text mb-1">
                    Lorem ipsum dolor sit amet consecte doloribus excepturi similique eaque sed odio eos voluptatem laboriosam. Hic fugiat impedit repellat beatae vel?
                </p>
                <a href="#" class="menu1__item__link">Order now</a>
            </div>
        </div>
    </div>
    `);
	}
}

function menu2Fill(menuBox) {
	for (var i = 0; i < menuBox.length; i++) {
		$("#menu2Container").append(`
      <div class="col-12 col-md-6 px-0">
      <div class="menu2__card d-flex align-items-center px-md-3 mb-3 animate__animated animate__fadeIn">
          <div class="menu2__card__img mr-4">
              <a href="#"><img src="img/menu-2/list-${menuBox[i]}.jpg" alt=""></a>
          </div>
          <div class="menu2__card__des w-100">
              <div class="menu2__card__heading d-flex align-items-center justify-content-between my-2">
                  <a href="#" class="menu2__card__title">barbecue pizza</a>
                  <span class="menu2__card__price">$20.00</span>
              </div>
              <div class="menu2__card__text  py-2">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo delectus harum quisquam fuga aliquam optio dolores aperiam.</p>
              </div>
          </div>
      </div>
      </div>
    `);
	}
}

function removeMenuClass() {
	var menu_classlist = $(".menu__menu-tap-item");
	let i = 0;
	while (menu_classlist[i]) {
		if (menu_classlist[i].classList.contains("menu__menu-tap-item_active")) {
			menu_classlist[i].classList.remove("menu__menu-tap-item_active");
		}
		i++;
	}
}
// shop detail description and review
function opendes(evt, desname) {
	let i, descontent, des_btn;
	descontent = $(".item-detail__des__content");
	for (i = 0; i < descontent.length; i++) {
		descontent[i].style.display = "none";
	}
	des_btn = $(".item-detail__des__btn");
	for (i = 0; i < des_btn.length; i++) {
		des_btn[i].className = des_btn[i].className.replace(" active", "");
	}
	let des_name = $(`#${desname}`)[0];
	des_name.style.display = "block";
	evt.currentTarget.className += " active";
}
// custom select js
var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "c-select-item": */
x = document.getElementsByClassName("c-select-item");
l = x.length;
for (i = 0; i < l; i++) {
	selElmnt = x[i].getElementsByTagName("select")[0];
	ll = selElmnt.length;
	/* For each element, create a new DIV that will act as the selected item: */
	a = document.createElement("DIV");
	a.setAttribute("class", "select-selected");
	a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
	x[i].appendChild(a);
	/* For each element, create a new DIV that will contain the option list: */
	b = document.createElement("DIV");
	b.setAttribute("class", "select-items select-hide");
	for (j = 1; j < ll; j++) {
		/* For each option in the original select element,
    create a new DIV that will act as an option item: */
		c = document.createElement("DIV");
		c.innerHTML = selElmnt.options[j].innerHTML;
		c.addEventListener("click", function (e) {
			/* When an item is clicked, update the original select box,
        and the selected item: */
			var y, i, k, s, h, sl, yl;
			s = this.parentNode.parentNode.getElementsByTagName("select")[0];
			sl = s.length;
			h = this.parentNode.previousSibling;
			for (i = 0; i < sl; i++) {
				if (s.options[i].innerHTML == this.innerHTML) {
					s.selectedIndex = i;
					h.innerHTML = this.innerHTML;
					y = this.parentNode.getElementsByClassName("same-as-selected");
					yl = y.length;
					for (k = 0; k < yl; k++) {
						y[k].removeAttribute("class");
					}
					this.setAttribute("class", "same-as-selected");
					break;
				}
			}
			h.click();
		});
		b.appendChild(c);
	}
	x[i].appendChild(b);
	a.addEventListener("click", function (e) {
		/* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
		e.stopPropagation();
		closeAllSelect(this);
		this.nextSibling.classList.toggle("select-hide");
		this.classList.toggle("select-arrow-active");
		this.classList.toggle("res-border");
	});
}

function closeAllSelect(elmnt) {
	/* A function that will close all select boxes in the document,
  except the current select box: */
	var x, y, i, xl, yl, arrNo = [];
	x = document.getElementsByClassName("select-items");
	y = document.getElementsByClassName("select-selected");
	xl = x.length;
	yl = y.length;
	for (i = 0; i < yl; i++) {
		if (elmnt == y[i]) {
			arrNo.push(i)
		} else {
			y[i].classList.remove("select-arrow-active");
		}
	}
	for (i = 0; i < xl; i++) {
		if (arrNo.indexOf(i)) {
			x[i].classList.add("select-hide");
		}
	}
}
/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);
// scroll arrow 
$(document).ready(function () {
	let screenHeight = $(window).height();
	$(window).scroll(function () {
		let currentPosition = $(this).scrollTop();
		if (currentPosition > screenHeight - 300) {
			$(".scroll-arrow").addClass("d-lg-block");
		} else {
			$(".scroll-arrow").removeClass("d-lg-block");
		}
	});
});

// input date fix for mobile
/**
 * Detect Mobile device
 */
 var isMobile = false; //initiate as false
 // device detection
 if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
   || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
   isMobile = true;
 }
 
 jQuery('input[type="date"]').change(function() {
   if( isMobile) {
	 if (!jQuery(this).val()) {
	   jQuery(this).addClass('mobile');
	 }
	 else {
	   jQuery(this).removeClass('mobile');
	 }
   }
 });
