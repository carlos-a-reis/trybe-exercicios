const {sum, myRemove} = require("./sum");

//requisito 1

describe("Primeiro requisito", () => {
 
    it('Verifica se a função sum existe', () => {
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

//requisito 2

describe("Segundo requisito", () => {

    it('Verifica se a função myRemove existe', () => {
        expect(typeof myRemove).toBe("function");
    })

    it('Verifica se os parametros "[1, 2, 3, 4]" e "3" retorna o array "[1, 2, 4]"', () => {
        const arrayResultado = [1, 2, 4];
        expect(myRemove([1, 2, 3, 4], 3)).toEqual(arrayResultado);
    })

    it('Verifica se os parametros "[1, 2, 3, 4]" e "3" não retorna o array "[1, 2, 3, 4]"', () => {
        const arrayResultado = [1, 2, 3, 4];
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual(arrayResultado);
    })

    it('Verifica se os parametros "[1, 2, 3, 4]" e "5" retorna o array "[1, 2, 3, 4]"', () => {
        const arrayResultado = [1, 2, 3, 4];
        expect(myRemove([1, 2, 3, 4], 5)).toEqual(arrayResultado);
    })
});