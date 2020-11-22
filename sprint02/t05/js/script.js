let str1 = "You're catnip to a girl like me. Handsome, dazed,and to die for...";

let str2 = 'Batman: "I tried to save you."'

let str3 = 'Selina Kyle: catwoman"Mmm seemsCatwomanlike everyCatWomanwoman you try to savewindsCatWOMANup dead... or deeply resentful."'

alert(str1 + "\nLength: " + str1.length + "\nCharacter number 2 is: "
 + str1.charAt(2) + "\nTo uppercase " + str1.toUpperCase() + "\nConcatenation in a phrase: " 
 + str1.concat(' - Catwoman') + "\n[Batman Returns]" + str2 + "\n" + str3.replace("CatWOMAN", " "))
