const getGreeting = require('./project');
// const getColor = require('./project');


test('can create a basic greeting', () => {
  expect(getGreeting('Sam')).toBe("Hi Sam!");
});

// test('I can receive a color back', () => {
//   expect(getColor('green')).toBe("This is green!")
// });