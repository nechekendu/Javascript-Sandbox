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