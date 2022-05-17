// Composição de arquivos é um mecanismo de consrução de classes a partir de outras classes (componentes).

class Leitor{
    Ler(caminho){
        return "Lendo arquivo: " + caminho;
    }
}

class Escritor {
    Escrever(arquivo, conteudo){
        console.log("Escrevendo arquivo: " + arquivo + " com conteudo: " + conteudo);
    }
}

class Criador {
    Criar(nome){
        console.log("Criando arquivo: " + nome);
    }
}

class Destruidor {
    Destruir(nome){
        console.log("Deletando arquivo: " + nome);
    }
}

class ManipuladorDeArquivos {
    constructor(nome) {
        this.arquivo = nome;
        this.leitor = new Leitor();
        this.escritor = new Escritor();
        this.criador = new Criador();
        this.destruidor = new Destruidor();
    }
}

var manipulador = new ManipuladorDeArquivos("arquivo.txt");

manipulador.leitor.Ler("arquivo.txt");
manipulador.escritor.Escrever("arquivo.txt", "Conteudo do arquivo");
manipulador.criador.Criar("arquivo.txt");
manipulador.destruidor.Destruir("arquivo.txt");

// Reutilização de códigos:

class GerenciadorDeUsuarios {
    constructor() {
        this.usuarios = [];
        this.criador = new Criador();
        this.escritor = new Escritor();
    }

    SalvarListaDeUsuarios(lista) {
        this.criador.Criar("usuarios.txt");
        this.escritor.Escrever("usuarios.txt", lista);
    }
}

var usuarios = new GerenciadorDeUsuarios();

usuarios.SalvarListaDeUsuarios("[{'nome': 'João', 'idade': 20}, {'nome': 'Maria', 'idade': 25}]");