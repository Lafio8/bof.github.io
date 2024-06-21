function verificaRisposta() {
    const risposta = document.getElementById('risposta').value.toLowerCase();
    const result = document.getElementById('result');
    if (risposta === 'il vino bianco') {
       window.location.href = 'regalo.html';
    } else {
        result.innerHTML = `<p>Risposta sbagliata. Riprova!</p>`;
    }
}