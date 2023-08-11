var result = document.getElementById("display");


document.getElementById("btn").addEventListener("click", function () {
  var arr = [
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "abcdefghijklmnopqrstuvwxyz",
    "123456789",
    "#$%&()*+,-./:;<=>?@[]^_`{|}~",
  ];
  var all = arr[0] + arr[1] + arr[2] + arr[3];

  var password = [];
  let passwordLength = 12; // max password length

  while (passwordLength > password.length) {
    password.push(all[Math.floor(Math.random() * all.length)]);
  }
  result.value = password.join(""); // join() to remove coma from array
});

document.getElementById("copyimg").addEventListener("click", function () {
  result.select();
  document.execCommand("copy");
});
