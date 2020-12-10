

fetch("./js/script.json")
    .then((res) => {
        res.json().then((data) => {
            let arr = []
            data.map((elem) => {
                arr.push(renderItem(elem))
            })
            renderGoods(arr)
        })
    }
    ).catch((err) => {
        console.log(err);
    })


let countItems = 6
function renderGoods(array) {
    let mainArticle = document.querySelector('#mainArticle')
    mainArticle.innerHTML = ""
    for (let i = 0; i < countItems && array[i]; i++) {
        mainArticle.append(array[i])
        array[i].children[3].addEventListener('click', addToCart)
    }
    renderShowBtn(array)
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

}

let removeItem = (e) => {
    let a = e.currentTarget.closest(".count-items__cart").children[1]
    let b = +(a.innerHTML)
    let price = e.currentTarget.closest(".item").children[2].innerHTML
    if (b > 1) {
        b--;
        a.innerHTML = b
        totalPrice(+price * -1)
    }
}


let clearAllCart = (e) => {
    let items = document.querySelectorAll(".item")
    for (let i = 0; items[i]; i++) {
        items[i].remove()
    }
    e.target.closest("div").children[1].innerHTML = "0"
}


let clear = (product) => {
    let a = product.currentTarget.closest(".item")

    let price = product.currentTarget.closest(".item").children[2].innerHTML
    let count = product.currentTarget.closest(".item").children[3].children[1].innerHTML
    totalPrice(+price * +count * -1)

    a.remove()
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

function addToCart(e) {
    let cartList = document.querySelector(".cartList")
    let parentImg = e.target.closest('.cont').children[0].getAttribute("src")
    let parentOP = e.target.closest('.cont').children[1].innerHTML
    let parentPrice = e.target.closest('.cont').children[2].innerHTML
    let btnClear = document.createElement("button")
    btnClear.setAttribute("id", "clear")
    let items = document.querySelectorAll(".item")
    let checkDuplicate = true;
    let cartItem = `<div id="cart-item">\
                    <div class="item">\
                    <img src=${parentImg}>\
                    <span>${parentOP}</span>\
                    <span>${parentPrice}</span>\
                    <div class="count-items__cart">
                    <button id="btnPlus">+</button>
                    <span id="count">1</span>
                    <button id="btnMinus">-</button>
                    </div>
                    <button id="clear">clear</button>
                    </div></div></div>`
    if (items.length > 0) {
        for (let i = 0; items[i]; i++) {
            if (items[i].children[1].innerHTML === parentOP) {
                checkDuplicate = false;
                items[i].children[3].children[1].innerHTML++
                totalPrice(+parentPrice)
            }
        }
        if (checkDuplicate) {
            createCartItems(cartList, cartItem)
            totalPrice(+parentPrice)
        }
    } else {
        createCartItems(cartList, cartItem)
        totalPrice(+parentPrice)
    }
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

document.querySelector('#logo').addEventListener('click', renderStartPage)


function renderStartPage() {
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
    contWomen.setAttribute("class", "contIMG")
    contSport.setAttribute("class", "contIMG")
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
}
