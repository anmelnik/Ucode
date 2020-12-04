let notes = document.querySelector("#text2")
let text = document.querySelector("#text1")
let counter = 0

function clicked() {
    if (text.value === "") {
        alert("Wrong input")
    } else {
        let cookieValue = escape(document.myForm.name.value)
        let data = new Date()
        data.setMonth(data.getMonth() + 1)
        data = data.toUTCString()

        notes.value += " --> " + cookieValue + "\n"
        document.cookie = `${counter}name =` + cookieValue + `;expires =` + data
        counter++
    }
}

function deleteAllCookies() {
    let result = confirm("Are yoy sure?")
    if (result == true) {
        notes.value = ""
        text.value = ""
        let cook = document.cookie.split(";")
        for (let i = 0; i < cook.length; i++) {
            let cookie = cook[i]
            let pos = cookie.indexOf("=")
            let name = pos > -1 ? cookie.substr(0, pos) : cookie
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT"
        }
    }
}

