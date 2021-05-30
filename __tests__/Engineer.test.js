const Engineer = require("../lib/Engineer");
const { test, expect } = require("@jest/globals");

test('Creates enginineer object', () => {
    const engineer = new Engineer('Ryan', '31', 'Ryan_armstrong07@yahoo.com', 'Rarmstrong45');

    expect(engineer.name).toBe('Ryan');
    expect(engineer.id).toBe('31');
    expect(engineer.email).toBe('Ryan_armstrong07@yahoo.com');
    expect(engineer.github).toBe('Rarmstrong45');
});

test('gets engineers github', () => {
    const engineer = new Engineer('Ryan', '31', 'Ryan_armstrong07@yahoo.com', 'Rarmstrong45');

    expect(engineer.getGithub()).toBe('https://github.com/Rarmstrong45/')
})

test('gets role of engineer', () => {
    const engineer = new Engineer('Ryan', '31', 'Ryan_armstrong07@yahoo.com', 'Rarmstrong45');

    expect(engineer.getRole()).toBe('Role: Engineer');
});