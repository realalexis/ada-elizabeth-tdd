module.exports = function greetPeople(people) {
    let greeting = "Hello "

    people.forEach(function (person) {
        greeting = greeting + person
    })

    return greeting
}

/*
  Let's trace this piece of code - what is the value of result with this input

  var mentors = ['Irina', 'Ashleigh', 'Etza'];
  var result = greetPeople(mentors)
*/