function solver(a, b, c, d, e) {
    if (!a || !b || !c || !d || !e){
        return ("Wrong input");
    } else if (typeof(a) !=="number" || typeof(b) !== "number" || typeof(c) !== "number" || typeof(d) !== "number" || typeof(e) !== "number") {
        return("Wrong input")
    } else {
        return (Math.pow(a, 2) - (5 * b * c) + (d / 3) + e).toFixed(2)
    }
}
// alert(solver(40, -9, 0.5, 7, 100));
// alert(solver(40, "doesn't look like a number", 0.5, 7, 100));
// alert(solver(40, -9, 0.5, 7));


