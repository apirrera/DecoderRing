// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function() {
    // you can add any code you want within this function scope

    function substitution(input, alphabet, encode = true) {
        const refAlp = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

        try {
            if (!alphabet) { throw false };
            alphabet = alphabet.split('');
            if (alphabet.length !== 26) { throw false };

            alphabet.forEach((letter) => {
                let count = 0;
                for (let i = 0; i < alphabet.length; i++) {
                    if (letter === alphabet[i]) {
                        count++;
                    }
                }
                if (count > 1) { throw false };
            });
        } catch (error) {
            return error;
        }

        const results = [];
        input = input.toLowerCase().split('');

        if (encode === true) {
            input.forEach((char, index) => {
                if (refAlp.includes(char)) {
                    refAlp.find((letter, index) => {
                        if (char === letter) {
                            newChar = alphabet[index];
                            results.push(newChar);
                        }
                    })
                } else {
                    results.push(char);
                }
            });
        } else {
            input.forEach((char, index) => {
                if (alphabet.includes(char)) {
                    alphabet.find((letter, index) => {
                        if (char === letter) {
                            newChar = refAlp[index];
                            results.push(newChar);
                        }
                    })
                } else {
                    results.push(char);
                }
            });
        }
        return results.join('');
    }

    return {
        substitution,
    };
})();

module.exports = { substitution: substitutionModule.substitution };