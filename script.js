
let attempts = 0;
const solution = 'il vino bianco';
const hints = [
    '_ _ _ _ _ _ _ _ _ _ _ _', // 0 lettere
    '_ _ v _ _ _ _ _ _ _ _ _', // 1 lettera
    '_ _ v i _ _ _ _ _ _ _ _', // 2 lettere
    '_ _ v i _ _ b _ _ _ _ _', // 3 lettere
    '_ _ v i _ _ b _ _ _ _ o', // 4 lettere
    '_ l v i _ _ b _ _ _ _ o', // 5 lettere
    '_ l v i _ o b _ _ _ _ o', // 6 lettere
    '_ l v i _ o b _ a _ _ o', // 7 lettere
    'i l v i _ o b _ a _ _ o', // 8 lettere
    'i l v i _ o b _ a n _ o', // 9 lettere
    'i l v i _ o b _ a n c o', // 10 lettere
	'i l v i n o b _ a n c o', // 11 lettere
    'i l v i n o b i a n c o'  // 12 lettere (soluzione completa)
];

function verificaRisposta() {
    const risposta = document.getElementById('risposta').value.toLowerCase().trim();
    const result = document.getElementById('result');
    
    if (risposta === solution) {
        result.innerHTML = `<p>Bravo BOF! Ti sei guadagnato un regalo: <a href="Regalo_Bof.pdf" target="_blank">Clicca qui per aprire il PDF</a></p>`;
    } else {
        if (attempts < hints.length - 2) {
            attempts++;
			result.innerHTML = `<p>"${hints[attempts]}"</p>`;
			result.innerHTML += `<p>Risposta sbagliata. Riprova!</p>`;
        }
		else{
			attempts++;
			result.innerHTML = `<p>Sei imbarazzante, era "${hints[attempts]}". Tieni il tuo regalo: <a href="Regalo_Bof.pdf" target="_blank">Clicca qui per aprire il PDF</a></p>`;
		}
        
    }
}
