// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function() {
    // you can add any code you want within this function scope

    function caesar(input, shift, encode = true) {
        // your solution code here
        if (shift === 0 || shift < -25 || shift > 25 || shift === undefined) {
            return false
        }
        if (!encode) {
            shift = -shift
        }
        input = input.toLowerCase();
        const alp = "abcdefghijklmnopqrstuvwxyz";
        const out = [];
        for (let i = 0; i < input.length; i++) {
            const char = input[i];
            let code = alp.indexOf(char)
            if (code === -1) {
                out.push(char);
            } else {
                code += shift;
                if (code > 25) {
                    code -= 26
                }
                if (code < 0) {
                    code += 26
                }
                out.push(alp[code])
            }
        }
        return out.join("")
    }

    return {
        caesar,
    };
})();

module.exports = { caesar: caesarModule.caesar };