module.exports = class Cliente {

    constructor() {
        this.id = 0;
        this.name = 'Fulano';
        this.email = 'fulano@email.com';
    }

    nameUpperCase() {
        return this.name.toUpperCase();
    }

    static todos() {
        return [
            new Cliente(),
            new Cliente(),
            new Cliente(),
            new Cliente(),
            new Cliente(),
            new Cliente(),
            new Cliente(),
            new Cliente(),
            new Cliente(),
            new Cliente()
        ]
    }

    static primeiro() {
        return new Cliente();
    }
}