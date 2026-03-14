async function vetor(vetorA) {
    let vetorLenght = vetorA.length
    for (let i = 0; i < vetorLenght; i++) {
    let b = vetorA[i] * vetorA[i]
    console.log("o quadrado do " + (i + 1) + "° " + b)
}
} //prefiro array :v
export {vetor}