module.exports = function (words) {
    for (let i = 0; i < words.length; i++) {
        if(words[i].includes(find)){
            console.log(words[i])
            return i
        }
    }
    return 0
};
