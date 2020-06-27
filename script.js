// Write a prograam that tells if a number is a multiple of 3 and 7
const form = document.querySelector("form");
form.addEventListener('submit', multiple)


function multiple (e) {
  e.preventDefault()

   const x = form.number.value
  if (x % 3 ===0 || x % 7 === 0)
  {
    `Output ${x} is a multiple of 3 or 7`
  } else {
    `Output ${x} is not...`
  }
form.number.reset();



// Write a program that check whether three given integer value are in range 50..99(inclusive).Return true if one or more are in the said range
function positive_integers (x,y,z) {
  return (x >= 50 && x <= 99) || (y >= 50 && y <= 99) || (z >= 50 && z <= 99);
};
console.log(positive_integers(112, 23, 39));
console.log(positive_integers(65, 73, 99));
console.log(positive_integers(12, 123, 49));
console.log(positive_integers(112, 68, 79));


//how to remove a character in a string 

String.prototype.removeCharAt = function (i) {
  let word = this.split('');
  word.splice(i-1, 1); //use word.splice(i, 1) if you dont want to uss the zero-indexed count
  return word.join('');
}
console.log("electrocute".removeCharAt(4));
console.log("electrocute".removeCharAt(1));
console.log("electrocute".removeCharAt(8));



//Write a program that Grades the scores of student that wrote an Exam/Test
const x = document.querySelector("#input").value 
const button = document.querySelector("#button")
button.addEventListener('click', result);

function result (){

  if (x <=100 && x >= 80){
    document.querySelector("#demo").innerHTML = `Your grade score ${x} is A`;
  } else if (x <= 79 && x >= 70){
    document.querySelector("#demo").innerHTML = `Your grade score ${x} is B`;
  } else if (x <= 69 && x >= 60){
    document.querySelector("#demo").innerHTML = `Your grade score ${x} is C`;
  } else if (x <= 59 && x >= 50) {
    document.querySelector("#demo").innerHTML = `Your grade score ${x} is D`
  }else if (x <= 49 && x >= 40) {
    document.querySelector("#demo").innerHTML = `Your grade score ${x} is E`
  }else if (x <= 39 && x >= 0) {
    document.querySelector("#demo").innerHTML = `Your grade score ${x} is F`
  } else{
    document.querySelector("#demo").innerHTML = `Input a vaild Score`
  }
};



//Adding numbers with Arrays

function add (numbers) {
  return numbers[0] + numbers[1] + numbers[2]
};
console.log(add([2, 4, 9]));
console.log(add([12, 43, 19]));
console.log(add([29, 44, 69]));



//Write a Javascript program that finds the type of any given Angle.
  const form = document.querySelector("form");
  form.addEventListener('submit', angle);

  function angle() {
    const x = form.number.value 
    switch (x) {
      case 1: (x >= 0 && x <= 90)
      console.log(`${x} is an Acute Angle`)
      break;

      case 2: (x >= 91 && x <= 180)
      console.log(`${x} is an Obtuse Angle`)
      break;

      case 3: (x === 90)
      console.log(`${x} is a 90 degree Angle`)
      break;
      
      case 4: (x === 180)
      console.log(`${x} is a 180 degree angle`)
      break;
    }
  };