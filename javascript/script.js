
/*let score = 100
let scoreA = score >= 90 && score <= 100
let scoreB = score >=80 && score <= 89
let scoreC = score >=70 && score <= 79
let scoreD = score >=60 && score <= 69
let scoreF = score < 60 && score >= 0

let scoreFinal;

if(scoreA){
    scoreFinal = "A"

} else if (scoreB) {
    scoreFinal = "B"

}else if (scoreC) {
    scoreFinal = "C"
}
else if (scoreD) {
    scoreFinal = "D"
}
else if (scoreF) {
    scoreFinal = "F"
} else {
    scoreFinal = "Nota inválida"
}

console.log(scoreFinal) */


let family = {
    incomes: [2500, 3200, 250.43, 360.45],
    expenses: [320.34, 128.45, 176.87, 1450.00]
}

function sum(array) {
    let total = 0;

    for(let value of array) {
        total += value
    }

    return total
}

function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses

    const itsOk = total >= 0

    let     balanceText = "negativo"
    if(itsOk) {
        balanceText = "positivo"
    }

    
    console.log(`Seu saldo é ${balanceText}: ${total}`)
}


calculateBalance()

