
    let no1 = document.getElementById("p1").value;
    let no2 = document.getElementById("p2").value;
    
    const buttons = document.getElementsByTagName("button")
    buttons.addEventListener('click', calculate);

      function calculate(e) {
           const id = e.target.id
        if (id === 'multiply'){
            const answer = no1 * no2
            document.getElementById("demo").innerHTML = answer
        } else if (id === 'divide'){
            const answer = no1 / no2
            document.getElementById("demo").innerHTML = answer
        }else if (id === 'add'){
            const answer = no1 + no2
            document.getElementById("demo").innerHTML = answer
        } else if (id === 'subtract'){
            const answer = no1 - no2
            document.getElementById("demo").innerHTML = answer
        }
      }
     