let caesarCipher = (str, offset) => {
    let encodedStr = "";

    //A-Z = 65-90
    //a-z = 97-122
    for (let i in str) {
        let char = str[i];

        // non-letter, don't offset
        if(!isLetter(char)) {
            encodedStr += char;
            continue;
        };

        let isUpperCase = false;
        if(char.toUpperCase() === char) {
            isUpperCase = true;
        }

        char = char.charCodeAt(0);

        char += offset;

        // offset outside of range wrap
        if((isUpperCase) && (char < 65)) {
            char += 26;
        } else if ((isUpperCase) && (char > 90)) {
            char -= 26;
        } else if((!isUpperCase) && (char < 97)) {
            char += 26;
        } else if ((!isUpperCase) && (char > 122)) {
            char -= 26;
        }

        encodedStr += String.fromCharCode(char);
    }
    
    return encodedStr;
}

let isLetter = char => {
    let val = char.charCodeAt(0);

    if(((val >= 65) && (val <= 90)) || ((val >= 97) && (val <= 122))) {
        return true;
    }

    return false;
}

module.exports = caesarCipher;