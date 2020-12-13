let counter = 0;
let count_cart = 0;

fetch("./js/script.json")
    .then((res) => {
        res.json().then((data) => {
            let arr = []
            data.map((elem) => {
                arr.push(renderItem(elem))
            })
            renderStartPage(data)
            addCategoia(data)
            searcher(data)
            sortPrice(data)
            breadcrumbNav(data)
            init();
        })
    }
    ).catch((err) => {
        console.log(err);
    })

function init() {
    for (let i = 0; i < localStorage.length; ++i, count_cart++) {
        let forSplit = String(localStorage.getItem(`${i}`)).split(';');
        createCartItem({
            image: forSplit[0],
            name: forSplit[1],
            price: forSplit[2]
        })
    }
    document.querySelector('#easynetshop-cart-count').innerHTML = count_cart;
}

function createCartItem(cart) {
    for (let i = 0; i < localStorage.length; i++) {
        if (document.getElementById(`${cart.name}`) !== null) {
            let children = document.getElementById(`${cart.name}`).children[0].children[3].children[1];
            children.innerText = +children.innerText + 1;
            totalPrice(+cart.price)
            return;
        }
    }
    let cartItem = `<div id="${cart.name}">\
            <div class="item">\
            <img src=${cart.image}>\
            <span>${cart.name}</span>\
            <span>${cart.price}</span>\
            <div class="count-items__cart">
            <button id="btnPlus">+</button>
            <span id="count">1</span>
            <button id="btnMinus">-</button>
            </div>
            <button id="clear">clear</button>
            </div></div></div>`
    createCartItems(cartList, cartItem);
    totalPrice(+cart.price);
}

function goToMenPage(data) {
    document.querySelector("#contMen").addEventListener('click', () => {
        let arr = []
        data.map((elem) => {
            if (elem.category === "mens")
                arr.push(renderItem(elem))
        })
        renderGoods(arr)
    })
}

function goToWomenPage(data) {
    document.querySelector("#contWomen").addEventListener('click', () => {
        let arr = []
        data.map((elem) => {
            if (elem.category === "womens")
                arr.push(renderItem(elem))
        })
        renderGoods(arr)
    })
}

function goToSportPage(data) {
    document.querySelector("#contSport").addEventListener('click', () => {
        let arr = []
        data.map((elem) => {
            if (elem.category === "sports") {
                arr.push(renderItem(elem))
            }
        })
        renderGoods(arr)
    })
}

function sortPrice(data) {
    let inputFrom = document.querySelector("#inputFrom")
    let inputTo = document.querySelector("#inputTo")
    let inputRange = document.querySelector('#inputRange')
    document.querySelector("#applyBtn").addEventListener('click', () => {
        let arr = []
        data.map((elem) => {
            if (+elem.price >= inputFrom.value && +elem.price <= inputTo.value)
                arr.push(renderItem(elem))
        })
        renderGoods(arr)
    })
    inputRange.addEventListener('input', () => {
        inputTo.value = inputRange.value;
    })
}


function searcher(data) {
    let btnSearch = document.querySelector("#searchBtn")
    btnSearch.addEventListener('click', () => {
        let search = document.querySelector("#search")
        let arr = []
        data.map((elem) => {
            if (elem.name.toLowerCase().includes(search.value.toLowerCase())) {
                arr.push(renderItem(elem))
            }
        })
        renderGoods(arr)
    })
    let search = document.querySelector("#search")
    search.addEventListener('search', () => {
        let arr = []
        data.map((elem) => {
            if (elem.name.toLowerCase().includes(search.value.toLowerCase())) {
                arr.push(renderItem(elem))
            }
        })
        renderGoods(arr)
    })

}


let countItems = 6
function renderGoods(array) {
    let mainArticle = document.querySelector('#mainArticle')
    if (array.length > 0) {
        mainArticle.innerHTML = ""
        for (let i = 0; i < countItems && array[i]; i++) {
            mainArticle.append(array[i])
            array[i].children[3].addEventListener('click', addToCart)
        }
        renderShowBtn(array)
    }
}

