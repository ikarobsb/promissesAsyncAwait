// Promises é uma evolução do callback, que é uma função que é executada quando uma promise é resolvida.

function enviarEmail(corpo, para) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      var deuErro = false;
      console.log("Enviando email...");
      if (!deuErro) {
        resolve({time: 6, to: "email"}); // promessa resolvida
      } else {
        reject("Erro ao enviar email"); // promessa rejeitada
      }
    }, 2000);
  });
}

// OBS promisse ou reject só aceitam um parâmetro, não pode ser um array. Para passar várias informações, podemos passar um JSON.

enviarEmail("Olá", "Ikaro")
  .then(({time, to}) => { //desestruturação do objeto JSON
    console.log(`
    time: ${time},
    to: ${to}
    `); // then só é executado quando a promise for resolvida
  })
  .catch((erro) => {
    console.log(erro); // o cacth é executado quando a promise for rejeitada
  });
