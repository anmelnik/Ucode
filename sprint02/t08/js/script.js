let i = prompt();
let convert = Number(i);

if (convert == 1)
    alert(convert * 2 / "a");
else if (convert == 2 )
    alert((convert - convert) / 0);
else if (convert == 3)
    alert(0 * Infinity)
else if (convert == 4)
    alert(isFinite(convert * 40000000))
else alert("Wrong input")