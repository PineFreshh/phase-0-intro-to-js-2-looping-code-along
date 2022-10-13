const names = ["Guadalupe", "Ollie", "Aki"];
let birthday = [];

function writeCards(names, arr) {
    for (let i = 0; i < names.length; i++) {
        birthday.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    console.log(birthday)
    return birthday;
}

//writeCards(["Charlie", "Harley", "Marley"], "birthday")

function countDown() {
    let i = 10;
    while(i > -1) {
        console.log(i--);
    }
    return countDown
}