function addCategoia(data) {
    document.querySelector(".shopList").addEventListener('click', () => {
        let arr = []
        let filterClass = event.target.dataset['f']
        if (filterClass != "all") {
            data.map((elem) => {
                if (elem.category === filterClass) {
                    arr.push(renderItem(elem))
                }
            })
        } else {
            data.map((elem) => {
                arr.push(renderItem(elem))
            })
        }
        renderGoods(arr)
    })
    document.querySelector("#categoryList").addEventListener('change', (event) => {
        let arr = []
        let filterClass = event.target.value
        if (filterClass != "all") {
            data.map((elem) => {
                if (elem.category === filterClass) {
                    arr.push(renderItem(elem))
                }
            })
        } else {
            data.map((elem) => {
                arr.push(renderItem(elem))
            })
        }
        renderGoods(arr)
    })
}

function test(value) {
    let parent = document.querySelector(".mainBreadcrumbs");
    let buffer = parent.innerHTML;
    parent.innerHTML = "HOME / " + value;
}

function breadcrumbNav(data) {
    let mainNav = document.querySelector('#mainNav')
    let breadcrumb = `<div class="dropdownBreadcrumbs">
            <span class="mainBreadcrumbs">HOME</span>
            <div class="listBreadcrumbs">
                <a href="#" data-f="mens" class="mensShoes">Men's shoes</a>
                <a href="#" data-f="womens" class="womanShoes">Women's shoes</a>
                <a href="#" data-f="sports" class="SportShoes">Sport shoes</a>
            </div> 
            </div>`
    mainNav.insertAdjacentHTML("afterbegin", breadcrumb)
    document.querySelector(".mainBreadcrumbs").addEventListener('click', renderStartPage)
    document.querySelector(".listBreadcrumbs").addEventListener('click', (e) => {
        let arr = []
        let filterClass = event.target.dataset['f']
        if (filterClass != "all") {
            data.map((elem) => {
                if (elem.category === filterClass) {
                    arr.push(renderItem(elem))
                }
            })
        } else {
            data.map((elem) => {
                arr.push(renderItem(elem))
            })
        }
        renderGoods(arr)
        test(e.target.innerHTML);
    })
}


function renderShowBtn(array) {
    let mainArticle = document.querySelector('#mainArticle')
    let btnShow = `<div id="contenerBtnShow"><button id="btnShow">SHOW MORE</button></div>`
    mainArticle.insertAdjacentHTML("beforeend", btnShow)
    document.getElementById("btnShow").addEventListener("click", () => {
        countItems += 6
        renderGoods(array)
    })
}


let addItem = (e) => {
    let a = e.currentTarget.closest(".count-items__cart").children[1]
    let b = +(a.innerHTML)
    let price = e.currentTarget.closest(".item").children[2].innerHTML
    b++;
    a.innerHTML = b
    totalPrice(price)
    count_cart++;
    cartCount();

}

let removeItem = (e) => {
    let a = e.currentTarget.closest(".count-items__cart").children[1]
    let b = +(a.innerHTML)
    let price = e.currentTarget.closest(".item").children[2].innerHTML
    if (b > 1) {
        b--;
        a.innerHTML = b
        totalPrice(+price * -1)
        count_cart--;
        cartCount();
    }
}


let clearAllCart = (e) => {
    let items = document.querySelectorAll(".item")
    for (let i = 0; items[i]; i++) {
        items[i].remove()
    }
    e.target.closest("div").children[1].innerHTML = "0"
    localStorage.clear();
    count_cart = 0;
    cartCount();
}


let clear = (product) => {
    let a = product.currentTarget.closest(".item")

    let price = product.currentTarget.closest(".item").children[2].innerHTML
    let count = product.currentTarget.closest(".item").children[3].children[1].innerHTML
    totalPrice(+price * +count * -1)
    count_cart = count_cart - (+count)
    a.remove()
    cartCount()
}

let cartList = document.querySelector(".cartList")

let cartOptions = `<div class="cartOptions">
<span>Total:</span><div>0</div>
<button id="clearCart">CLEAR</button></div>`

cartList.insertAdjacentHTML("beforeend", cartOptions)

let clearCartBtn = document.querySelector("#clearCart")
clearCartBtn.addEventListener("click", clearAllCart)

