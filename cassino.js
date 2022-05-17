class Dado {
    constructor(faces) {
        this.faces = faces;
    }

    Rolar() {
        console.log(`Resultado do dado de ${this.faces} faces: ${this.GetRandomIntInclusive(1, this.faces)}`);
    }

    GetRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

}

var D6 = new Dado(6);
D6.Rolar();

var D20 = new Dado(20);
D20.Rolar();

var D100 = new Dado(100);
D100.Rolar();

var D1000 = new Dado(1000);
D1000.Rolar();

