
// Mensagem de boas vindas
console.log('Bem vindo ao jogo de Blackjack! - Desafio')
// Iniciar uma nova rodada (loop)
   while(confirm('Quer iniciar uma nova rodada ? - Desafio')){
      let cartasUsuario, cartasComputador, pontuacaoUsuario, pontuacaoComputador, novaCompra
   // Cartas Iniciais
   do{
      // variaveis
      cartasUsuario = []
      cartasComputador = []
      pontuacaoUsuario = 0
      pontuacaoComputador = 0
      for(let i =0; i < 2; i++){
         novaCompra = comprarCarta()
         cartasUsuario.push(novaCompra.texto)
         pontuacaoUsuario += novaCompra.valor
      }
      for(let i =0; i < 2; i++){
         novaCompra = comprarCarta()
         cartasComputador.push(novaCompra.texto)
         pontuacaoComputador += novaCompra.valor
      }  
   // Compra novamente se algum jogador tirar dois A
   }while(pontuacaoUsuario === 22 || pontuacaoComputador === 22)

   // Usuário comprando cartas
   // Não pode comprar se a pontuação for maior que 19
   while(pontuacaoUsuario <= 19 && confirm(`Suas cartas são ${cartasUsuario.join(" ")}. A carta revelada do computador é ${cartasComputador[0]}\n`+
                                           `Deseja comprar mais uma carta ?`)){
      novaCompra = comprarCarta()
      cartasUsuario.push(novaCompra.texto)
      pontuacaoUsuario += novaCompra.valor
   }
   // Pontuação do usuário  21
   if(pontuacaoUsuario > 21){
      alert(`Suas cartas são ${cartasUsuario.join(" ")}. Sua pontuação é ${pontuacaoUsuario}.\n`+
            `As cartas do computador são ${cartasComputador.join(" ")}. A pontuação do computador é ${pontuacaoComputador}.\n`+
            `O computador ganhou!`)
   }else{
      // Comprando Cartas (computador)
      while(pontuacaoComputador < pontuacaoUsuario){
         novaCompra = comprarCarta()
         cartasComputador.push(novaCompra.texto)
         pontuacaoComputador += novaCompra.valor
      }
      // Checando o vencedor   
      if(pontuacaoComputador > 21 || pontuacaoUsuario > pontuacaoComputador){
         alert(`Suas cartas são ${cartasUsuario.join(" ")}. Sua pontuação é ${pontuacaoUsuario}.\n`+
               `As cartas do computador são ${cartasComputador.join(" ")}. A pontuação do computador é ${pontuacaoComputador}.\n`+
               `O usuário ganhou!`)
      }else
      if(pontuacaoComputador > pontuacaoUsuario){
         alert(`Suas cartas são ${cartasUsuario.join(" ")}. Sua pontuação é ${pontuacaoUsuario}.\n`+
               `As cartas do computador são ${cartasComputador.join(" ")}. A pontuação do computador é ${pontuacaoComputador}.\n`+
               `O computador ganhou!`)
      }else{
         alert(`Suas cartas são ${cartasUsuario.join(" ")}. Sua pontuação é ${pontuacaoUsuario}.\n`+
               `As cartas do computador são ${cartasComputador.join(" ")}. A pontuação do computador é ${pontuacaoComputador}.\n`+
               `Empate!`)
      } // Fim da checagem , termino do jogo , pergunta se quer jogar novamente!
   } 
} 
