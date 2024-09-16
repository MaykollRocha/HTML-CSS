const convertBtn = document.getElementById("convert-btn");
const inputNumber = document.getElementById("number");
const outpurRoman = document.getElementById("output");
const outputContainer = document.querySelector(".outputContainer");

outputContainer.style.display = 'none';

const verifcNumber = (number) => number <= -1 || number >= 4000;
const convert_in_decimalRoman = (number) =>{
  if((number-9) ===0){
    return "IX";
  }else if ((number - 5) >= 0){
    return "V" + convert_in_decimalRoman(number - 5);
  }else if((number - 4) === 0){
    return "IV";
  }else if((number - 1)>=0){
    return "I" + convert_in_decimalRoman(number - 1);
  }else{
    return "";
  }
}
const convertCasa = (casa,number) =>{
  switch (number){
    case "I":
      if(casa === 1){
        return "X";
      }else if(casa === 2){
        return "C"
      }else{
        return "M";
      }
    case "V":
      if(casa === 1){
        return "L";
      }else{
        return "D";
      }
    case "X":
      if(casa === 1){
        return "C";
      }else{
        return "M";
      }
  }
}

const convertNumber = () =>{
  if(!(inputNumber.value)){
    outpurRoman.textContent = "Please enter a valid number";
    outputContainer.style.display = 'block';
    return;
  }else if(inputNumber.value <= -1){
    outpurRoman.textContent = "Please enter a number greater than or equal to 1";
    outputContainer.style.display = 'block';
    return;
  
  }else if(inputNumber.value >= 4000){
    outpurRoman.textContent = "Please enter a number less than or equal to 3999";
    outputContainer.style.display = 'block';
    return;
  }else{
    let string = "";
    let number = inputNumber.value
    number = number.split("").reverse()
    for(let i=0;i<number.length;i++){
      switch (i){
        case 0:
            string += convert_in_decimalRoman(number[i]).split("").reverse().join("")
            break;
        case 1:
            for (const char of convert_in_decimalRoman(number[i]).split("").reverse().join("") ){
              string += convertCasa(i,char);
            }
            break;
        case 2:
            for (const char of convert_in_decimalRoman(number[i]).split("").reverse().join("")){
              string += convertCasa(i,char);
            }
            break;
         case 3:
            for (const char of convert_in_decimalRoman(number[i]).split("").reverse().join("")){
              string += convertCasa(i,char);
            }
            break;
      }
    }
    outpurRoman.textContent = string.split("").reverse().join("")
    outputContainer.style.display = 'block';
  }
  
 
}

convertBtn.addEventListener("click", convertNumber);
inputNumber.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        cosole.log("entrou")
        convertNumber();
    }
});