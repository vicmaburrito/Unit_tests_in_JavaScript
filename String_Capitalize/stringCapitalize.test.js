const { it } = require('@jest/globals')
const capitalize = require('./stringCapitalize')

it('returns "Hello" instead of "hello"', () =>{
    expect(capitalize('hello')).toBe('Hello');
})