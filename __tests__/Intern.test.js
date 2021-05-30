const Intern = require("../lib/Intern")
const { test, expect } = require("@jest/globals")

test('creates intern object', () => {
    const intern = new Intern('Ryan', '31', 'Ryan_armstrong07@yahoo.com', 'University of Texas Austin');

    expect(intern.name).toBe('Ryan');
    expect(intern.id).toBe('31');
    expect(intern.email).toBe('Ryan_armstrong07@yahoo.com');
    expect(intern.school).toBe('University of Texas Austin');
});

test('gets the interns school', () => {
    const intern = new Intern('Ryancuddeback', 'Ryan', '31', 'University of Texas Austin');

    expect(intern.getSchool()).toBe('School: University of Texas Austin');
});

test('gets the interns role', () => {
    const intern = new Intern('Ryancuddeback', 'Ryan', '31', 'University of Texas Austin');

    expect(intern.getRole()).toBe('Role: Intern');
});