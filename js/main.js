let elSiteBasketLink = document.querySelector(".js-site-basket-link");
let elSiteCart = document.querySelector(".site-cart");

elSiteBasketLink.addEventListener("click" , () => {
    elSiteCart.classList.toggle('site-cart--open')
})