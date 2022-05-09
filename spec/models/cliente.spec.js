const Cliente = require('../../models/Cliente');

describe('clientes', () => {
    beforeEach(async () => {
    });

    it('Retorna um cliente', () => {
        let cliente = Cliente.primeiro();
        expect(cliente.id).not.toBeUndefined();
        expect(cliente.name).not.toBeUndefined();
        expect(cliente.email).not.toBeUndefined();
    });

    it('Retorna um cliente upper', () => {
        let cliente = Cliente.primeiro();
        expect(cliente.nameUpperCase()).toEqual("FULANO");
    });

    it('Retorna todos', () => {
        let clientes = Cliente.todos();
        expect(clientes.length).toEqual(10);
    });

});