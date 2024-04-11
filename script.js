const upperset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerset = "abcdefghijklmnopqrstuvwxyz";
const numberset = "0123456789";
const symbolset = "!@#$%^&*()_+";


const upperInput = document.getElementById("upper-case");
const lowerInput = document.getElementById("lower-case");
const numberInput = document.getElementById("number");
const symbolInput = document.getElementById("symbols");
const totalChar = document.getElementById("total-char");
const passBox = document.getElementById("pass-box")



const getRandomData = (dataSet) => {
  return dataSet[Math.floor(Math.random() * dataSet.length)];
}


const getPassword = (password = "") =>{
  if(upperInput.checked){
    password += getRandomData(upperset);
  }
  if(lowerInput.checked){
    password += getRandomData(lowerset);
  }
  if(numberInput.checked){
    password += getRandomData(numberset);
  }
  if(symbolInput.checked){
    password += getRandomData(symbolset);
  }
  if(password.length < totalChar.value){
    return getPassword(password);
  }
  passBox.innerText = truncateString(password, totalChar.value)
  
  
}
getPassword();


document.getElementById("btn").addEventListener('click', function(){
  getPassword();
});

function truncateString(str, num){
  if(str.length > num){
    let subString = str.substring(0, num);
    return subString;
  }else{
    return str;
  }
}
