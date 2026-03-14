function operadorLogico(primeiro, segundo, terceiro) {
    if (primeiro < segundo && primeiro < terceiro) {
        console.log('o primeiro é o menor')
    } else if (segundo < primeiro && segundo < terceiro) {
        console.log('o segundo é o menor')
    } else if (terceiro < primeiro && terceiro < segundo) {
        console.log('o terceiro é o menor')
    } else {console.log("erro")}
}
export {operadorLogico}