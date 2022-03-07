const sum = require("./sum");

describe("Primeiro requisito", () => {
 
    it('Verifica se a função existe', () => {
        expect(typeof sum).toBe("function");
    });

    it('Verifica a soma de a e b', () => {
        expect(sum(4, 5)).toBe(9);
    })

    it('Verifica a soma de a e b', () => {
        expect(sum(0, 0)).toBe(0);
    })

    it('Verifica se é retornado erro quando os valores são 4 e "5"', () => {
        expect(() => {sum(4, '5')}).toThrow();
    })

    it('Verifica se é retornado "parameters must be numbers" como erro', () => {
        expect(() => {sum(4, '5')}).toThrowError(new Error('parameters must be numbers'));
    })
});

