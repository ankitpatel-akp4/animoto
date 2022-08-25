 document.querySelector("#sign_up").addEventListener("click",Saveuserdata);


function Saveuserdata(event){
    event.preventDefault();
    let usersArr = JSON.parse(localStorage.getItem("UserdataArr")) || [];
    

    var Email = document.querySelector("#email").value;
    var Password = document.querySelector("#password").value;
    if( Email === "" || Password === ""){
        alert("Enter All Valid Details");
    }

    let userSignupData = {
 
        useremail: Email,
        userpass: Password,
    }

    usersArr.push(userSignupData);
    localStorage.setItem("UserdataArr",JSON.stringify(usersArr));


    document.querySelector("#email").value = "";
    document.querySelector("#password").value = "";
    
    alert("SignedUp Successfully");
    window.location.href = "login.html"
}