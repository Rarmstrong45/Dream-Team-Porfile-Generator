const Employee = require("../lib/Employee")
const { test, expect } = require("@jest/globals");

test('Creates new employee object', () => {
    const employee = new Employee('Ryan', '31', 'Ryan_armstrong07@yahoo.com');

    expect(employee.name).toBe('Ryan');
    expect(employee.id).toBe('31');
    expect(employee.email).toBe('Ryan_armstrong07@yahoo.com');
});

test('gets employees name', () => {
    const employee = new Employee('Ryan', '31', 'Ryan_armstrong07@yahoo.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('gets employees id', () => {
    const employee = new Employee('Ryan', '31', 'Ryan_armstrong07@yahoo.com');

    expect(employee.getId()).toEqual(expect.any(String));
});

test('gets employees email', () => {
    const employee = new Employee('Ryan', '31', 'Ryan_armstrong07@yahoo.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
});

test('gets the employees role', () => {
    const employee = new Employee('Ryan', '31', 'Ryan_armstrong07@yahoo.com');

    expect(employee.getRole()).toBe("Role: Employee");
});
