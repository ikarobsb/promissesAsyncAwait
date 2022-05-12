// Forma mais primordial da programação assíncrona
// Callbacks são funções que são executadas quando uma função assíncrona é terminada.

// setTimeout() - função que executa uma função após um determinado tempo. Será utilizado para simulações de delay.

function enviarEmail(corpo, para, callback) {
    setTimeout(() => {
        console.log(`
        Para: ${para}
        ---------------------
        ${corpo}
        ---------------------
        De: Íkaro
        `
        );

        var deuErro = false;

        if (deuErro) {
            callback(new Error('Não foi possível enviar o email'));

        } else {
            callback(null, 'Email enviado com sucesso');
        }
}, 5000);
}

console.log('Iniciando...');
enviarEmail('Olá, seja bem vindo', 'email.com', (erro) => {
    console.log('Callback executado');
    if (erro) {
        console.log(erro.message);
    } else {
        console.log('Email enviado com sucesso');
    }  
})
console.log('Aguarde uns instantes...');



