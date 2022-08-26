
document.querySelector("#log_in").addEventListener("click",checkUserdata);

function checkUserdata(event){
    event.preventDefault();
    var login = false;
    let check = JSON.parse(localStorage.getItem("UserdataArr"));
    let checkemail = document.querySelector("#email").value;
    let checkpass = document.querySelector("#password").value;

    for(let i = 0; i < check.length; i++){
        if(checkemail === check[i].useremail){
            if(checkpass === check[i].userpass){
                alert(check[i].username + " " + "Loged in Successfully" );
                document.querySelector("#email").value = "";
                document.querySelector("#password").value = "";
                window.location.href = "index.html"
                login = true;
                localStorage.setItem("checklogggedin",login);
            }
            else{
                alert("Enter Valid Password");
            }
        }
        else{
            alert("Enter Valid Email");
        }
    }
}


