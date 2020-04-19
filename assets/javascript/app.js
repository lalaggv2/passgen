

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?", "[", "]"];

console.log(numbers);
console.log(lowercase);
console.log(uppercase);
console.log(specialCharacters);

function generatePassword() {
    var passwordLength = prompt("Choose a password length between 8 and 128 characters");
    var password = "";
    var category = 0;
    if (passwordLength >= 8 && passwordLength <= 128) {
        var wantNumbers = confirm("Do you want it to contain numbers?");
        var wantLowerCase = confirm("Do you want it to contain lowercase characters?");
        var wantSpecialCharacters = confirm("Do you want it to contain special characters?");
        var wantUpperCase = confirm("Do you want it to contain uppercase characters?");

        if (wantNumbers || wantLowerCase || wantUpperCase || wantSpecialCharacters) {
            // generate password
            while (password.length < passwordLength) {
                category = Math.floor(Math.random() * 4);
                console.log(category);
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

            document.getElementById('generatedPassword').textContent = password;
        } else {
            alert('You must select at least one option')
        }
    } else {
        alert("Invalid Length")
    }
}
var passwordBtn = document.getElementById('passwordButton');
passwordBtn.addEventListener('click', function () {
    generatePassword()
})