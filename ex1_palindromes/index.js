const examples = [
'racecar', //true 
'Racecar!', //true
'Racecar!', //true
'A car, a man, a maraca.', //true
'Animal loots foliated detail of stool lamina.', //true
'ZZZZ car, a man, a maracaz.'] //false

const palindromes = function (string) {
    const word = string.replace(/\!?\.?,?\s?/gm, '').toUpperCase()
   //transforma a frase em um array, ['o','l','á'], em segida inverte o array, pra finalizar join.
    const reverseWord = word.split("").reverse().join('').toUpperCase()
    return word == reverseWord
    
}

//Testando a função
for(test of examples){
    console.log(palindromes(test))
}