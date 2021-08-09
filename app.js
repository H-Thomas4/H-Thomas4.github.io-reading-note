//user input validation//
function validate() {
    let email = document.getElementsByName("email");
    let password = document.getElementsByName("password");
    let un = document.loginform.email.value;
    let pw = document.loginform.password.value;

    if (un == email) && (pw == password) {
        return true;
    } else {
       return prompt("login unsuccessful");
};


//prompt alert when mouse over the photos//
/*document.getElementsById("photo").addEventListener("mouseover", highLight);
document.getElementsById("photo").addEventListener("mouseout", normal);

let photo = document.getElementsById("photo");

function highLight(photo) {
    document.getElementsById("photo").style.height = "500";
    document.getElementsById("photo").style.width = 500";
};

function normal(photo) {
    document.getElementsById("photo").style.height = 250";
    document.getElementsById("photo").style.width = 250";
};*/



//subscription and unsubscription condition//
document.getElementsByClass("button").addEventListener("click", confirmation)
let subscribe = document.getElementById("subBtn");

function confirmation() {
    if (document.getElementById("subBtn")) {
        alert("Thank you for your support!");
    };
};

document.getElementById("unsubBtn").addEventListener("click", goodbye)
let unsubscribe = document.getElementById("unsubBtn");
let yes = true;
let cancel = false;

function goodbye() {
    if (document.getElementById("unsubBtn")) {
        alert("sorry to see you go")
    };
};




