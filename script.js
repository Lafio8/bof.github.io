function verificaRisposta() {
    const risposta = document.getElementById('risposta').value.toLowerCase();
    const result = document.getElementById('result');
    if (risposta === 'il vino bianco') {
        result.innerHTML = `<p>Bravo! Ecco il tuo regalo: <a href="regalo_Bof.pdf" target="_blank">Clicca qui per aprire il PDF</a></p>`;
    } else {
        result.innerHTML = `<p>Risposta sbagliata. Riprova!</p>`;
    }
}