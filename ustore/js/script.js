fetch("./js/script.json")
    .then((res) => {
        res.json().then((data) => {
            let arr = []
            data.map((elem)=> {
            arr.push(test(elem)) 
            })
            renderGoods(arr)
        })
    }
    ).catch((err) => {
        console.log(err);
    })


    function renderGoods(array) {
        let mainArticle  =  document.querySelector('#mainArticle')
        array.map((item) => {
            mainArticle.append(item)
        })
    }


function test(elem) {
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

