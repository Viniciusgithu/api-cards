/* Endereço da API: https://www.deckofcardsapi.com/ */


document.getElementById('tirar-carta').addEventListener('click', ()=>{
  tirarUmaCartaDoBaralho()
})

async function criarBaralhoEmbaralhado(){
  const url = "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
  const resposta = await fetch(url) /* O fecth retorna uma promises*/
  return await resposta.json() /* o json também retorna uma promises*/

}

async function tirarUmaCarta(deck){
  const url = `https://www.deckofcardsapi.com/api/deck/${deck}/draw/?count=1`
  const resposta = await fetch(url)
  return await resposta.json()
}

async function tirarUmaCartaDoBaralho(){
  const baralho = await criarBaralhoEmbaralhado()
  const carta = await tirarUmaCarta(baralho.deck_id)
  const imagemCarta = carta.cards[0].image
  document.getElementById('carta').src = imagemCarta
}

tirarUmaCartaDoBaralho()