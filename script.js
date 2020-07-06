console.dir(document)
function idCard() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var fullName = firstName + " " + lastName;
    var address = document.getElementById("address").value;
    var age = document.getElementById("age").value;
    var phoneNumber = document.getElementById("phoneNumber").value;

    document.getElementById("postFullName").innerHTML = fullName;
    document.getElementById("postAddress").innerHTML = address;
    document.getElementById("postAge").innerHTML = age
    document.getElementById("postPhoneNumber").innerHTML = "Phone Number: " + phoneNumber


    console.log(fullName)
    console.log(address)
    console.log(age)
    console.log(phoneNumber)
}
-