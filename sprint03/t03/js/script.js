const obj= {
    words: 'newspapers newspapers  books magazines newspapers'
};

function addWords(obj, wrds) {
    obj.words = obj.words.replace(/\s+/g, ' ').trim()
    obj.words = obj.words + " " + wrds.trim()
    obj.words = Array.from(new Set(obj.words.split(' '))).toString()
    obj.words = obj.words.replace(/,/g, ' ')
}

function removeWords(obj, wrds) {
    obj.words = obj.words.replace(/\s+/g, ' ').trim()
    obj.words = Array.from(new Set(obj.words.split(' '))).toString()
    obj.words = obj.words.replace(/,/g, ' ')
    wrds = wrds.split(" ").filter(Boolean)
    wrds.map(function(x) {
        obj.words = obj.words.replace(x, "").trim()
    })
}

function changeWords(obj, oldWrds, newWrds) {
    removeWords(obj, oldWrds)
    addWords(obj, newWrds)
    obj.words = obj.words.trim();
}

console.log(obj); // {words: "newspapers newspapers  books magazines"}
addWords(obj, 'radio   newspapers');
console.log(obj); // {words: "newspapers books magazines radio"}

removeWords(obj, 'newspapers  radio');
console.log(obj); // {words: "books magazines"}

changeWords(obj, 'books radio  magazines', 'tv internet');
console.log(obj); // {words: "tv internet"}



