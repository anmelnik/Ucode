let chara = document.getElementById("characters").children


for (let i = 0; i < chara.length; i++) {
    let getClass = chara[i].getAttribute("class")
    let getData = chara[i].getAttribute('data-element')
    if (!getClass || (getClass != 'good' && getClass != 'evil')) {
        chara[i].className = "unknown"
    }
    if (!getData) {
        chara[i].setAttribute("data-element", 'none')
    }
    getData = chara[i].getAttribute('data-element').split(' ')
    chara[i].appendChild(document.createElement('br'))
    for (let j = 0; j < getData.length; j++) {
        let div = document.createElement('div')
        div.className = `elem ${getData[j]}`
        if (getData[j] == 'none') {
            let line = document.createElement('div')
            line.className = 'line'
            div.appendChild(line)
        }
        chara[i].appendChild(div)
    }
}