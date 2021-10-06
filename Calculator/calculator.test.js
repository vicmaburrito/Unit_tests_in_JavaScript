const Calculator = require('./calculator');

const calc = new Calculator();

describe('add',() => {
    it('The sum 1+2 should to be equal with 3',() => {
        expect(calc.add(1,2)).toBe(3);
    })
    it('The sum 1+2+3 should to be equal with 6',() => {
        expect(calc.add(1,2,3)).toBe(6);
    })
    it('The sum 1+2+3+4 should to be equal with 10',() => {
        expect(calc.add(1,2,3,4)).toBe(10);
    })
})

describe('subtract',() => {
    it('The subtract 10-5 should to be equal with 5',() => {
        expect(calc.subtract(10,5)).toBe(5);
    })
    it('The subtract 22-11 should to be equal with 11',() => {
        expect(calc.subtract(22-11)).toBe(11);
    })
    it('The subtract 28-7 should to equal with 21',() => {
        expect(calc.subtract(28-7)).toBe(21);
    })
})

describe('multiply',() => {
    it('The multiply 2*2 should to be equal with 2',() => {
        expect(calc.multiply(2,2)).toBe(4);
    })
    it('The multiply 3*3 should to be equal with 9',() => {
        expect(calc.multiply(3,3)).toBe(9);
    })
    it('The multiply 4*4 should to be equal with 30',() => {
        expect(calc.multiply(4,4)).toBe(16);
    })
})

describe('divide',() => {
    it('The division 1/1 should to be equal with 1',() => {
        expect(calc.divide(1,1)).toBe(1);
    })
    it('The division (6/3)/2 should to be equal with 1',() => {
        expect(calc.divide(6,3,2)).toBe(1);
    })
    it('The division 25/5 should to be equal with 5',() => {
        expect(calc.divide(25,5)).toBe(5);
    })
})