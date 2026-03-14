async function operadorRelacionado(joaoAlt, pedroAlt) {
let anos = 0

    while  (pedroAlt >= joaoAlt) {
        pedroAlt += 20 //mm
        joaoAlt += 25 //mm
        anos += 1
        if (joaoAlt > pedroAlt) {
            console.log("demoram " + anos + " anos para João ficar " + (joaoAlt - pedroAlt) + "mm maior que pedro ")
        }
    } 
}
export {operadorRelacionado}