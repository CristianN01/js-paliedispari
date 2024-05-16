
 const myPaliWord = prompt('type a word');

function reversedString(string){
    let newString = '';

    for (let i = string.length - 1; i >= 0; i--){
        newString += string[i];
    }
    return newString;   

} 
    if (reversedString(myPaliWord) === myPaliWord){
        console.log('E una parola palindroma')
    } else{
        console.log('Non e una parola palindroma')
    }






