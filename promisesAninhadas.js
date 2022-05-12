function pegarId() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(3);
    }, 2000);
  });
}

function buscarEmail(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("email@email");
    }, 2000);
  });
}

function enviarEmail(corpo, para) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      var deuErro = false;
      console.log("Enviando email...");
      if (!deuErro) {
        resolve({ time: 6, to: "email" }); // promessa resolvida
      } else {
        reject("Erro ao enviar email"); // promessa rejeitada
      }
    }, 2000);
  });
}

// Promises aninhadas --> uma promise dentro da outra para que uma seja executada após a outra
pegarId().then(id => {
    buscarEmail(id).then(email => {
        enviarEmail("Olá", email).then(() => {
            console.log("Email enviado!")
        }
        ).catch(erro => {
            console.log(erro);
        })
    })
})

// OBS: Promises aninhadas são muito úteis para fazer requisições assíncronas, porém quando se tem muitas primises aninhadas, o código fica muito confuso.