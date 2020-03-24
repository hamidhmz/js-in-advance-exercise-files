let msg = "The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. If pattern is a string, only the first occurrence will be replaced. The original string is left unchanged."

let regexp = /the/gi

let new_msg1 = msg.replace('the','THAT')//just change first the 
console.log('new_msg1: ',new_msg1)

let new_msg2 = msg.replace(regexp,'THAT')
console.log('new_msg2: ',new_msg2)

let new_msg3 = msg.replace(regexp,(match)=>{
    return match.toUpperCase()
})
console.log('new_msg3: ',new_msg3)

