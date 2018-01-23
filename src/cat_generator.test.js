let { displayCatName, generateRandomCatName } = require('./cat_generator');

describe('displayCatName', () => {
    test('generates a valid cat name with a valid target', () => {
        const target = {};
        displayCatName(target);
        expect(target.innerHTML).toBeDefined();
        expect(typeof target.innerHTML).toBe('string');
    });

    test('throws error with invalid target', () => {
        expect(displayCatName).toThrow('Missing Display Target!')
    })

})

describe('generateRandomCatName', () => {
    test('generates a valid cat name', () => {
        expect(typeof generateRandomCatName()).toBe('string');
    })
});
