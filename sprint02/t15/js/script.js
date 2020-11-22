let beginRange = prompt("Input first range")
let endRange = prompt("Input last range")

function checkDivision(beginRange, endRange) {
    let result = ""
    for (let i = beginRange; i < endRange; i++) {
        if (i % 2 == 0) {
            result += i + ' is even'
            if (i % 3 == 0) {
                result += ', is a multiple of 3'
                if (i % 10 == 0) {
                    result += ', is a multiple of 10'
                }
            } else {
                if (i % 10 == 0) {
                    result += ', is a multiple of 10'
                }
            } 
        } else {
            if (i % 3 == 0) {
                result += i + ' is a multiple of 3'
            } else {
                result += i + ' -'
            }
        }
        result += '\n'
    }
    console.log(result)
}

checkDivision(beginRange, endRange)