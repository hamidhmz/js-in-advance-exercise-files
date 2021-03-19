
decodeMorse = function(morseCode){
  const separatedWords = morseCode.split("   ");
  const decodedArrayWords = separatedWords.map((word)=>{
    const decodedWord = word.split(" ").map(vocab=>{
      console.log(vocab)
      return MORSE_CODE[vocab]
    })
    
    return decodedWord.join("")
  })
  console.log(decodedArrayWords)
  const decodedPhrase = decodedArrayWords.join(" ")
  
  return decodedPhrase
}
