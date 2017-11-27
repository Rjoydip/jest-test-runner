const {
    isObject
} = require("./code");

it('Value is Object', () => {
    expect(isObject({})).toBe(true);
});

it('Value is not Object', () => {
    expect(isObject("")).toBe(false);
});