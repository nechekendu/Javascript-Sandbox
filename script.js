var myDate = new Date();
myDate;

console.log("Sample Output: " + `Today is ${myDate} .`);


//Write a Javascript to find the !st of January between 2014 and 2050
 
for (let year = 2014; year <= 2050; year++) {
    let today =  new Date(year, 0, 1);
    var month = today.getMonth();
    var date = today.getDate();
    var year1 = today.getFullYear();
    var day = today.getDay();

    if (date === 1 && day === 0 && month == 0) {
        console.log(year);
    } else {
        alert("error");
    };
};