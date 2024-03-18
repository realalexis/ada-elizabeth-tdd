module.exports = function (words, find) {
    for (let i = 0; i < words.length; i++) {
        if(words[i].includes(find)){
            console.log(words[i])
            return i
        }
    }
    return 0
};
