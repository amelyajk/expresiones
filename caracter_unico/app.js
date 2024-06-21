//1
//FGDGH
//let texto = "£€$¥₹₦₱"
//let expresion = /\p{Sc}/gu;
//console.log(texto.match(expresion))//

//5
//FGDGH
//let texto = "hola12345yosoty"
//let expresion = /[\p{L}\p{N}]/gu;
//console.log(texto.match(expresion))//

let texto = "ΓειασαςΑλφάβητοΕλληνιabcABC"
let expresion = /[\p{L}\p{Lu}\p{Ll}]/gu;
console.log(texto.match(expresion))//

//[\p{L}\p{N}]
///\p{L}|\p{N}/gu