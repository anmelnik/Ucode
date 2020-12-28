let menu = document.querySelector('.wramp-menu')

let myMap = new Map()
let salads = new Map()
let dishes = new Map()
let deserts = new Map()
let drinks = new Map()

salads.set('greek salads', 5.99)
salads.set('caesar salads', 7.99)

dishes.set('Margherita Pizza', 12.50)
dishes.set('Tomato Soup', 6.99)
dishes.set('Burger', 10.00)

deserts.set('Cheesecake', 4.99)
deserts.set('Chocolate Ice-Cream', 2.50)
deserts.set('Fruit Salad', 3.99)

drinks.set('Lemonade', 3.20)
drinks.set('Green Tea', 1.50)
drinks.set('Coffee', 1.99)

myMap.set('Salads', salads)
myMap.set('Main Dishes', dishes)
myMap.set('Deserts', deserts)
myMap.set('Drinks', drinks)

console.log(myMap)

myMap.forEach(function(value, key) {
    menu.insertAdjacentHTML('beforeend', `<br><div class="a">${key}</div>`)
    value.forEach(function(value1, key1) {
        menu.insertAdjacentHTML('beforeend', `<div id="f"><span>${key1}</span> $ ${value1}</div>`)
    })
}) 