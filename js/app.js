function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`); // inicialmente estou encontrando cada jogo que existe pelo elemento de id. Ele que irá diferenciar o jogo que estou selecionando; Coloco assim para que uma função atenda todos os jogos. 
    let imagem = gameClicado.querySelector('.dashboard__item__img'); // em seguida, vou selecionar todos os elementos que mudam ao eu alugar ou ter um jogo disponível, que são a imagem (fica opaca ou normal);
    let botao = gameClicado.querySelector('.dashboard__item__button'); // o botão que irá alterar entre "alugar" e "devolver"

    if (imagem.classList.contains('dashboard__item__img--rented')){//aqui eu verifico se dentro das classes existentes dentro da div imagem, se existe a classe que identifica que o jogo está alugado.
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
    }
}