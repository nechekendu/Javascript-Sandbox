/* let today = new Date();

const christmas = new Date(today.getFullYear(), 11, 25);

christmas.setFullYear(christmas.getFullYear() + 1);

let one_day = 1000*60*60*24;
 
console.log(Math.ceil((christmas.getTime() - today.getTime())/ (one_day)));
*/

let today = new Date;
let year = today.getFullYear();
let month = today.getDate();

let day = today.getDay();
let christmasDay = (year, 11, 25);
let one_day = 1000*60*60*24;
console.log(Math.ceil((today - christmasDay)/ (one_day)));



var myDate = new Date();
myDate;

console.log("Sample Output: " + `Today is ${myDate} .`);


//Write a Javascript to find the !st of January between 2014 and 2050
 
for (let year = 2014; year <= 2050; year++) {
    let today =  new Date(year, 0, 1); //this line gets the Date i.e YEAR, JAN, 1!
    var month = today.getMonth(); //this line invokes the Month
    var date = today.getDate();   // this line invokes the date
    var year1 = today.getFullYear();
    var day = today.getDay();     // this line gets the date starting from 0, 1, 2, 3, 4, 5, 6.

    if (date === 1 && day === 0 && month == 0) {  // date is equal to 1st and day is ); which means Sunday, month is 0; which means January.
        console.log(year);
    } else { //if the above conditions are not true, it prints error and runs till there's a date that meets the condition
        alert("error");
    };
};

//Open a new window
function myFunction() {
    var myWindow = window.open("", "myWindow", "width=300, height=400");
    
    //Write some text in the new window
    myWindow.document.write("<p>This is the source window</p>", " AG Baby is your Daddy");
    
    //Write some text in the window that created the new window
    myWindow.opener.document.write("<p>This is the source window!</p>");
    }
    
    //gets the browser name
    document.getElementById("demo").innerHTML = "The browser you're using is " + navigator.appCodeName;
