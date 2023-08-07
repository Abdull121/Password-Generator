
var result = document.getElementById("display");


// password generator function

function GeneratePassword() {

    var arr = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz", "123456789", "#$%&()*+,-./:;<=>?@[\]^_`{|}~"];
    var all = arr[0] + arr[1] + arr[2] + arr[3];


    var password = [];
    let passwordLength = 12; // max password length


    while (passwordLength > password.length) {
        password.push(all[Math.floor(Math.random() * all.length)]);



    }
    result.value = password.join(''); // join() to remove coma from array


}
function copyPassword() {
    result.select();
    document.execCommand("copy");




}