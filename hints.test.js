const getHintByNumber = require('./hints');

const mockedDictionary = ['a', 'aa', 'bb', 'add'];

test('number 2 to be a', () => {
  expect(getHintByNumber('2', mockedDictionary)).toContain('a');
});

test('number 22 to be aa-bb', () => {
  expect(getHintByNumber('22', mockedDictionary)).toContain('aa', 'bb');
});

test('number 233 to be add', () => {
  expect(getHintByNumber('233', mockedDictionary)).toContain('add');
});

test('number 7 to empty', () => {
  expect(getHintByNumber('4', mockedDictionary)).toEqual([]);
});
