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
  nav: true,
  dots: false,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
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
});

// header home show case with animation
// Listen to owl events:

// header dropdown

$("#header__dropdown")[0].onmouseover = function(){
  $(".header__dropdown-content")[0].style.display = "block";
}

$("#header__dropdown")[0].onmouseout = function(){
  $(".header__dropdown-content")[0].style.display = "none";
}

// header cart-dropdown
$("#header__cart-dropdown")[0].onmouseover = function(){
  $(".header__cart-dropdown-content")[0].style.display = "block";
}

$("#header__cart-dropdown")[0].onmouseout = function(){
  $(".header__cart-dropdown-content")[0].style.display = "none";
}

// menu list button
var all = [1, 2, 3, 4, 7, 8];
var salads = [7];
var drinks = [3];
var pasta = [8];
var burgers = [7, 3, 8];
var deserts = [3, 2];
var pizza = [1, 3, 4];

for (var i = 0; i < all.length; i++) {
  $("#menuContainer").append(`
  <div class="col-3 d-flex flex-column align-items-center my-3 animate__animated animate__fadeIn">
  <a href="#"><img src="img/menu-${all[i]}.png" class="menu__menu-item" alt=""></a>
    <div class="menu__menu-item__caption text-center mt-4">
        <h4 class="text-uppercase font-weight-lighter menu__menu-item__header">margherita pizza</h4>
        <p class="menu__menu-item__description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
        <span class="text-lightwarning">$20.50</span>
    </div>
  </div>
  `);
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

$(".menu__menu-tap-item").click(function (e) {
  removeMenuClass();
  this.classList.add("menu__menu-tap-item_active");
  $(".menu-container").empty();
  if (e.target.id == "all") {
    var id = all;
  } else if (e.target.id == "salads") {
    var id = salads;
  } else if (e.target.id == "drinks") {
    var id = drinks;
  } else if (e.target.id == "pasta") {
    var id = pasta;
  } else if (e.target.id == "burgers") {
    var id = burgers;
  } else if (e.target.id == "deserts") {
    var id = deserts;
  } else if (e.target.id == "pizza") {
    var id = pizza;
  }
  for (var i = 0; i < id.length; i++) {
    $("#menuContainer").append(`
    <div class="col-3 d-flex flex-column align-items-center my-3 animate__animated animate__fadeIn">
    <a href="#"><img src="img/menu-${id[i]}.png" class="menu__menu-item" alt=""></a>
      <div class="menu__menu-item__caption text-center mt-4">
          <h4 class="text-uppercase font-weight-lighter menu__menu-item__header">margherita pizza</h4>
          <p class="menu__menu-item__description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
          <span class="text-lightwarning">$20.50</span>
      </div>
    </div>
    `);
  }
});

// shop detail description and review
function opendes(evt, desname){
  let i,descontent,des_btn;
  
  descontent = $(".item-detail__des__content");
  for(i=0; i<descontent.length;i++){
    descontent[i].style.display = "none";
  }

  des_btn = $(".item-detail__des__btn");
  for(i=0; i<des_btn.length;i++){
    des_btn[i].className = des_btn[i].className.replace(" active","");
  }

  let des_name= $(`#${desname}`)[0];
  console.log(des_name);
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
    c.addEventListener("click", function(e) {
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
  a.addEventListener("click", function(e) {
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