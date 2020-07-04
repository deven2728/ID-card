function idCard(); {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value
    var address = document.getElementById("address").value
    var fullName = firstName + "" + lastName;
    document.getElementById("postFullName").innerHTML = fullName;
}
button.addEventListener("click", function handleClick(event){
    console.log(event.target.innerHTML)
})