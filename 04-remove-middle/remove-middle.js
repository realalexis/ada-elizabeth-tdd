module.exports = function (words){
    let index = Math.floor(words.length / 2);

    return words.splice(index, 1);
};