function totalPrice(price) {
    let a = document.querySelector(".cartOptions").children[1].innerHTML
    a = +price + +a
    document.querySelector(".cartOptions").children[1].innerHTML = a
}

function cartCount() {
    document.querySelector('#easynetshop-cart-count').innerHTML = count_cart;
}

function addToCart(e) {
    let cartList = document.querySelector(".cartList")
    let parentImg = e.target.closest('.cont').children[0].getAttribute("src")
    let parentOP = e.target.closest('.cont').children[1].innerHTML
    let parentPrice = e.target.closest('.cont').children[2].innerHTML
    let btnClear = document.createElement("button")
    btnClear.setAttribute("id", "clear")
    let items = document.querySelectorAll(".item")
    let checkDuplicate = true;
    let forStorage = `${parentImg};${parentOP};${parentPrice}`;
    localStorage.setItem(`${count_cart}`, forStorage);
    createCartItem({
        image: parentImg,
        name: parentOP,
        price: parentPrice
    })
    count_cart++;
    cartCount();
}


function createCartItems(cartList, cartItem) {
    cartList.insertAdjacentHTML("afterbegin", cartItem)
    let btnsMinus = document.querySelectorAll("#btnMinus")
    let btnsPlus = document.querySelectorAll("#btnPlus")
    let clearBtns = document.querySelectorAll("#clear");

    for (let i = 0; clearBtns[i]; i++) {
        clearBtns[i].addEventListener("click", clear)
        btnsMinus[i].addEventListener("click", removeItem)
        btnsPlus[i].addEventListener("click", addItem)
    }
}


function renderItem(elem) {
    let contDiv = document.createElement("div")
    let contImg = document.createElement('img')
    let contOP = document.createElement("div")
    let contPrice = document.createElement("div")
    let contBtn = document.createElement("button")
    contImg.setAttribute('src', elem.img)
    contDiv.setAttribute('class', "cont")
    contOP.innerHTML = elem.name
    contPrice.innerHTML = elem.price
    contBtn.innerHTML = "Add cart"
    contDiv.append(contImg)
    contDiv.append(contOP)
    contDiv.append(contPrice)
    contDiv.append(contBtn)
    return contDiv
}

document.querySelector('#home').addEventListener('click', () => {
    location.reload();
})

document.querySelector('#logo').addEventListener('click', () => {
    location.reload();
})


function renderStartPage(data) {
    let mainArticle = document.querySelector('#mainArticle')
    let contMain = document.createElement('div')
    let contMen = document.createElement('div')
    let contWomen = document.createElement('div')
    let contSport = document.createElement('div')
    let MenImg = document.createElement('img')
    let WomenImg = document.createElement('img')
    let SportImg = document.createElement('img')
    let DescSpanMen = document.createElement('span');
    let DescSpanWomen = document.createElement('span');
    let DescSpanSport = document.createElement('span');
    mainArticle.innerHTML = ""
    DescSpanMen.innerText = "Man's shoes"
    DescSpanWomen.innerText = "Women's shoes"
    DescSpanSport.innerText = "Sport shoes"
    contMain.setAttribute("class", "contMain")
    contMen.setAttribute("class", "contIMG")
    contMen.setAttribute("id", "contMen")
    contWomen.setAttribute("class", "contIMG")
    contWomen.setAttribute("id", "contWomen")
    contSport.setAttribute("class", "contIMG")
    contSport.setAttribute("id", "contSport")
    MenImg.setAttribute("src", "assets/category_1.jpg")
    WomenImg.setAttribute("src", "assets/category_2.jpg")
    SportImg.setAttribute("src", "assets/category_3.jpg")
    contWomen.append(DescSpanWomen)
    contSport.append(DescSpanSport)
    contWomen.append(WomenImg)
    contSport.append(SportImg)
    contMen.append(DescSpanMen)
    contMen.append(MenImg)
    contMain.append(contMen)
    contMain.append(contWomen)
    contMain.append(contSport)
    mainArticle.append(contMain)
    goToMenPage(data)
    goToWomenPage(data)
    goToSportPage(data)
}
