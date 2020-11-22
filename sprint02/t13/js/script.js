let input = prompt()
let text = ""

switch (input) {
    case '1':
        text = "Back to square 1"
        break;
    case '2':
        text = "Goody 2-shoes"
        break;
    case '3':
        text = "Two's company, three's a crowd"
        break;
    case '4':
        text = "Counting sheep"
        break;
    case '5':
        text = "Take five"
        break;
    case '6':
        text = "Counting sheep"
        break;
    case '7':
        text = "Seventh heaven"
        break;
    case '8':
        text = "Behind the eight-ball"
        break;
    case '9':
        text = "Counting sheep"
        break;
    case "10":
        text = "Cheaper by the dozen"
        break;
    default:
        text = "Error input"
}

alert(text)