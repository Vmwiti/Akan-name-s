function findingNames(){
    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "yaw", "Kofi", "Kwame"];
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    var male = document.getElementById("male");
    var female = document.getElementById("female");

    var DATE = document.getElementById("date");
    dateArray = DATE.value.split("-");

    var CC = parseInt(dateArray[0][0] + dateArray[0][1]);
    var YY = parseInt(dateArray[0][2] + dateArray[0][3]);
    var MM = parseInt(dateArray[1])
    var DD = parseInt(dateArray[2])

    day = parseInt((((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7);

    if (maleNames[day] === undefined || femaleNames[day] === undefined) {
        alert("invalid date")

    } 
    else {
        if (male.selected === true) {
            console.log(maleNames[day])
            alert("your name is " + maleNames[day])
        }
        if (female.selected === true) {
            console.log(femaleNames[day])
            alert("your name is" + femaleNames[day])
        }
    }


}