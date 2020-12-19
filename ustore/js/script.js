let counter = 0;
let count_cart = 0;
let pos = 0;

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
    for (let a in localStorage) {
        let info = localStorage.getItem(a);
        if (info !== null) {
            let forSplit = String(localStorage.getItem(a)).split(';');
            createCartItem({
                image: forSplit[0],
                name: forSplit[1],
                price: forSplit[2]
            }, count_cart)
            ++count_cart;
        }
    }
    document.querySelector('#easynetshop-cart-count').innerHTML = count_cart;
}

function createCartItem(cart) {
    for (let a in localStorage) {
        let info = localStorage.getItem(a);
        if (document.getElementById(`${cart.name}`) !== null && info !== null) {
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
            <button id="btnPlus" onclick="add_element('${cart.name}', '${cart.price}')">+</button>
            <span id="count">1</span>
            <button id="btnMinus" onclick="remove_element('${cart.name}', '${cart.price}')">-</button>
            </div>
            <button id="clear" onclick="deleteCartElement('${cart.name}')">clear</button>
            </div></div></div>`;
    createCartItems(cartList, cartItem);
    totalPrice(+cart.price);
}

function add_element(cartName, cartPrice) {
    let info = document.getElementById(`${cartName}`);
    if (info !== null) {
        let image = String(info.children[0].children[0].src).split("/");
        let forStorage = `${image[image.length - 2] + '/' + image[image.length - 1]};${info.children[0].children[1].innerText};${info.children[0].children[2].innerText}`;
        localStorage.setItem(`${count_cart}`, forStorage);
        ++count_cart;

        cartCount();
        let children = document.getElementById(`${cartName}`).children[0].children[3].children[1];
        children.innerText = +children.innerText + 1;
        totalPrice(+cartPrice)
        ++pos;
    }
}

function remove_element(cartName, cartPrice) {
    for (let a in localStorage) {
        let info = localStorage[a]
        if(info != null && cartName === String(info).split(';')[1]) {
            let children = document.getElementById(`${cartName}`).children[0].children[3].children[1];
            if(children.innerText <= 1) {
                break;
            }
            localStorage.removeItem(a)
            totalPrice(+info.split(';')[2] * -1);
            count_cart--;
            cartCount();
            children.innerText = +children.innerText - 1;
            break;
        }
    }
}


function deleteCartElement(cartName) {
    let cart_element = document.getElementById(cartName);
    for (let a in localStorage) {
        let info = localStorage[a];
        // let info = localStorage.getItem(`${i}`);
        if (info === null) {
            continue;
        }
        if (cartName === String(info).split(';')[1]) {
            localStorage.removeItem(`${a}`);
            localStorage.removeItem[a];
            totalPrice(+info.split(';')[2] * -1);
            count_cart--;
        }
    }
    cartCount();
    cart_element.remove();
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
    totalPrice(+price)
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
    document.location.reload();
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
    let parentImg = e.target.closest('.cont').children[0].getAttribute("src")
    let parentOP = e.target.closest('.cont').children[1].innerHTML
    let parentPrice = e.target.closest('.cont').children[2].innerHTML
    let btnClear = document.createElement("button")
    btnClear.setAttribute("id", "clear")
    let forStorage = `${parentImg};${parentOP};${parentPrice}`;
    localStorage.setItem(`${count_cart}`, forStorage);
    createCartItem({
        image: parentImg,
        name: parentOP,
        price: parentPrice
    }, count_cart);
    count_cart++;
    cartCount();
}


function createCartItems(cartList, cartItem) {
    cartList.insertAdjacentHTML("afterbegin", cartItem)
    let clearBtns = document.querySelectorAll("#clear");

    for (let i = 0; clearBtns[i]; i++) {
        clearBtns[i].addEventListener("click", clear)
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

let f = true
document.querySelector('.header__burger').addEventListener('click', () => {
    if (f) {
        document.querySelector('#mainNav').style.display = "flex"
        document.querySelector('.header__burger').setAttribute('class', 'header__burger active')
        f = false
    } else {
        document.querySelector('#mainNav').style.display = "none"
        document.querySelector('.header__burger').setAttribute('class', 'header__burger')
        f = true
    }
})
