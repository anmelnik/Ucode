let area = document.getElementById('area')
let box = document.getElementsByClassName('box')

let player = "X"
let winIndex = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
]



for(let i = 1; i <=9; i++) {
    area.innerHTML += "<div class='box' pos=" + i + "></div>"
}

for( let i = 0; i < box.length; i++) {
    box[i].addEventListener('click', cellclik, {once: true})
}
let counter = 0;
let play_again = document.querySelector('.play_again')
play_again.addEventListener('click', restart)

function cellclik() {
    counter++
    document.querySelector('.orange').classList.remove('orange')
    if(counter % 2 == 0){
        document.querySelector('.player_1').classList.add('orange')
    }else{
        document.querySelector('.player_2').classList.add('orange')
    }

    document.querySelector('#count').innerHTML = `${counter}`
    let data = []

    if(!this.innerHTML) {
        this.innerHTML = player
    } 
    for(let i in box) {
        if(box[i].innerHTML == player){
           data.push((+(box[i].getAttribute('pos'))))
        }
    }

    if(checkWin(data)) {
        let winer = document.querySelector('.winer')
        winer.innerHTML = "Player " + player + " won!"
        document.querySelector('.bar').classList.add('green')
        Array.from(box).forEach(elem => {
            if(elem.innerHTML == player){
                elem.style.color = 'green'
            }
        })
    } else {
        let draw = true
        for(let i in box) {
            if(box[i].innerHTML == '') 
            draw =false
        }
        if(draw) {
            let winer = document.querySelector('.winer')
            document.querySelector('.bar').classList.add('orange')
            winer.innerHTML = "It's a draw!"
        }
    }
    player = player == "X" ? "O" : "X"
}
 
function checkWin(data) {
    for(let i in winIndex) {
        let win = true
        for(let j in winIndex[i]) {
            let id = winIndex[i][j]
            let ind = data.indexOf(id)
            if(ind == -1) {
                win = false
            }
        }
        if(win) 
        return true

    }
}

function restart() {
    location.reload()
}
