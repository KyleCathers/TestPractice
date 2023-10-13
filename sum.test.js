const sum = require(`./sum`);
const capitalize = require(`./capitalize`);
const reverseString = require(`./reverseString`);
const calculator = require(`./calculator`);
const caesarCipher = require(`./caesarCipher`);
const analyzeArray = require(`./analyzeArray`);

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
});

// capitalize
test('capitalize the word capitalize', () => {
    expect(capitalize('capitalize')).toBe('Capitalize');
});

test('capitalize the word keyboard', () => {
    expect(capitalize('keyboard')).toBe('Keyboard');
});

// reverseString
test('reverse the string bananas', () => {
    expect(reverseString('bananas')).toBe('sananab');
});

test('reverse a string with other characters, 25 pineapples!', () => {
    expect(reverseString('25 pineapples!')).toBe('!selppaenip 52');
});

// calculator
test('Test calculator add', () => {
    expect(calculator().add(5, 12)).toBe(17);
});

test('Test calculator subtract', () => {
    expect(calculator().subtract(3, 4)).toBe(-1);
});

test('Test calculator divide', () => {
    expect(calculator().divide(6, 2)).toBe(3);
});

test('Test calculator multiply', () => {
    expect(calculator().multiply(3, 123124)).toBe(369372);
});

// Caesar Cipher
test('Test Caesar cipher, test forwards', () => {
    expect(caesarCipher('I love bananas', 1)).toBe('J mpwf cbobobt');
});

test('Test Caesar cipher, test backwards', () => {
    expect(caesarCipher('I hate bananas', -1)).toBe('H gzsd azmzmzr');
});

test('Test Caesar cipher, test z-a wrap', () => {
    expect(caesarCipher('Zebras', 1)).toBe('Afcsbt');
});

test('Test Caesar cipher, test punctuation', () => {
    expect(caesarCipher("I don't like punctuation!", 5)).toBe("N its'y qnpj uzshyzfynts!");
});


// analyzearray
test('Test analyzearray #1', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toMatchObject({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
});

test('Test analyzearray #2', () => {
    expect(analyzeArray([4, 16, -100, 124])).toMatchObject({
        average: 11,
        min: -100,
        max: 124,
        length: 4
      });
});