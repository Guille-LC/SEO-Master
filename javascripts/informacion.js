const form = document.getElementById("form");
const fullName = document.getElementById("fullname");
const email = document.getElementById("email");
const message = document.getElementById("message");
const submit = document.getElementById("submit");

const userRegistred = (fullName,email,message) => {
    return {fullName,email,message}
};

form.addEventListener("submit", function(e) {
    e.preventDefault();
    let userName = fullName.value;
    let userEmail = email.value;
    let textMessage = message.value;
    let userInformation = userRegistred(userName,userEmail,textMessage);
    console.log(userInformation);
    saveSessionStorage("UserInfo", userInformation);
    this.reset();
});

const saveSessionStorage = (key,value) => {
    sessionStorage.setItem(key,JSON.stringify(value));
};