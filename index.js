// Code your solutions in this file
function writeCards(name, type) {
    let messages = [];
    for (let i = 0; i < name.length; i++) [
            messages.push("Thank you, " + name[i] + ", for the wonderful " + type + " gift!")
    ]
    return messages;
}
function countDown() {
    let count = 10;
    while (count >= 0) [
        console.log (count--)
    ]
}