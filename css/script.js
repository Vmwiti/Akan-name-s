let button = document.getElementById("btn");
const myForm = document.getElementById("myForm");
myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let myDate = new Date(formData.get("date"));
    alert("hello")
})
 


document.getElementById("btn").addEventListener("click", findingNames);