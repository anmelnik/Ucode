// let a = ["*", "***", "****", '*****', '******']
// let res = ""

// for (let i = 0; i < a.length; i++) {
//     res += a[i] + "\n"
// }

// alert(res)

let res = ''

for (let i = 0; i < 6; i++) {
    for (let j = 0; j <= i; j++) {
        res += "*"
    }
    res += '\n'
}

alert(res)
    