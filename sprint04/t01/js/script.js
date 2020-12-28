let main_contentRendar = document.querySelector('.main_contentRendar')
let favorite = new Map()
class Films {
    constructor(props) {
        this.name = props.name;
        this.date = props.date
        this.actors = props.actors;
        this.description = props.description;
        this.img = props.img
    }
}

let johnwick = {
    name: 'John Wick',
    date: 'May 9, 2019',
    actors: ["Keanu Reeves", 'Halle Berry', 'Ian McShane', 'Laurence Fishburne'],
    description: "In this third installment of the adrenaline-fueled action franchise, super-assassin John Wick returns with a $14 milion price tag on his head and army of bounty-hunting killers on his trail. After kiling a member of the shadowy international assassin's guild, the High Tabel, John Wick is excommunicado, but the world's most ruthless hit men and women await his every turn.",
    img: './assets/images/John_Wick_3.jpg'
}

let Joker = {
    name: 'Joker',
    date: 'October 04, 2019',
    actors: ["Joaquin Phoenix", 'Robert De Niro', 'Zazie Beetz', 'Frances Conroy'],
    description: "During the 1980s, a falied stand-up comedian is drive insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
    img: './assets/images/Joker.jpg'
}

let Avengers = {
    name: 'Avengers: Endgame',
    date: 'April 25, 2019',
    actors: ['Chris Evans', 'Mark Ruffalo', 'Chris Hemsworth', 'Jeremy Renner'],
    description: "The surviving members of the Avengers team and their allies must develop a new plan that will help withstand the ravages of the powerful titan Thanos. After the most ambitious and tragic battle in history, they cannot make a mistake.",
    img: './assets/images/Avengers.jpg'

}

let Inception = {
    name: 'Inception',
    date: 'Jule 22, 2010',
    actors: ["Leonardo DiCaprio", 'Elliot Page', '	Tom Hardy', 'Tom Berenger'],
    description: "Cobb is a talented thief, the best of the best in the dangerous art of extraction: he steals valuable secrets from the depths of the subconscious during sleep, when the human mind is most vulnerable. Cobb's rare abilities made him a valuable player in the betrayal world of industrial espionage, but they also turned him into an eternal fugitive and robbed of everything he ever loved.",
    img: './assets/images/Inception.jpg'
}

let TheDarkKnight = {
    name: 'The Dark Knight',
    date: 'August 14, 2008',
    actors: ["Christian Bale", 'Michael Caine', 'Heath Ledger', 'Gary Oldman'],
    description: "Batman raises the stakes in the war on crime. With the help of Lieutenant Jim Gordon and Attorney Harvey Dent, he intends to clear the streets of the crime that plagues the city. The collaboration proves effective, but they will soon find themselves in the midst of chaos unleashed by an up-and-coming criminal genius known to the terrified townspeople as the Joker.",
    img: "./assets/images/Th_Dark_Knight.jpg"
}

let SpiderMan = {
    name: 'Spider-Man',
    date: 'October 04, 2019',
    actors: ["Tom Holland", 'James Franco', 'Kirsten Dunst', 'Willem Dafoe'],
    description: "Spider-Man has supplemented his powers with technology. Being a brilliant chemist and scientist, Peter has made web-slingers, bracelets that shoot out a sticky webbing, allowing him to swing from building to building and ensnare opponents. He has also developed stingers that shoot powerful energy blasts that can stun foes.In the recent storyline, Spider-Man has been reborn with even stronger abilities. He has the ability to see in the dark, enhanced senses, and can feel the vibrations through his webbing. In addition to this, the new, “Iron Spidey,” suit has enhanced his strength further and gives protection from damage. Recently, however, he has gotten rid of the suit and returned to the classic costume",
    img: "./assets/images/Spider-Man.jpg"
}

function createText(props) {
    return `<div class="main_content">
                <div id="header">
                <h1 id="titleFilm">${props.name}</h1>
                <i class="far fa-heart"></i>
                </div>
                <div id="data">${props.date}</div>
                <div class="actor">
                    <div class="nameActor">${props.actors[0]}</div>
                    <div class="nameActor">${props.actors[1]}</div>
                    <div class="nameActor">${props.actors[2]}</div>
                    <div class="nameActor">${props.actors[3]}</div>
                </div>
                <div class="description">${props.description}</div>
                </div>
                <div class="img">
                <img src=${props.img}>
                </div>`
}
let test = false;
document.querySelector('.list').addEventListener('click', (event) => {
    if (event.target != event.currentTarget) {
        main_contentRendar.innerHTML = ""
        switch (event.target.innerHTML) {
            case 'Joker':
                main_contentRendar.insertAdjacentHTML('afterbegin', createText(new Films(Joker)))
                break;
            case 'John Wick':
                main_contentRendar.insertAdjacentHTML('afterbegin', createText(new Films(johnwick)))
                break;
            case 'Avengers: Endgame':
                main_contentRendar.insertAdjacentHTML('afterbegin', createText(new Films(Avengers)))
                break;
            case 'Inception':
                main_contentRendar.insertAdjacentHTML('afterbegin', createText(new Films(Inception)))
                break;
            case 'The Dark Knight':
                main_contentRendar.insertAdjacentHTML('afterbegin', createText(new Films(TheDarkKnight)))
                break;
            case 'Spider-Man':
                main_contentRendar.insertAdjacentHTML('afterbegin', createText(new Films(SpiderMan)))
                break;
        }
        favorite.forEach( (item) => {
            if (item.children[0].children[0].innerHTML === event.target.innerHTML) {
                document.querySelector('.fa-heart').setAttribute("class", "fas fa-heart")
            }
        })
        document.querySelector('.fa-heart').addEventListener('click', (elem) => {
            let getMovie = elem.target.closest('.main_content').children[0].children[0].innerHTML;
            if (!favorite.has(getMovie)) {
                document.querySelector('.fa-heart').setAttribute("class", "fas fa-heart")
                favorite.set(getMovie, elem.target.closest('.main_content'))
            }
            else {
                document.querySelector('.fa-heart').setAttribute("class", "far fa-heart")
                favorite.delete(getMovie)
            }
        })
    }
    
})

document.querySelector("#btnAll").addEventListener('click', ()=> {
    document.querySelector('.list').innerHTML = ' '
    document.querySelector('.list').insertAdjacentHTML('afterbegin', `<p>John Wick</p>
    <p>Avengers: Endgame</p>
    <p>Inception</p>
    <p>Spider-Man</p>
    <p>Joker</p>
    <p>The Dark Knight</p>`
    )
})

document.querySelector('#btnFavorite').addEventListener('click', ()=> {
    document.querySelector('.list').innerHTML = ''
    favorite.forEach((item)=> {
        document.querySelector('.list').insertAdjacentHTML('afterbegin', `<p>${item.children[0].children[0].innerHTML}</p>`) 
    })
})

