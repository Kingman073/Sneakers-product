const modifiers = {
    elProductSmallimageSneakersActive: 'product-smallimage__sneakers--active',
}


let elSiteBasketLink = document.querySelector(".js-site-basket-link");
let elSiteCart = document.querySelector(".site-cart");
// SITE CART
elSiteBasketLink.addEventListener("click", () => {
    elSiteCart.classList.toggle('site-cart--open')
});

// SITE SLIDER
let elsProductSmallimageImg = document.querySelectorAll(".product-smallimage__img");

elsProductSmallimageImg.forEach(elProductSmallimageImg => {
    elProductSmallimageImg.addEventListener('click', () => {
        let elProductImage = elProductSmallimageImg.getAttribute('data-productImage');

        document.querySelector("#product-bigimage__image").src = elProductImage;
    });
});

let elsProductSmallimageSneakers = document.querySelectorAll(".product-smallimage__sneakers");
// deactivatedProduct function
function deactivatedProduct() {
    elsProductSmallimageSneakers.forEach(function (elProductSmallimageSneakers) {
        elProductSmallimageSneakers.classList.remove(modifiers.elProductSmallimageSneakersActive);
    })
}

elsProductSmallimageSneakers.forEach(elProductSmallimageSneakers => {
    elProductSmallimageSneakers.addEventListener("click", () => {

        // deactivatedProduct function
        deactivatedProduct()

        elProductSmallimageSneakers.classList.add(modifiers.elProductSmallimageSneakersActive)


    })
});



let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");
let slider = document.querySelectorAll(".slider");
let optioning = document.querySelectorAll(".optioning");
let slideRemove = document.querySelector(".slide-remove");
let sliderContainer = document.querySelector(".slider-container");
let productBigimage = document.querySelector(".product-bigimage");
let index = 0;

productBigimage.addEventListener("click", () => {
    sliderContainer.style.display = "block"
})

slideRemove.addEventListener("click", () => {
    sliderContainer.style.display = "none"
})
nextBtn.addEventListener("click", () => {
    index++;
    if (index > slider.length - 1) {
        index = 0
    };
    moveSlider();
});

prevBtn.addEventListener("click", () => {
    index--;
    if (index < 0) {
        index = slider.length - 1
    };
    moveSlider();
});

function moveSlider() {
    slider.forEach((slide) => {
        slide.classList.remove("active");
    });
    slider[index].classList.add("active");

    optioning.forEach((option, indx) => {
        option.classList.remove("opcionActive");

        option.addEventListener("click", () => {
            index = indx
            moveSlider()
        })
    })

    optioning[index].classList.add("opcionActive");
};
moveSlider()


let minus = document.querySelector('.minus');
let plus = document.querySelector('.plus');
let productFilterQuantity = document.querySelector('.product-filter__quantity');
let count = 1;

function updateCounter() {
    productFilterQuantity.textContent = count;
}

plus.addEventListener("click", () => {
    count++;
    updateCounter();
});


minus.addEventListener("click", () => {
    if (count > 1) {
        count--;
        updateCounter();
    }
})


let productFilterBtn = document.querySelector(".js-product-filter-btn");
let siteCount = document.querySelector(".site-count");
let productPriceTitle = document.querySelector('.product-price__title');
let siteCartBottom = document.querySelector(".site-cart__bottom");

function countBasket() {
    siteCount.textContent = productFilterQuantity.textContent;
}

productFilterBtn.addEventListener("click", (elem) => {
    elem.preventDefault();
    siteCount.style.display = 'block'
    countBasket();
    let productFilter = productFilterQuantity.textContent;
    let productPrice = productPriceTitle.textContent;
    let price = 125 * productFilter;
    siteCartBottom.innerHTML = `
    <div class="cart">
        <div class="cart-container">
            <img src="image/cartimage.jpeg" class="cart-container__image" alt="cartimage" width="50" height="50" srcset="image/cartimage.jpeg 1x , image/cartimage@2x.jpeg 2x">
            <div class="cart-container__inner">
                <h4 class="cart-container__title">Fall Limited Edition Sneakers</h4>
                <div class="cart-container__prices">
                    <p class="cart-container__quantity">${productPrice + ' x ' + productFilter}</p>
                    <strong class="cart-container__price">${price + ".00"}</strong>
                </div>
            </div>
            <a href="#" class="cart-container__mask">
                <img src="image/mask.svg" class="cart-container__maskimg" alt="mask" width="14" height="16"> 
            </a>
        </div>
    
        <a href="#" class="product-filter__btn">Checkout</a>
    </div>
    `

    let cartContainerMaskimg = document.querySelector(".cart-container__maskimg");
    let cartContainers = document.querySelector(".cart");


    cartContainerMaskimg.addEventListener("click", () => {
        cartContainers.style.display = 'none'
        siteCartBottom.innerHTML = `
            <h3 class="site-cart__bottom-title">Your cart is empty.</h3>
        `
    });

});


