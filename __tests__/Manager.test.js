const Manager = require("../lib/Manager")
const { test, expect } = require("@jest/globals")


test('creates manager object', () => {
    manager = new Manager('Ryan', '31', 'Ryan_armstrong07@yahoo.com', '007');

    expect(manager.name).toBe('Ryan');
    expect(manager.id).toBe('31');
    expect(manager.email).toBe('Ryan_armstrong07@yahoo.com');
    expect(manager.officeNumber).toBe('007');
});

test('receives managers office number', () => {
    manager = new Manager('Ryan', '31', 'Ryan_armstrong07@yahoo.com', '007');

    expect(manager.getOfficeNumber()).toBe('Office Number: 007');
});

test('receives managers role', () => {
    manager = new Manager('Ryan', '31', 'Ryan_armstrong07@yahoo.com', '007');

    expect(manager.getRole()).toBe("Role: Manager")
})
