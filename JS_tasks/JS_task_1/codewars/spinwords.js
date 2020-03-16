function reverseWord(word) {
    let rev_word = '';
    for (let i = 1; i <= word.length; ++i) {
        rev_word += word[word.length-i];
    }
    return rev_word;
}

function spinWords(str) {
    let rev_str = '';
    
    for (let i = 0; i < str.length; ++i) {
        let count = 0;
        let nowWord = '';
        if (str[i] == ' ') {
            rev_str += ' ';
        }
        while (str[count+i]!=' ' && str[count+i]) {
            nowWord += str[count+i];
            count++;
        }
        if (count>4) {
            rev_str += reverseWord(nowWord);
        }
        else {
            rev_str += nowWord;
        }
        if (count != 0)
            i += count - 1;
        else 
            i += count
    }
    return rev_str;
  };