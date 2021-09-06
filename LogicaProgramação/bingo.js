function gerarNumeroAleatorio0a100(){
  return Math.ceil(100*Math.random());
}

function gerarCartela(){


  let cartela = [];

 for(i= 0; i < 24; i++){
  let numeroCartelaExiste = true;
  while(numeroCartelaExiste == true ){
   let numeroAleatorio = gerarNumeroAleatorio0a100();
   if(cartela.includes(numeroAleatorio) == true){
     numeroCartelaExiste = true ;
    }else{
      numeroCartelaExiste = false;
      cartela.push(numeroAleatorio);
    }
  }
}


return cartela;

}

console.log("Cartela do Rick", gerarCartela());
console.log("Cartela do Otavio", gerarCartela());
console.log("Cartela do Leonadro", gerarCartela());
console.log("Cartela do Phillippe", gerarCartela());
console.log("Cartela do Lucas", gerarCartela());


function jogarBingo(){
  let numerosSorteados =[];
    
  let intervalo = setInterval(function(){
    let numeroExiste = true;
    while(numeroExiste == true ){
      let numeroAleatorio = gerarNumeroAleatorio0a100();
      if(numerosSorteados.includes(numeroAleatorio)== true){
        numeroExiste = true;
      }else{
        numeroExiste = false;
        numerosSorteados.push (numeroAleatorio);
        console.log(numeroAleatorio);
      }
    }
    
    

    if (numerosSorteados.length >= 5 ){
      console.log("Sorteio Finalizado!");
      clearInterval(intervalo);
    }
    

  },1000);
}
jogarBingo();



