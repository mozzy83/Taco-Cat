//Retrieve value from user
//Remove special characters and white space
function getValue() {
    let inputValue = document.getElementById('userString').value;
    let parsed = inputValue.normalize('NFC').replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
    let {palindrome, reversed} = isPalindrome(parsed);
    displayResults(palindrome, reversed);
}
function isPalindrome(parsed) {
    //build array in reverse and check against forward
    let reversed = '';
    let palindrome = false;
    for (let i = parsed.length - 1; i >= 0; i--) {
        reversed += parsed[i];
    }
    if(reversed == parsed){palindrome = true;}
    return {palindrome, reversed};
}
//Display results to user
function displayResults(palindrome, reversed) {
    if(palindrome) {document.getElementById('alertHeading').innerHTML = 'Well done! You entered a palindrome!';}
    else {document.getElementById('alertHeading').innerHTML = 'Im sorry. Your value is not a palindrome.';}
    document.getElementById("msg").innerHTML = `Your phrase reversed is: <b>${reversed}</b>`;
    document.getElementById("alert").classList.remove('invisible');
}