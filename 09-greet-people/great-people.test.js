
const greetPeople = require("./greet-people")
test("print list of names prefixed with Hello", function () {
   const mentors = ['Irina', 'Ashleigh', 'Etza'];
   const result = greetPeople(mentors)
    expect(result).toBe("Hello IrinaAshleighEtza")
})