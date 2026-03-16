import {aritimetico} from "./aritimetico.js";
import {se} from "./se.js";
import {operadorRelacionado} from "./operadorRelacionado.js";
import {operadorLogico} from "./operadorLogico.js";
import {switchCase} from "./switchCase.js";
import {repeticao} from "./repeticao.js";
import {variaveis} from "./variaveis.js";
import {vetor} from "./vetor.js";
//import inquirer from "inquirer";
let entrada = {
    escolha: "", //mude manuelmente aqui se precisar
};
//código se for instalar o inquirer
//let question = inquirer.prompt([ { type: "input", name: "escolha", message: "oi, se você quiser ver uma atividade é só digitar o nome dela (veja o nome pelas pastas ou pelo VScode). Isso também foi passado como uma atividade sobre uso de import e export. pode digitar:"}]); let entrada.escolha = await (question)

if (entrada.escolha) {
    switch (entrada.escolha){
        case "aritimetico": aritimetico(22, 8) //area(base, lado)
            break;
        case "ifElse": se(1.75, 77) //imc(metro, kilos)
            break;
        case "operadorRelacionado": operadorRelacionado(40, 70) //(J, P) Pedro cresce menos que João
            break;
        case "operadorLogico": operadorLogico(6, 2, 9) //(primeiro, segundo, terceiro)
            break;
        case "switchCase": switchCase(17, 6, 80) //idades(idade1, idade2, idade3)
            break;
        case "repeticao": repeticao(15) //sequencia (num) vezes
            break;
        case "variaveis": variaveis(30, 4) //(preço, quantidade)
            break;
        case "vetor": vetor([1,2,3,4,5,6,7,8,9,10,11,12,13,14]) //quadrado de cada posição
                break;
        default: console.log("nome inexistente, confirme e tente denovo")
    } 
}
