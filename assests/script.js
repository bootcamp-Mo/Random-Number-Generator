var generateBtn = document.querySelector("#generate");

function generatePassword() {
  const passwordLength = window.prompt("Pick a password length 8 < 128");
  if (!passwordLength) {
    alert("Not valid");
    return;
  }

  let confirmedLowercase = window.confirm("LowerCase");
  let confirmedUppercase = window.confirm("UpperCase");
  let confirmedNumber = window.confirm("Number");
  let confirmedSymbols = window.confirm("Symbols");

  console.log(
    confirmedLowercase,
    confirmedUppercase,
    confirmedNumber,
    confirmedSymbols);

  if (!confirmedLowercase &&
    !confirmedUppercase &&
    !confirmedNumber &&
    !confirmedSymbols) {
    alert("Must pick at least one");
    return;
  }

  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var symbol = "!$%&+,-./:;<=>?^_";

  let emptyPassword = '';
  let password = '';

  if (confirmedLowercase) {
    emptyPassword += lowercase;
  }
  if (confirmedUppercase) {
    emptyPassword += uppercase;
  }
  if (confirmedNumber) {
    emptyPassword += numbers;
  }
  if (confirmedSymbols) {
    emptyPassword += symbol;
  }

  for (var i = 0; i < passwordLength; i++) {
    password +=
      emptyPassword.charAt(
        Math.floor(
          Math.random() * emptyPassword.length
        )
      );
  }
  return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);