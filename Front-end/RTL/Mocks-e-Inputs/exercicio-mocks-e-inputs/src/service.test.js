const service = require('./service');
let { randomNumber, stringToUpperCase, stringFristLetter, stringsConcatenate } = service;

const string1 = 'Abacaxi';
const string2 = 'kiwi';
const string3 = 'banana';

describe('Testa a função de numero aleatorio', () => {
  test('Testa a chamada da função e seu retorno', () => {
    randomNumber = jest.fn().mockReturnValue(10);
    randomNumber();

    expect(randomNumber).toBeCalled();
    expect(randomNumber()).toBe(10);
    expect(randomNumber).toBeCalledTimes(2);
  });
});

describe('Testa a função alterada', () => {
  test('Testa a chamada da função de divisão e seu retorno', () => {
    randomNumber = jest.fn().mockImplementationOnce((a,b) => a/b);

    expect(randomNumber(4,2)).toBe(2);
    expect(randomNumber).toBeCalled();
    expect(randomNumber).toHaveBeenCalledWith(4,2);
    expect(randomNumber()).toBe(undefined);
    expect(randomNumber).toBeCalledTimes(2);
  });
});

describe('Testa a função alterada com 3 parametros', () => {
  test('Testa a chamada da função de multiplicação e seu retorno', () => {
    randomNumber = jest.fn().mockImplementation((a,b,c) => a*b*c);

    expect(randomNumber(4,2,3)).toBe(24);
    expect(randomNumber).toBeCalled();
    expect(randomNumber).toHaveBeenCalledWith(4,2,3);
    expect(randomNumber).toBeCalledTimes(1);

    randomNumber.mockReset();
    randomNumber = jest.fn().mockImplementation((a) => a*2);
    
    expect(randomNumber(2)).toBe(4);
    expect(randomNumber).toBeCalled();
    expect(randomNumber).toHaveBeenCalledWith(2);
    expect(randomNumber).toBeCalledTimes(1);
  });
});

describe('Testa as 3 funções criada', () => {
  test('Testando as funções', () => {
    stringToUpperCase = jest.fn().mockImplementation((str) => str.toLowerCase());
    stringFristLetter = jest.fn().mockImplementation((str) => str[str.length - 1]);
    stringsConcatenate = jest.fn().mockImplementation((string1, string2, string3) => string1 + string2 + string3);

    expect(stringToUpperCase(string1)).toBe('abacaxi');
    expect(stringToUpperCase).toBeCalled();
    expect(stringToUpperCase).toHaveBeenCalledWith(string1);
    expect(stringToUpperCase).toBeCalledTimes(1);

    expect(stringFristLetter(string1)).toBe('i');
    expect(stringFristLetter).toBeCalled();
    expect(stringFristLetter).toHaveBeenCalledWith(string1);
    expect(stringFristLetter).toBeCalledTimes(1);

    expect(stringsConcatenate(string1, string2, string3)).toBe('Abacaxikiwibanana');
    expect(stringsConcatenate).toBeCalled();
    expect(stringsConcatenate).toHaveBeenCalledWith(string1, string2, string3);
    expect(stringsConcatenate).toBeCalledTimes(1);
  });
});