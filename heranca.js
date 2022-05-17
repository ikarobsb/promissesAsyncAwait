class Animal {
    constructor(nome, idade, preco){
        this.nome = nome;
        this.idade = idade;
        this.preco = preco;
    }

    ExibirDados(){
        return `${this.nome} tem ${this.idade} ano(s) e custa R$${this.preco}`;
    }
}

// CLasse filha de animal

class Cachorro extends Animal {
    
    constructor(nome, idade, preco, raca, peso){
        super(nome, idade, preco);
        this.raca = raca;
        this.peso = peso;
    }
    
    Latir(){
        console.log('AU! AU! AU!');
    }
    ExibirDados(){
        super.ExibirDados(); // Pegando o conteudo da classe pai
        return `${this.nome} é um ${this.raca} pesando ${this.peso}`;
    }
}




class Pato extends Animal {
    Quack(){
        console.log('QUACK QUACK QUACK');
}
}

var dog = new Cachorro('Rex', 2, 100, 'Pug', '10kg');
console.log(dog.ExibirDados());
dog.Latir();

var duck = new Pato('Donald', 1, 10);
console.log(duck.ExibirDados());
duck.Quack();