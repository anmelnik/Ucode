let heroes = ["Captain America", "Hulk", "Thor", "Iron Man", "Spider-Man"]

function firstElements(arr, n) {
    let aar1 = []
    if (n <= arr.length) {
        for (let i = 0; i < n; i++) {
            aar1.push(arr[i])
        } 
    } else {
        aar1 = [...arr]
    }
    return aar1

}
console.log(firstElements(heroes, -1)) 
