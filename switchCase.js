
async function switchCase(idade1, idade2, idade3) {

let idades = [idade1, idade2, idade3]
let i = 0
let menorDeIdade = 0
let adolescente = 0
let adulto = 0
let velho = 0
let Idoso = 0

while (i <= 9) {
    idade()
    i += 1
}
function idade (a) {
    switch (true) {
    case idades[i] <= 15: menorDeIdade += 1
    break;
    case idades[i] <= 30: adolescente += 1
    break;
    case idades[i] <= 45: adulto += 1
                   break;
    case idades[i] <= 60: velho += 1
                   break;
    case idades[i] >= 61: Idoso += 1
                   break;
   }
}

let menores = (menorDeIdade * 100 / 10)
let adolescentes = (adolescente * 100 / 10)
let adultos = (adulto * 100 / 10)
let velhos = (velho * 100 / 10)
let idosos = (Idoso * 100 / 10)

console.log("tem " + menorDeIdade + " menores de idade, " +
    adolescente + " adolescentes, " + adulto + " adultos, " + velho +
    " velhos e " + Idoso + " idosos"  
)
console.log(menores + "% são menores de idade",
    adolescentes + "% são adolescentes",
    adultos + "% são adultos",
    velhos + "% são velhos",
    idosos + "% são idosos",
)
}
export {switchCase}