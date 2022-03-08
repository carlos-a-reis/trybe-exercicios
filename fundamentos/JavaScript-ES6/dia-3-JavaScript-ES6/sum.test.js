const {sum, myRemove, myFizzBuzz, encode, decode, techList, hydrate, searchEmployee} = require("./sum");

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

//requisito 3

describe("Terceiro requisito", () => {

    it('Verifica se o parametro 15 retorna fizzbuzz', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
    });

    it('Verifica se o parametro 9 retorna fizz', () => {
        expect(myFizzBuzz(9)).toBe('fizz');
    });

    it('Verifica se o parametro 10 retorna buzz', () => {
        expect(myFizzBuzz(10)).toBe('buzz');
    });

    it('Verifica se o parametro 7 retorna 7', () => {
        expect(myFizzBuzz(7)).toBe(7);
    });

    it('Verifica se o parametro "2" retorna false', () => {
        expect(myFizzBuzz('2')).toBe(false);
    });
});

//requisito 4

describe("Quarto requisito", () => {

    it('Verifica se encode é uma função', () => {
        expect(typeof encode).toBe('function');
    });

    it('Verifica se decode é uma função', () => {
        expect(typeof decode).toBe('function');
    });

    it('Verifica se encode coverte a, e, i, o, u em 1, 2, 3, 4, 5', () => {
        expect(encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5');
    });

    it('Verifica se decode coverte 1, 2, 3, 4, 5 em a, e, i, o, u', () => {
        expect(decode('1, 2, 3, 4, 5')).toBe('a, e, i, o, u');
    });

    it('Verifica se encode não coverte b, c, d, f, g, h, j, k, l, m, n, p, q, r, s, t, v, x, w, y, z', () => {
        expect(encode('b, c, d, f, g, h, j, k, l, m, n, p, q, r, s, t, v, x, w, y, z')).toBe('b, c, d, f, g, h, j, k, l, m, n, p, q, r, s, t, v, x, w, y, z');
    });

    it('Verifica se a string retornada tem o mesmo numero de caracteres da string passada', () => {
        const stringTest = 'abacaxi';
        expect(stringTest.length).toBe(encode(stringTest).length);
    });
});

//requisito 5

describe('Quinto requisito', () => {
    it('Testa se a função techList é definida', () => {
      expect(techList).toBeDefined();
    });
    it('Testa se techList é uma função', () => {
      expect(typeof techList).toBe('function');
    });
    it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
      expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
        {
          tech: 'CSS',
          name: 'Lucas'
        },
        {
          tech: 'HTML',
          name: 'Lucas'
        },
        {
          tech: 'JavaScript',
          name: 'Lucas'
        },
        {
          tech: 'Jest',
          name: 'Lucas'
        },
        {
          tech: 'React',
          name: 'Lucas'
        }
      ]);
    });
    it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
      expect(techList([], 'Lucas')).toBe('Vazio!');
    });
  });

  //requisito 6

  describe('Sexto requisito', () => {
    it('Testa se a função hydrate é definida', () => {
      expect(hydrate).toBeDefined();
    });
    it('Testa se hydrate é uma função', () => {
      expect(typeof hydrate).toBe('function');
    });
    it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
      expect(hydrate('1 cerveja')).toBe('1 copo de água');
      expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
      expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
      expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
      expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
    });
  });

  //requisito bônus

  describe("Requisito bônus", () => {

    it('Verifica se a função searchEmployee existe', () => {
        expect(typeof searchEmployee).toBe('function');
    });

    it('Verifica se passando a id 8579-6 e a info firstName o retorno é "Ana"', () => {
        expect(searchEmployee('8579-6', 'firstName')).toBe('Ana');
    });

    it('Verifica se passando a id 4456-4 e a info lastName o retorno é "Zuckerberg"', () => {
        expect(searchEmployee('4456-4', 'lastName')).toBe('Zuckerberg');
    });

    it('Verifica se passando a id 4678-2 e a info specialities o retorno é ["Backend"]', () => {
        expect(searchEmployee('4678-2', 'specialities')).toEqual(['Backend']);
    });

    it('Verifica se passando um id que não consta no quadro de funcionarios é retornado um erro', () => {
        expect(() => {searchEmployee('4448-2', 'specialities')}).toThrow()
    });

    it('Verifica se passando um id que não consta no quadro de funcionarios o erro retornado é "ID não identificada"', () => {
        expect(() => {searchEmployee('4448-2', 'specialities')}).toThrowError('ID não identificada');
    });

    it('Verifica se passando uma info que não existe é retornado um erro', () => {
        expect(() => {searchEmployee('8579-6', 'age')}).toThrow()
    });

    it('Verifica se passando uma info que não existe o erro retornado é "Informação indisponível"', () => {
        expect(() => {searchEmployee('8579-6', 'age')}).toThrowError('Informação indisponível');
    });
  });