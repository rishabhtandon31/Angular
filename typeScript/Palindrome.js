function checkPalindrome(word) {
    var i, j;
    console.log(word[4]);
    for (i = 0, j = word.length - 1; i < word.length / 2; i++, j--) {
        if (word[i] != word[j]) {
            return false;
        }
    }
    return true;
}
console.log(checkPalindrome("arora"));
