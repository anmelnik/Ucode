let notification = document.querySelector('#notification')
notification.innerHTML = "Soting by __, order: __"

const superhero = [
    { name: 'Black Panther', strength: 66, age: 53 },
    { name: 'Capitan America', strength: 79, age: 137 },
    { name: 'Capitan Marvel', strength: 97, age: 26 },
    { name: 'Hulk', strength: 80, age: 49 },
    { name: 'Spider-Man', strength: 78, age: 16 },
    { name: 'Thanos', strength: 78, age: 1000 },
    { name: 'Thor', strength: 95, age: 1000 },
    { name: 'Yon-Rogg', strength: 73, age: 52 },
    { name: 'Iron Man', strength: 88, age: 48 },
]

let placeholder = document.querySelector('#placeholder')
let tabel = document.createElement('table')
let arr = ["Name", "Strength", "Age"]
let checkSort = false

createTabel(placeholder, 3, 10)

function createTabel(parent, cols, rows) {
    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr')
        for (let j = 0; j < cols; j++) {
            let td = document.createElement('td')
            if (i == 0) {
                td.innerText = arr[j]
            } else {
                if (j == 0) {
                    td.innerText = superhero[i - 1].name
                }
                if (j == 1) {
                    td.innerText = superhero[i - 1].strength
                }
                if (j == 2) {
                    td.innerText = superhero[i - 1].age
                }
            }
            tr.appendChild(td)
        }
        tabel.appendChild(tr)
    }
    parent.appendChild(tabel)
}

let reg = new Intl.Collator('en-EN')

function test(event) {
    if (event.target.innerHTML === "Name") {
        if (!checkSort) {
            superhero.sort((a, b) => reg.compare(a.name, b.name))
            notification.innerHTML = "Sorting by Name, order: ASC"
            checkSort = true
        } else {
            superhero.sort((a, b) => reg.compare(b.name, a.name))
            notification.innerHTML = "Sorting by Name, order: DESC"
            checkSort = false
        }
    } else if (event.target.innerHTML === "Strength") {
        if (!checkSort) {
            superhero.sort((a, b) => (a.strength - b.strength))
            notification.innerHTML = "Sorting by Strength, order: ASC"
            checkSort = true
        } else {
            superhero.sort((a, b) => (b.strength - a.strength))
            notification.innerHTML = "Sorting by Strength, order: DESC"

            checkSort = false
        }
    } else if (event.target.innerHTML === "Age") {
        if (!checkSort) {
            superhero.sort((a, b) => (a.age - b.age))
            notification.innerHTML = "Sorting by Age, order: ASC"
            checkSort = true
        } else {
            superhero.sort((a, b) => (b.age - a.age))
            notification.innerHTML = "Sorting by Age, order: DESC"

            checkSort = false
        }
    }
    clearTabel();
}

let x = document.querySelector("tr")

x.addEventListener('click', test)

function clearTabel() {
    let count = 0
    let tdTabel = document.querySelectorAll("td")
    for (let k = 3; tdTabel[k]; k++) {
        if (k % 3 == 0) {
            tdTabel[k].innerHTML = superhero[count].name
            tdTabel[k + 1].innerHTML = superhero[count].strength
            tdTabel[k + 2].innerHTML = superhero[count].age
            count++;
        }
    }
}