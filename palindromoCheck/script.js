const inputWord = document.getElementById('text-input');
const buttonCheker = document.getElementById('check-btn');
const outputWord = document.getElementById('result');

function limparPalavra(palavra) {
  return palavra.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
}

function verifcWord(){
  if(!inputWord.value){
    alert("Please input a value");
    return;
  }
  let isWordPalindrome = true;
  let word = limparPalavra(inputWord.value);
  console.log(word);
  for(let i = 0; i < word.length;i++){
    if(word[i] != word[word.length - (i +1)]){
      isWordPalindrome = false;
      break;
    }
  }

  outputWord.innerText =  `${inputWord.value} ${isWordPalindrome?'is a palindrome':'is not a palindrome'}`

}

buttonCheker.addEventListener('click',verifcWord)