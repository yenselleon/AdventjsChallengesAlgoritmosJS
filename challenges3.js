
function isValid(letter) {
    const regexTestHasParenthesis = /\(([^)]+)\)/;
    const hasEmptyParenthesis = /\(\)/;
    const isValid = regexTestHasParenthesis.test(letter);
    
    if(!isValid){
        return false

    }else{
        const isEmpty = hasEmptyParenthesis.test(letter)

        if(isEmpty){
            return false;
        }else{
            const indexFirtsParentesis = letter.indexOf('(');
            const indexLastParentesis = letter.indexOf(')');

            const avoidCharacters = ['{', '}', '[', ']'];

            const splitLetter = letter.slice(indexFirtsParentesis, indexLastParentesis + 1);
            const isNotValid = avoidCharacters.some( letter => splitLetter.includes(letter));

            return isNotValid ? false : true;
        }

    }
   // ¡No dejes que el Grinch gane!
};


console.log(isValid("hola(asdadasd)"));