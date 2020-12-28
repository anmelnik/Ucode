class Human {
    constructor(props) {
        this.firstName = props.firstName;
        this.lastName = props.lastName;
        this.gender = props.gender;
        this.age = props.age;
        this.caloriesand  = props.caloriesand ;
        this.img = props.img;
    }
    sleepFor() {
        document.querySelector('#text').innerHTML = "I'm sleeping"
    }
    feed() {
        document.querySelector('#text').innerHTML = "Nom nom nom"
    }
}

class Superhero extends Human{
    fly() {
        document.querySelector('#text').innerHTML = `I'm flying`
        setTimeout(()=> {
        document.querySelector('#text').innerHTML = "I'm human"
        }, 2000)
    }
    fightWithEvil () {
        document.querySelector('#text').innerHTML ="Khhhh-chh... Bang-g-g-g... Evil is defeated!"
    }
}

let human = new Human({
    firstName: 'Tom',
    lastName: "Hollan",
    gender: "man",
    age: 25,
    caloriesand:0,
    img: 'assets/images/human.jpg'
    })

let superhero = new Superhero(human)

let createText = `<div class="wramp_conteiner">
<span id="text">"I'm human"</span></div>
<img src='assets/images/human.jpg'>
<div class="description">Hello, my name ${human.firstName} ${human.lastName}. \
<br> ${human.caloriesand} calories.</div>
<div class="wramp_content">
<button id="feed", onclick="feedTom()">Feed</button><br>
<button id="btnSuper", onclick="intoSuper()">Into superhero</button><br>
<button id="btnWake", onclick="wakeUp()">Wake up</button><br>
<button id="btnAsleep", onclick="asleep()">To fall asleep</button><br>
</div>`

document.querySelector('.wramp').insertAdjacentHTML('afterbegin', createText)

setInterval(count, 5000)

function count() {
    if (human.caloriesand > 0) {
        human.caloriesand -=200
        document.querySelector('.description').innerHTML = `Hello, my name ${human.firstName} ${human.lastName}. 
        <br> ${human.caloriesand} calories.`
    }
    if(human.caloriesand < 500) {
        document.querySelector('#text').innerHTML = "I'm still hungry"}
}

function feedTom() {
    document.querySelector('#text').innerHTML = ""
    superhero.feed()
    if(human.caloriesand < 500) {
        document.querySelector('#text').innerHTML = "I'm still hungry"
        setTimeout(() => {
            human.caloriesand += 200
            document.querySelector('.description').innerHTML = `Hello, my name ${human.firstName} ${human.lastName}. 
            <br> ${human.caloriesand} calories.`
    
        }, 1000)
    } else {
        document.querySelector('#text').innerHTML = "I am not hungry" 
    }
    document.querySelector('img').src = 'assets/images/eat.jpg'
}

function intoSuper() {
    document.querySelector('#text').innerHTML = ""
    document.querySelector('#text').innerHTML = "Not enough calories";
    if(human.caloriesand > 500) {
        document.querySelector('#text').innerHTML = "",
        document.querySelector('#text').innerHTML = "I'm Spider-Man",
        document.querySelector('img').src = 'assets/images/Spider.jpg',
        document.querySelector('.wramp_content').insertAdjacentHTML('beforeend', 
    `<button id="btnFly", onclick="flySuperhero()">Fly</button>
    <button id="defeat", onclick="defeat()">Defeat the villain</button>` 
    )}
}

function wakeUp() {
    document.querySelector('#text').innerHTML = ""
    document.querySelector('#text').innerHTML = "Good morning :)"
    document.querySelector('img').src = 'assets/images/morning.jpg'
}

function asleep() {
    document.querySelector('#text').innerHTML = ""
    setTimeout(() => {
        
    })
    superhero.sleepFor()
    document.querySelector('img').src = 'assets/images/sleep.jpeg'
}

function flySuperhero() {
    document.querySelector('#text').innerHTML = ""
    superhero.fly()
    document.querySelector('img').src = 'assets/images/fly.jpeg'
}

function defeat() {
    document.querySelector('#text').innerHTML = " "
    superhero.fightWithEvil()
    document.querySelector('img').src = 'assets/images/victory.jpeg'
}

