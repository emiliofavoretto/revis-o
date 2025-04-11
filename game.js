
// vida dos pokemons
let pikachuvida = 80;
let charmandervida = 80;

// rodadas da batalha

let rodada = 1;

// ataque dos pokemos

let ataquepikachu = 0;
let ataquecharmander = 0;

// enquanto tiver energia a luta contnua

while (pikachuvida > 0 && charmandervida > 0){
    console.log(" round ", rodada);

//sistema de ataque com valor minimo e maximo

    ataquepikachu = Math.floor(Math.random() * 25);
    ataquecharmander = Math.floor(Math.random() * 22);

//  sistema de ataque 

    pikachuvida = pikachuvida - ataquecharmander
    charmandervida = charmandervida - ataquepikachu

// ataque 

    console.log("⚡ pikachu usou Choque do Trovão ", ataquepikachu, " e causou ")
    console.log("🔥 Charmander usou Chama Ardente", ataquecharmander, " e causou" )

// informações da vida

    console.log(" ❤️ Energia do Pikachu ", pikachuvida)
    console.log(" 🔥 Energia do Charmander ", charmandervida)
    console.log("------------------------------------")

// proximo round

rodada++
}

// calculando os resultados de ataque aleatorio

if (pikachuvida > charmandervida ){
    console.log("Pikachu venceu a batalha com um trovão final!")
}else if (charmandervida > pikachuvida){
    console.log("charmader venceu a batalha com chama ardente")
}else if (pikachuvida < 0 && charmandervida < 0){
    console.log("empate")
}