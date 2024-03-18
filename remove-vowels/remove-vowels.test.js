
const removeVowels = require("./remove-vowels")
test("remove vowels from word", function () {
   const mot = "hello";

   const result = removeVowels(mot)

    expect(result).toBe("h_ll_")
});