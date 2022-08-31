document.querySelector("#log_in").addEventListener("click",checkUserdata);

function checkUserdata(event){
    event.preventDefault();
    var login = false;
    let check = JSON.parse(localStorage.getItem("UserdataArr"));
    let checkemail = document.querySelector("#email").value;
    let checkpass = document.querySelector("#password").value;
    console.log(check)
    for(let i = 0; i < check.length; i++){
        if(checkemail === check[i].useremail){
            if(checkpass === check[i].userpass){

                alert( `Welcome Back! 
                ${check[i].useremail}  
                \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Login Successfully` );
                document.querySelector("#email").value = "";
                document.querySelector("#password").value = "";

                
                login = true;
                localStorage.setItem("checklogggedin",login);
                window.location.href = "./index.html"
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