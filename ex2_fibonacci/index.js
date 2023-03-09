const fibonacci = function(num) {
    let fibonacciNumbers = [1]
    let fibonacciNumber = 1
    let sumFibonacci = 0
    while(true){
        let lastNum = fibonacciNumber
        fibonacciNumber += sumFibonacci
        fibonacciNumbers.push(fibonacciNumber)
        sumFibonacci = lastNum
        if(fibonacciNumbers.length >= num){
            console.log(fibonacciNumbers)
            console.log(`Seu numero é ${fibonacciNumbers[num - 1]}`)
            break
        }   
    }
};
fibonacci(2) //Procura o numero nessa posição