let form = document.querySelector("form");
let nameInp = document.querySelector("#name");
let emailInp = document.querySelector("#email");
let phoneInp = document.querySelector("#phone");
let rollNo = document.querySelector("#rollNo");
let ageInp = document.querySelector("#age");
let errorNoti = document.querySelector("h3");

form.addEventListener("submit", (e) => {
    errorList = [];
    const re =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (nameInp.value == "" || nameInp.value.length < 4) {
        errorList.push("Name should be given and should be appropriate");
        errorList.push("Name should have atleast four characters");
    }
    if (re.test(emailInp.value) == false) {
        errorList.push("Email is not valid");
    }
    if (
        phoneInp.value == "" ||
        phoneInp.value.length < 11 ||
        phoneInp.value.length > 13
    ) {
        errorList.push("Phone number is not valid"); // Phone number should be valid and between 11-13 char//
    } if (rollNo.value.length > 4 || rollNo.value.length < 4) {
        errorList.push("Roll number should be provided and should be 4 characters exactly");
    }
    if (ageInp.value.length > 2 || ageInp.value.length < 2) {
        errorList.push("Age is required "); // Age's length should have atlesat 2 characters //
    }
    if (errorList.length > 0) {
        // If Array's length is greater than 0, means we have an error //
        e.preventDefault(); // Prevents the form from submitting //
    }
    errorList.forEach((element) => {
        errorNoti.innerHTML = element;
    });
});

