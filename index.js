  const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
  "/"];

// // var passwordButton = document.getElementById('password-button');
// // passwordButton.addEventListener("click", function() {
// //     console.log('Button is clicked');
// // });
 let passwordGen = document.getElementById("passwordGen")
 
 let passwordLength = 15
 
 passwordGen.addEventListener("click", function() { 
    const generatedPasswordOne = generateRandomPassword();
    const generatedPasswordTwo = generateRandomPassword()
    let button1 = document.getElementById("column1");
    let button2 = document.getElementById("column2");
    button1.textContent = generatedPasswordOne;
    button2.textContent = generatedPasswordTwo;
 })

//  function getRandomCharacter() {
//      let randomChar = Math.floor(Math.random() * characters.length)
//      return characters[randomChar]
//  }

function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

 function generateRandomPassword() {
    let randomPassword = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomCharacter()         
    }
    return randomPassword
}



















