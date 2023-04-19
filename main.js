var isValid = function(s) {
    var openBrackets = ["{", "[", "("];
    var closedBrackets = ["}", "]", ")"];
    var brackets = [];

    var i = 0;
    while (i < s.length) {
        // check if s[i] is closed bracket
        var index = closedBrackets.indexOf(s[i]);
        if (index > -1) {
            // if s[i] is closed bracket and last item in brackets[] is not open bracket
            // return false and stop loop
            if (brackets[brackets.length - 1] !== openBrackets[index]) {
                return false;
            }
            // else remove open bracket from brackets[]
            else {
                brackets.pop();
            }
        // if s[i] is open bracket, add to brackets[]
        } else {
            brackets.push(s[i]);
        }
        i++;
    }

    // if brackets is empty -> valid
    // otherwise -> invalid
    if (brackets.length > 0) {
        return false;
    }

    return true;
};