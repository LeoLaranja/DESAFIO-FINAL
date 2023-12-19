let ataque = ""
let type = ""

class Generic {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }
    atacar() {
        console.log(`o ${this.type} atacou usando ${ataque}`)
    }
}

if (type = "mago") {
    ataque = "magia"
} else if (type = "guerreiro") {
    ataque = "espada"
} else if (type = "monge") {
    ataque = "artes marciais"
} else if (type = "ninja") {
    ataque = "shuriken"
}

const mago = new Generic("Gandalf", 1000, "guerreiro");

mago.atacar();
