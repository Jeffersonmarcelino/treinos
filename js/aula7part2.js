// operador logico do boolean
//......................................................................................

        // essa estrutura verifica se os valores são maiores do que o valor requerido

let nota1 = 90
let nota2 = 70
let nota3 = 80
let nota4 = 100

let passouDeAno = ((nota1 > 60) && (nota2 > 60) && (nota3 > 60) && (nota4 > 60))  
//console.log(" o aluno passou de ano?", passouDeAno)

let nome = "jefferson"
let sobreNome = "silva"

let nomeTodo = ((nome == "jefferson") && (sobreNome == "marcelino")) // base feita com and E (&&)

//console.log("esse é o jefferson marcelino -> ", nomeTodo)

//...........................................................................................................................

            // base feita com ou (||)

let passouNoEnem = false 
let passouNoVestibularProprio = false
let tranferencia = true

let passouNaFaculdade = ( (passouNoEnem == true) || (passouNoVestibularProprio == true) || (tranferencia == true)) 

console.log("entrou na faculdade? ", passouNaFaculdade)

//...................................................................................................

// base feita com NOT, inversão (!)

let passouEmMatematica = true

passouEmMatematica = !passouEmMatematica

console.log("o aluno passou em matematica? ", passouEmMatematica)
