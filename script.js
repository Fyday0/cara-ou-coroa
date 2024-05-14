let balance = 100;

function makeChoice(choice) {
    const betInput = document.getElementById('bet');
    const bet = parseInt(betInput.value);
    const resultDiv = document.getElementById('result');
    const balanceDiv = document.getElementById('balance');

    if (isNaN(bet) || bet < 1 || bet > balance) {
        resultDiv.innerHTML = 'Aposta inválida. Tente novamente.';
        return;
    }

    const outcomes = ['cara', 'coroa'];
    const outcome = outcomes[Math.floor(Math.random() * outcomes.length)];

    if (choice === outcome) {
        balance += bet;
        resultDiv.innerHTML = `Você ganhou! O resultado foi ${outcome}.`;
    } else {
        balance -= bet;
        resultDiv.innerHTML = `Você perdeu! O resultado foi ${outcome}.`;
    }

    balanceDiv.innerHTML = `Saldo: ${balance} pontos`;

    if (balance <= 0) {
        resultDiv.innerHTML += '<br>Você ficou sem pontos. O jogo acabou!';
        document.querySelector('.choices').style.display = 'none';
    }
}
