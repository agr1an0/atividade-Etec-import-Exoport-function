function se(altura, peso) { 
    console.log(peso, altura)   
let imc = (peso / (altura * altura))
console.log(imc)

if (imc< 18.5) {
    console.log ("Seu imc é " + imc + " Excesso de magressa")
} else if (imc < 25) {
        console.log ("Seu imc é " + imc + " Peso normal")
    }  else if (imc < 30) {
            console.log ("Seu imc é " + imc + " Excesso de peso")
        } else if (imc<35) {
                console.log ("Seu imc é " + imc + " Obesidade (grau 1)")
            } else if (imc <= 40) {
                    console.log ("Seu imc é " + imc + " Obesidade grau 2")
                } else {
                    console.log ("Seu imc é " + imc + " Obesidade grau 3")
                }
            }
export {se}