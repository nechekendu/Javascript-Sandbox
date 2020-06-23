const button = document.getElementById("button");
button.addEventListener('click', checkRandomNum);

function checkRandomNum () {
    let randomNumber = Math.ceil(Math.random() * 10);
    const num = document.getElementById('input').value
    
    if (num === randomNumber){
        document.write("Correct")
    }else {
        console.log(`Wrong, correct answer is ${randomNumber}`);
    }
}


