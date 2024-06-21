function verificaRisposta() {
    const risposta = document.getElementById('risposta').value.toLowerCase();
    const result = document.getElementById('result');
    if (risposta === 'il vino bianco') {
<<<<<<< HEAD
       window.location.href = 'regalo.html';
=======
        result.innerHTML = `<p>Bravo! Ecco il tuo regalo: <a href="Regalo_Bof.pdf" target="_blank">Clicca qui per aprire il PDF</a></p>`;
>>>>>>> b890b79489724c5b40b96b2ee16343676471fe80
    } else {
        result.innerHTML = `<p>Risposta sbagliata. Riprova!</p>`;
    }
}
