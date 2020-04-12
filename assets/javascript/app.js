// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page


var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?", "[", "]"];

console.log(numbers);
console.log(lowercase);
console.log(uppercase);
console.log(specialCharacters);

function generatePassword() {
    var passwordLength = prompt("Choose a password length between 8 and 128 characters")
    var password = ''
    var category = 0;
    if (passwordLength >= 8 && passwordLength <= 128) {

        var wantNumbers = confirm("Do you want it to contain numbers?");
        var wantLowerCase = confirm("Do you want to lowercase characters?");
        var wantUpperCase = confirm("Do you want to uppercase characters?");
        var wantSpecialCharacters = confirm("Do you want to special characters?");

        // generate password
        while (password.length < passwordLength) {
            category = Math.floor(Math.random() * 4)
            console.log(category)
            if (category === 0 && wantNumbers) {
                password += numbers[Math.floor(Math.random() * numbers.length)];
            } else if (category === 1 && wantLowerCase) {
                password += lowercase[Math.floor(Math.random() * lowercase.length)];
            } else if (category === 2 && wantUpperCase) {
                password += uppercase[Math.floor(Math.random() * uppercase.length)];
            } else if (category === 3 && wantSpecialCharacters) {
                password += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
            }
        }
    }

    else {
        alert("Invalid Length")
    }

    // console.log(wantNumbers);

    // console.log(wantUpperCase);


    document.getElementById('generatedPassword').textContent = password;
    var passwordBtn = document.getElementById('passwordButton');
    passwordBtn.addEventListener('click', function () {
        generatePassword()
    })
}