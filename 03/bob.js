var Bob = function() { 
}
  
Bob.prototype.hey = function hey(text) {
    const checkString = text.replace(/[' '(,)]/g, '').trim();
    let comma = false;
    if(/^\d+$/.test(checkString)) {
        comma = true;
    }
    const newText = text.replace(/[\d(,)]/g, ' ').trim();    
    let quest = false;
    let singleQuest = false;

    if( newText[newText.length - 1] == "?") {
        quest = true;
    }
    if( newText == "?") {
        singleQuest = true;
    }
    if (newText.length == 0 && comma == false) {
        return 'Fine. Be that way!';
    }
    if( singleQuest ) {
        return 'Sure.'
    }
    if ( quest && newText != newText.toUpperCase()) {
        return 'Sure.';
    } 
    if (newText == newText.toUpperCase() && comma == false) {
        return 'Whoa, chill out!';
    } else return 'Whatever.'
}

module.exports = Bob;
