function shout(string) {
    return string.toUpperCase('hello');
}
function whisper(string) {
    return string.toLowerCase('HELLO');
}
function logShout(string) {
    console.log(string.toUpperCase('hello'));
}
function logWhisper(string) {
    console.log(string.toLowerCase('HELLO'));
}
function sayHiToGrandma(string) {
    if (string === "hello") {
        return "I can't hear you!"
    }
    else if (string === "HELLO") {
        return "YES INDEED!"
    }
    else if (string === "I love you, Grandma.") {
        return "I love you, too."
    }
}