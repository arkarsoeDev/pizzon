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
  responsiveClass:true,
  responsive:{
    0:{
      items:1,
      nav:false,
      dots:true,
    },
    768:{
        items:3,
        nav:false,
    },
    1000:{
        items:4,
        nav:false,
    }
}}
);

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
  responsiveClass:true,
  responsive:{
    0:{
      items:1,
      nav:false,
      dots:false,
    },
    768:{
      items:1,
      nav:false,
      dots:false,
    },
    992:{
      items:1,
      nav:false,
      dots:false,
    }
}
});

// nav toggler
$(".navbar-toggler").click(
  function (){
    if($(".navbar-collapse").hasClass("show")){
      $(".nav-menu-icon").removeClass("fa-times").addClass("fa-bars")
    }
    else{
      $(".nav-menu-icon").removeClass("fa-bars").addClass("fa-times")

    }
  }
)

// owl navigator
owlNavigator('.chef__right','.chef__left',owl);
owlNavigator('.home__right','.home__left',owl3);

function owlNavigator (right,left,name){
  // Go to the next item
$(right).click(function() {
  name.trigger('next.owl.carousel');
})
// Go to the previous item
$(left).click(function() {
  name.trigger('prev.owl.carousel', [300]);
})
}

// header dropdown
dropdown("#header__dropdown",".header__dropdown-content");
dropdown("#header__cart-dropdown",".header__cart-dropdown-content");

function dropdown(key,content){
  $(key)[0].onmouseover = function(){
    $(content)[0].classList.add("d-lg-block")
  }
  
  $(key)[0].onmouseout = function(){
    $(content)[0].classList.remove("d-lg-block")
  }
}

$("#headerDropdownBtnSm").on("click",function(){
  // icon change
  if($(".header__menu-list_sm").hasClass("d-block")){
    $(".menu-expand-icon").removeClass("fa-minus").addClass("fa-plus")
  }
  else{
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
var all , salads, drinks, pasta, burgers, deserts,pizza;
all = [1, 2, 3, 4, 7, 8];
salads = [7];
drinks = [3];
pasta = [8];
burgers = [7, 3, 8];
deserts = [3, 2];
pizza = [1, 3, 4];

// menu1 list button
var all1 , salads1, drinks1, pasta1, burgers1, deserts1,pizza1;
all1 = [1,2,3,6,7,8];
salads1 = [1,2];
drinks1 = [3,6,7];
pasta1 = [8,9];
burgers1 = [10];
deserts1 = [9,11];
pizza1 = [1,2,3];

// menu2 list button
var all2 , salads2, drinks2, pasta2, burgers2, deserts2,pizza2;
all2 = [12,13,14,15,16,17];
salads2 = [12];
drinks2 = [14,17,15];
pasta2 = [14,15];
burgers2 = [16];
deserts2 = [16,13];
pizza2 = [14,15,12];

var menuBoxArr = [all, salads , drinks , pasta, burgers , deserts, pizza];
var menu1BoxArr = [all1, salads1 , drinks1 , pasta1, burgers1 , deserts1, pizza1];
var menu2BoxArr = [all2, salads2 , drinks2 , pasta2, burgers2 , deserts2, pizza2];

menuFill(all);
menu1Fill(all1);
menu2Fill(all2);

$(".menu__tap-click").click(function (e) {
  menuClickExecute(e,this,'.menu-container',menuFill,menuBoxArr);
});

$(".menu1__tap-click").click(function (e) {
  menuClickExecute(e,this,'.menu1__card-container',menu1Fill,menu1BoxArr);
});

$(".menu2__tap-click").click(function (e) {
  menuClickExecute(e,this,'.menu2__card-container',menu2Fill,menu2BoxArr);
});



function menuClickExecute(e,addClass,container,fill,menuArr){
  removeMenuClass();
  addClass.classList.add("menu__menu-tap-item_active");
  $(container).empty();
  
  fill(menuArr[e.target.id])
}

function menuFill(menuBox){
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

function menu1Fill(menuBox){
  for (var i = 0; i < menuBox.length; i++) {
    $("#menu1Container").append(`
    <div class="col-4">
        <div class="menu1__item mt-4 animate__animated animate__fadeIn">
            <div class="menu1__item__img-container">
                <a href="#"><img src="img/menu-1/list-${menuBox[i]}.jpg" alt=""></a>
            </div>
            <div class="menu1__item__des  m-3">
                <h5 class="menu1__item__title">barbecue</h5>
                <ul class="menu1__item__ingredient">
                    <li>Chicken</li>
                    <li>Olive Oil</li>
                    <li>Salt</li>
                </ul>
                <p class="menu1__item__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aut veniam, temporibus alias, natus beatae doloribus excepturi similique eaque sed odio eos voluptatem laboriosam. Hic fugiat impedit repellat beatae vel?
                </p>
                <a href="#" class="menu1__item__link">Order now</a>
            </div>
        </div>
    </div>
    `);
  }
}

function menu2Fill(menuBox){
  for (var i = 0; i < menuBox.length; i++) {
    $("#menu2Container").append(`
      <div class="col-6">
      <div class="menu2__card d-flex align-items-center px-3 mb-3 animate__animated animate__fadeIn">
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