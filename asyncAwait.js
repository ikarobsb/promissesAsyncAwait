// Async Await é uma forma diferente de se trabalhar com promises em JS.
// Mais utilizado quando se tem que receber dados de um BD.

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

function pegarUsuarios() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {}, 3000)

    resolve([
      {
        name: "Diego",
        lang: "JavaScript",
      },
      {
        name: "Robson",
        lang: "Python",
      },
      {
        name: "Daniel",
        lang: "Java",
      },
    ]);
  });
}

async function principal(){
    var usuarios = await pegarUsuarios(); // await é uma palavra reservada que faz com que a função seja executada de forma síncrona, ou seja, só vai partir para a próxima linha, qdo a anterior estiver concluida
    console.log(usuarios);
    console.log("Fim");
}

principal();





