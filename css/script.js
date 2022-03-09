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

}